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
var WebPage = /** @class */ (function () {
    function WebPage(theme) {
        this.theme = theme;
    }
    WebPage.prototype.getContent = function (content) {
        return content;
    };
    return WebPage;
}());
var LightTheme = /** @class */ (function () {
    function LightTheme() {
    }
    LightTheme.prototype.getColor = function () {
        return 'Light color theme';
    };
    return LightTheme;
}());
var DarkTheme = /** @class */ (function () {
    function DarkTheme() {
    }
    DarkTheme.prototype.getColor = function () {
        return 'Dark color theme';
    };
    return DarkTheme;
}());
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    // theme: Theme;
    function Main(theme) {
        return _super.call(this, theme) || this;
    }
    Main.prototype.getContent = function () {
        return 'Main page with ' + this.theme.getColor();
    };
    return Main;
}(WebPage));
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    // theme: Theme;
    function About(theme) {
        return _super.call(this, theme) || this;
    }
    About.prototype.getContent = function () {
        return 'About page with ' + this.theme.getColor();
    };
    return About;
}(WebPage));
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    // theme: Theme;
    function Contacts(theme) {
        return _super.call(this, theme) || this;
    }
    Contacts.prototype.getContent = function () {
        return 'Contacts page with ' + this.theme.getColor();
    };
    return Contacts;
}(WebPage));
var main = new Main(new LightTheme());
var about = new About(new DarkTheme());
var contacts = new Contacts(new LightTheme());
this.bridgeResult = main.getContent();
this.bridgeResult += '\n';
this.bridgeResult += about.getContent();
this.bridgeResult += '\n';
this.bridgeResult += contacts.getContent();
console.log(this.bridgeResult);
