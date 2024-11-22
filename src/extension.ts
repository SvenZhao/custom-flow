import * as vscode from 'vscode';
import { flow, get, find } from 'lodash';
import operations from './operations';

// 插件激活时调用的函数
export function activate(context: vscode.ExtensionContext) {
  // 注册命令，用户触发时执行 executeCustomFlow
  const disposable = vscode.commands.registerCommand('customFlow.execute', executeCustomFlow);

  // 将命令的清理工作添加到上下文中，插件停用时自动移除
  context.subscriptions.push(disposable);

  vscode.window.showInformationMessage('CustomFlow 已启动');
}

// 执行自定义操作的主逻辑
async function executeCustomFlow() {
  try {
    const userOperations = getUserOperations();
    if (!userOperations.length) {
      return vscode.window.showWarningMessage('没有定义自定义操作。请在设置中配置 customFlow.operations。');
    }

    const selectedOperation = await selectOperation(userOperations);
    if (!selectedOperation) return;

    const operation = find(userOperations, { name: selectedOperation });
    if (!operation) {
      return vscode.window.showErrorMessage(`找不到操作 "${selectedOperation}"。`);
    }
    const selectedText = await getSelectedText()
    if (operation.needSelect && !selectedText) {
      return vscode.window.showErrorMessage('请选中文本后再执行操作。');
    }
    // 将操作步骤和参数传递给 applyStepsToText
    const processedText = await applyStepsToText(selectedText, operation.steps);
    await handleResult(processedText, operation.resultAction);
  }
  catch (e) {
    // 统一处理并打印错误信息
    const errorMessage = e instanceof Error ? e.message : JSON.stringify(e);
    console.error('CustomFlow Error:', e); // 打印完整错误供调试
    return vscode.window.showErrorMessage(`CustomFlow 执行失败 可以再调试工具插件具体异常: ${errorMessage}`);
  }
}

// 显示操作选择框，返回用户选择的操作名称
async function selectOperation(userOperations: { name: string }[]): Promise<string | undefined> {
  return vscode.window.showQuickPick(userOperations.map((op) => op.name), { placeHolder: '请选择要执行的操作：' });
}

// 获取当前选中的文本
async function getSelectedText(): Promise<string | undefined> {
  const editor = vscode.window.activeTextEditor;
  // 返回选中的文本
  return editor?.document.getText(editor.selection);
}

// 使用 lodash 的 flow 来组合步骤
async function applyStepsToText(text: string | undefined, steps: { name: string, params?: any }[]): Promise<string> {
  const funcs = steps.map(step => {
    const func = get(operations, step.name);
    if (!func) {
      vscode.window.showErrorMessage(`未知的步骤: "${step.name}"。`);
      return (text: string) => text; // 如果步骤找不到，返回原文本
    }

    // 如果有参数，传递给步骤函数
    return (text: string) => {
      if (step.params === undefined || step.params === null) {
        return func(text); // 如果没有传递参数，直接调用无参函数
      }
      return func(text, step.params); // 否则传递 params
    };
  });

  const pipeline = flow(funcs);
  return pipeline(text);
}

// 根据 resultAction 配置的动作处理结果
async function handleResult(processedText: string, resultAction?: string) {
  const editor = vscode.window.activeTextEditor;

  // 根据结果动作，处理文本
  switch (resultAction) {
    case 'clipboard':
      // 如果配置了将结果复制到剪贴板
      await vscode.env.clipboard.writeText(processedText);
      vscode.window.showInformationMessage(`结果已复制到剪贴板。`);
      break;

    case 'replace':
    default:
      // 默认替换选中的文本
      if (editor) {
        await editor.edit(editBuilder => {
          editBuilder.replace(editor.selection, processedText);
        });
      }
  }
}


// 定义操作配置的类型
enum EresultAction {
  /** 到剪贴板 */
  clipboard = 'clipboard',
  /** 替换 默认 */
  replace = 'replace'
}
interface IStep {
  /**步骤名称 */
  name: string,
  /**步骤参数 */
  params?: any
}

interface ICustomOperation {
  /**操作名称 */
  name: string;
  /** 需要选中文本 默认需要 */
  needSelect?: boolean;
  /** 操作步骤 */
  steps: IStep[];
  /** 结果展示方式 */
  resultAction?: EresultAction;
}


// 获取用户配置的操作
function getUserOperations(): ICustomOperation[] {
  const config = vscode.workspace.getConfiguration('customFlow');
  const operations = config.get<ICustomOperation[]>('operations') || [];
  // 返回配置的操作
  return operations.map(op => ({
    /**默认需要选中 */
    needSelect: true,
    ...op,
    steps: op.steps.map(step => ({ name: step.name, params: step.params || null, }))
  }));
}