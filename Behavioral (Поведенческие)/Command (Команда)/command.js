var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, inventore?';
var Edit = /** @class */ (function () {
    function Edit(edit) {
        this.text = edit;
    }
    return Edit;
}());
var Command = /** @class */ (function () {
    function Command(edit) {
        this.edit = edit;
    }
    return Command;
}());
var InsertCommand = /** @class */ (function (_super) {
    __extends(InsertCommand, _super);
    function InsertCommand(edit) {
        return _super.call(this, edit) || this;
    }
    InsertCommand.prototype.execute = function (word, position) {
        var text = this.edit.text;
        var partBefore = text.substring(0, position);
        var partAfter = text.substring(position);
        this.edit.text = "".concat(partBefore).concat(word).concat(partAfter);
    };
    return InsertCommand;
}(Command));
var DeleteCommand = /** @class */ (function (_super) {
    __extends(DeleteCommand, _super);
    function DeleteCommand(edit) {
        return _super.call(this, edit) || this;
    }
    DeleteCommand.prototype.execute = function (word) {
        var text = this.edit.text;
        this.edit.text = text.replace(word, '');
    };
    return DeleteCommand;
}(Command));
var Editor = /** @class */ (function () {
    function Editor(text) {
        this.editor = new Edit(text);
        this.insertCommand = new InsertCommand(this.editor);
        this.deleteCommand = new DeleteCommand(this.editor);
    }
    Editor.prototype.getText = function () {
        return this.editor.text;
    };
    return Editor;
}());
// const main = () => {
var editor = new Editor(TEXT);
var insertButton = function (sourseWord, pos) {
    editor.insertCommand.execute(sourseWord, pos);
};
var deleteButton = function (sourseWord) {
    editor.deleteCommand.execute(sourseWord);
};
console.log('Before insert:\n', editor.getText());
insertButton(' LOREM', 5);
console.log('After insert:\n', editor.getText());
console.log('');
console.log('Before delete:\n', editor.getText());
deleteButton('Lorem ');
console.log('After delete:\n', editor.getText());
// }
