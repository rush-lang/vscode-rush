// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as data from './data.json';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let completionProvider = vscode.languages.registerCompletionItemProvider('rush', {
		provideCompletionItems(document, position, token, context) {
			return [
				...data.keywords.map(kw => new vscode.CompletionItem(kw, vscode.CompletionItemKind.Keyword)),
				...data.structs.map(kw => new vscode.CompletionItem(kw, vscode.CompletionItemKind.Struct)),
				...data.classes.map(kw => new vscode.CompletionItem(kw, vscode.CompletionItemKind.Class)),
			]
		},
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
