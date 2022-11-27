interface WebPageInterface {
    getContent(content: string): string;
}
class WebPage implements WebPageInterface{
    theme: Theme;
    constructor(theme: Theme){
        this.theme = theme;
    }
    getContent(content: string): string {
        return content;
    }
}
interface Theme {
    getColor(): string;
}
class LightTheme implements Theme {
    getColor() {
        return 'Light color theme'
    }
}
class DarkTheme implements Theme {
    getColor() {
        return 'Dark color theme'
    }
}
class Main extends WebPage{
    theme: Theme;
    constructor(theme: Theme){
        super(theme);
    }
    getContent(){
        return 'Main page with ' + this.theme.getColor();
    }
}
class About extends WebPage{
    theme: Theme;
    constructor(theme: Theme){
        super(theme);
    }
    getContent(){
        return 'About page with ' + this.theme.getColor();
    }
}
class Contacts extends WebPage{
    theme: Theme;
    constructor(theme: Theme){
        super(theme);
    }
    getContent(){
        return 'Contacts page with ' + this.theme.getColor();
    }
}
const main: Main = new Main(new LightTheme());
const about: About = new About(new DarkTheme());
const contacts: Contacts = new Contacts(new LightTheme());
this.bridgeResult = main.getContent();
this.bridgeResult += '\n';
this.bridgeResult += about.getContent();
this.bridgeResult += '\n';
this.bridgeResult += contacts.getContent();
console.log(this.bridgeResult);