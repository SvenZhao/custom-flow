import * as vscode from 'vscode';
import operations from './operations/index';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('customFlow.execute', async () => {
    const config = vscode.workspace.getConfiguration('customFlow');
    const userOperations = config.get('operations') as { name: string; steps: string[]; resultAction?: string }[] || [];

    if (!userOperations.length) {
      return vscode.window.showWarningMessage('No custom operations defined. Please configure customFlow.operations in settings.');
    }

    // 弹出用户定义操作的选择列表
    const selectedOperation = await vscode.window.showQuickPick(
      userOperations.map((op) => op.name),
      { placeHolder: 'Select an operation to run:' }
    );

    if (!selectedOperation) {
      return; // 用户取消选择
    }

    const operation = userOperations.find((op) => op.name === selectedOperation);
    if (!operation) {
      return vscode.window.showErrorMessage(`Operation "${selectedOperation}" not found.`);
    }

    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.selection.isEmpty) {
      return vscode.window.showErrorMessage('Please select some text to apply the operation.');
    }

    const selectedText = editor.document.getText(editor.selection);
    let processedText = selectedText;

    // 执行步骤
    for (const step of operation.steps) {
      const func = operations[step as keyof typeof operations];
      if (!func) {
        return vscode.window.showErrorMessage(`Unknown step: "${step}".`);
      }
      processedText = func(processedText);
    }

    // 根据 resultAction 处理结果
    switch (operation.resultAction) {
      case 'clipboard':
        await vscode.env.clipboard.writeText(processedText);
        vscode.window.showInformationMessage(`"${selectedOperation}" applied. Result copied to clipboard.`);
        break;

      case 'replace':
      default:
        await editor.edit(editBuilder => {
          editBuilder.replace(editor.selection, processedText);
        });
        vscode.window.showInformationMessage(`"${selectedOperation}" applied. Text replaced.`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
