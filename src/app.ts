// UI BUILDER DOCUMENTATION :

import { UIBuilder } from "@limbusfoundation/uibuilder";

import logoImg from "./assets/uibuilder-logo-vector.svg";


// DOCUMENTATION STYLE :

const sidebarStyle = UIBuilder.style({
    width: "260px",
    height: "100vh",
    padding: "28px 20px",
    borderRight: "1px solid #e5e7eb",
    backgroundColor: "#fafafa",
    position: "fixed",
    left: "0",
    top: "0",
    overflowY: "auto"
});

const contentStyle = UIBuilder.style({
    marginLeft: "260px",
    padding: "70px 80px",
    maxWidth: "1100px"
});

const logoStyle = UIBuilder.style({
    width: "150px",
    marginBottom: "35px"
});

const titleStyle = UIBuilder.style({
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "15px"
});

const subtitleStyle = UIBuilder.style({
    fontSize: "18px",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "45px"
});

const sectionTitleStyle = UIBuilder.style({
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "50px",
    marginBottom: "15px"
});

const textStyle = UIBuilder.style({
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: "1.7",
    marginBottom: "20px"
});

const codeStyle = UIBuilder.style({
    display: "block",
    padding: "20px",
    backgroundColor: "#111827",
    color: "#e5e7eb",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.6",
    whiteSpace: "pre",
    overflowX: "auto",
    marginBottom: "30px"
});

const navStyle = UIBuilder.style({
    display: "block",
    padding: "8px 10px",
    color: "#4b5563",
    fontSize: "14px",
    textDecoration: "none",
    marginBottom: "3px"
});

const navTitleStyle = UIBuilder.style({
    fontSize: "11px",
    fontWeight: "700",
    color: "#9ca3af",
    letterSpacing: "1px",
    marginTop: "25px",
    marginBottom: "10px"
});


// COMPONENTS :

const navigation = UIBuilder.component((label: string, target: string) => {

    const link = UIBuilder.custom({
        tag: "a",
        attribute: {
            href: target
        }
    });

    link.label(label);
    link.style(navStyle);

    return link;
});

const section = UIBuilder.component((title: string, description: string)  => {

    const container = UIBuilder.group({});

    const heading = UIBuilder.label({
        label: title
    });

    const text = UIBuilder.label({
        label: description
    });

    heading.style(sectionTitleStyle);
    text.style(textStyle);

    container.render(heading);
    container.render(text);

    return UIBuilder.blend(container);

});

const code = UIBuilder.component((content: string) => {

    const element = UIBuilder.custom({
        tag: "code"
    });

    element.label(content);
    element.style(codeStyle);

    return element;

});


// SID EBAR :

const sidebar = UIBuilder.group({});

sidebar.style(sidebarStyle);

const logo = UIBuilder.image({
    src: logoImg
});

logo.style(logoStyle);

sidebar.render(logo);

const introduction = UIBuilder.label({
    label: "INTRODUCTION"
});

introduction.style(navTitleStyle);

sidebar.render(introduction);

sidebar.render(navigation("Overview", "#overview"));
sidebar.render(navigation("Quick Start", "#quick-start"));


const api = UIBuilder.label({
    label: "API REFERENCE"
});

api.style(navTitleStyle);

sidebar.render(api);

sidebar.render(navigation("UIBuilder", "#uibuilder"));
sidebar.render(navigation("Button", "#button"));
sidebar.render(navigation("TextField", "#textfield"));
sidebar.render(navigation("Slider", "#slider"));
sidebar.render(navigation("Label", "#label"));
sidebar.render(navigation("Image", "#image"));
sidebar.render(navigation("Icon", "#icon"));
sidebar.render(navigation("IconButton", "#icon-button"));
sidebar.render(navigation("Panel", "#panel"));
sidebar.render(navigation("Group", "#group"));
sidebar.render(navigation("Custom", "#custom"));
sidebar.render(navigation("Component", "#component"));
sidebar.render(navigation("Blend", "#blend"));
sidebar.render(navigation("Style", "#style"));
sidebar.render(navigation("Event", "#event"));
sidebar.render(navigation("Watcher", "#watcher"));
sidebar.render(navigation("Store", "#store"));
sidebar.render(navigation("Router", "#router"));


// CONTENT :

const content = UIBuilder.group({});

content.style(contentStyle);


// HERO :

const title = UIBuilder.label({
    label: "UIBuilder"
});

title.style(titleStyle);

const subtitle = UIBuilder.label({
    label: "A vanilla-based UI library for creating user interfaces for web applications."
});

subtitle.style(subtitleStyle);

content.render(title);
content.render(subtitle);


// OVERVIEW :

content.render(
    section(
        "Overview",
        "UIBuilder provides a simple object-oriented API for creating and managing HTML elements without requiring a UI framework."
    )
);


// QUICK START :

const quickStart = section(
    "Quick Start",
    "Import UIBuilder and start creating your interface."
);

content.render(quickStart);

content.render(
    code(`import { UIBuilder } from "@limbusfoundation/uibuilder";

const button = UIBuilder.button({
    label: "Hello world"
});

UIBuilder.body.render(button);`)
);


// UI BUILDER :

content.render(
    section(
        "UIBuilder",
        "The main entry point for the library. It exposes the complete UI API."
    )
);


// BUTTON :

content.render(
    section(
        "Button",
        "Creates a native HTML button."
    )
);

content.render(
    code(`const button = UIBuilder.button({
    label: "Click me",
    className: "primary"
});`)
);


// TEXT FIELD :

content.render(
    section(
        "TextField",
        "Creates a text input field."
    )
);

content.render(
    code(`const input = UIBuilder.textField({
    placeholder: "Username",
    type: "text"
});`)
);


// SLIDER :

content.render(
    section(
        "Slider",
        "Creates a range slider."
    )
);

content.render(
    code(`const slider = UIBuilder.slider({
    value: "50"
});`)
);


// LABEL :

content.render(
    section(
        "Label",
        "Creates a text label."
    )
);

content.render(
    code(`const label = UIBuilder.label({
    label: "Hello world"
});

label.label("New text");`)
);


// IMAGE :

content.render(
    section(
        "Image",
        "Creates an image element."
    )
);

content.render(
    code(`const image = UIBuilder.image({
    src: "./image.png"
});`)
);


// ICON :

content.render(
    section(
        "Icon",
        "Creates an HTML <i> element."
    )
);

content.render(
    code(`const icon = UIBuilder.icon({
    className: "fa-solid fa-house"
});`)
);


// ICON BUTTON :

content.render(
    section(
        "IconButton",
        "Creates a button containing an icon."
    )
);

content.render(
    code(`const button = UIBuilder.iconButton({
    iconClassName: "fa-solid fa-house",
    label: "Home"
});`)
);


// PANEL :

content.render(
    section(
        "Panel",
        "Creates a generic panel container."
    )
);


// GROUP :

content.render(
    section(
        "Group",
        "Creates a generic container for composing UI elements."
    )
);

content.render(
    code(`const group = UIBuilder.group();

group.render(label);
group.render(button);`)
);


// CUSTOM :

content.render(
    section(
        "Custom",
        "Creates any HTML element using its tag name."
    )
);

content.render(
    code(`const input = UIBuilder.custom({
    tag: "input",
    attribute: {
        type: "range",
        min: 0,
        max: 100,
        value: 50
    }
});`)
);


// COMPONENT :

content.render(
    section(
        "Component",
        "Creates reusable UI components with properties."
    )
);

content.render(
    code(`const counter = UIBuilder.component((text) => {

    const label = UIBuilder.label({
        label: text
    });

    return label;
});

UIBuilder.body.render(
    counter("Hello world")
);`)
);


// BLEND :

content.render(
    section(
        "Blend",
        "Combines multiple UI elements into a single collection."
    )
);

content.render(
    code(`const content = UIBuilder.blend(
    label,
    button,
    image
);`)
);


// STYLE :

content.render(
    section(
        "Style",
        "Creates reusable style definitions or applies styles directly."
    )
);

content.render(
    code(`const style = UIBuilder.style({
    width: "200px",
    height: "400px"
});

image.style(style);

image.style({
    width: "200px",
    height: "400px"
});`)
);


// EVENT :

content.render(
    section(
        "Event",
        "Provides event handling for UI elements."
    )
);

content.render(
    code(`UIBuilder.event(button).add("click", () => {
    console.log("Clicked!");
});`)
);


// WATCHER :

content.render(
    section(
        "Watcher",
        "Observes changes to values and UIBuilder stores."
    )
);

content.render(
    code(`const count = UIBuilder.watcher.watch(0, value => {
    console.log(value);
});

count.value++;

UIBuilder.watcher.unwatch(count);`)
);


// STORE :

content.render(
    section(
        "Store",
        "Creates a reactive object that can be observed by UIWatcher."
    )
);

content.render(
    code(`const store = UIBuilder.store.set({
    count: 3,
    username: "rick"
});

UIBuilder.watcher.watch(store, state => {
    console.log(state.count);
});

store.get.count++;`)
);


// ROUTER :

content.render(
    section(
        "Router",
        "Provides route-based rendering for UI elements."
    )
);

content.render(
    code(`UIBuilder.router.route("/home", home);
UIBuilder.router.route("/settings", settings);

UIBuilder.router.init();

UIBuilder.router.navigate("/settings");`)
);


// RENDER :

UIBuilder.body.render(sidebar);
UIBuilder.body.render(content);