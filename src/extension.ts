import * as vscode from 'vscode';
import operations from './operations';
import { flow, get, find } from 'lodash';

// 插件激活时调用的函数
export function activate(context: vscode.ExtensionContext) {
  // 注册命令，用户触发时执行 executeCustomFlow
  const disposable = vscode.commands.registerCommand('customFlow.execute', executeCustomFlow);

  // 将命令的清理工作添加到上下文中，插件停用时自动移除
  context.subscriptions.push(disposable);

  vscode.window.showInformationMessage('CustomFlow 插件已激活。');
}

// 执行自定义操作的主逻辑
async function executeCustomFlow() {
  // 获取用户配置的操作
  const userOperations = getUserOperations();

  // 如果没有定义任何操作，显示警告信息
  if (!userOperations.length) {
    return vscode.window.showWarningMessage('没有定义自定义操作。请在设置中配置 customFlow.operations。');
  }

  // 弹出操作选择框，允许用户选择要运行的操作
  const selectedOperation = await selectOperation(userOperations);
  if (!selectedOperation) return; // 用户取消选择

  // 查找用户选择的操作
  const operation = find(userOperations, { name: selectedOperation });
  if (!operation) {
    // 如果没有找到操作，显示错误信息
    return vscode.window.showErrorMessage(`找不到操作 "${selectedOperation}"。`);
  }

  // 获取当前编辑器中选中的文本
  const selectedText = await getSelectedText();
  if (!selectedText) return; // 如果没有选择文本，退出

  // 根据操作步骤处理选中的文本
  const processedText = await applyStepsToText(selectedText, operation.steps);

  // 根据配置的结果动作处理处理后的文本（如复制到剪贴板或替换选中的文本）
  await handleResult(processedText, operation.resultAction);
}

// 显示操作选择框，返回用户选择的操作名称
async function selectOperation(userOperations: { name: string }[]): Promise<string | undefined> {
  return vscode.window.showQuickPick(
    userOperations.map((op) => op.name), // 显示所有操作的名称
    { placeHolder: '请选择要执行的操作：' } // 提示文字
  );
}

// 获取当前选中的文本
async function getSelectedText(): Promise<string | undefined> {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.selection.isEmpty) {
    // 如果没有打开编辑器或没有选中文本，提示用户
    vscode.window.showErrorMessage('请选中文本后再执行操作。');
    return undefined;
  }
  // 返回选中的文本
  return editor.document.getText(editor.selection);
}

// 使用 lodash 的 flow 来组合步骤
async function applyStepsToText(text: string, steps: string[]): Promise<string> {
  // 将每个步骤的操作函数映射到一个数组
  const funcs = steps.map(step => {
    const func = get(operations, step); // 使用 lodash 的 get 方法，简化查找步骤
    if (!func) {
      vscode.window.showErrorMessage(`未知的步骤: "${step}"。`);
      return (text: string) => text; // 返回原文本
    }
    return func;
  });

  // 使用 lodash 的 flow 来将多个函数按顺序组合成一个新的函数
  const pipeline = flow(funcs);

  // 执行管道，返回处理后的文本
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
      vscode.window.showInformationMessage(`文本已替换。`);
  }
}

// 定义操作配置的类型
interface ICustomOperation {
  name: string; // 操作名称
  steps: string[]; // 操作步骤
  resultAction?: string; // 结果动作：可以是 'clipboard' 或 'replace'
}

// 获取用户配置的操作
function getUserOperations(): ICustomOperation[] {
  const config = vscode.workspace.getConfiguration('customFlow');
  // 返回自定义的操作配置，若无则返回空数组
  return config.get('operations') as ICustomOperation[] || [];
}
