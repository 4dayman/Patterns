const TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, inventore?'

class Edit {
    text: string;
    constructor(str: string) {
        this.text = str;
    }
}
abstract class Command {
    edit: Edit;
    constructor(edit: Edit) {
        this.edit = edit 
    }
    abstract execute(...args: any[]): void;
}
class InsertCommand extends Command {
    constructor(edit: Edit) {
        super(edit);
    }
    execute(word: string, position: number) {
        const text = this.edit.text;
        const partBefore = text.substring(0, position);
        const partAfter = text.substring(position);
        this.edit.text = `${partBefore}${word}${partAfter}`
    }
}
class DeleteCommand extends Command {
    constructor(edit: Edit) {
        super(edit);
    }
    execute(word: string) {
        const text = this.edit.text;
        this.edit.text = text.replace(word, '')
    }
}

class Editor {
    editor: Edit;
    insertCommand: InsertCommand;
    deleteCommand: DeleteCommand;
    constructor(text: string) {
        this.editor = new Edit(text);
        this.insertCommand = new InsertCommand(this.editor);
        this.deleteCommand = new DeleteCommand(this.editor);
    }
    getText() {
        return this.editor.text;
    }
}

const editor = new Editor(TEXT);
const insertButton = (sourseWord: string, pos: number) => {
    editor.insertCommand.execute(sourseWord, pos);
}
const deleteButton = (sourseWord: string) => {
    editor.deleteCommand.execute(sourseWord);
}     
console.log('Before insert:\n', editor.getText());
insertButton(' LOREM', 5);
console.log('After insert:\n', editor.getText());
    
console.log('');
    
console.log('Before delete:\n', editor.getText());
deleteButton('Lorem ');
console.log('After delete:\n', editor.getText());
