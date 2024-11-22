import { window } from "vscode"

export const showWarningMessage = (message: string) => {
    window.showWarningMessage(`custom-flow: ${message}`)
}
export const showErrorMessage = (message: string) => {
    window.showErrorMessage(`custom-flow: ${message}`)
}