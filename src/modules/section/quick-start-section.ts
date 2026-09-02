// QUICK START [SECTION] :

import { RouterView } from "../../components/router-view/router-view";

import { UIBuilder } from "@limbusfoundation/uibuilder";

import { Topic } from "../../components/topic/topic";

import { CodeCopy } from "../../components/code-copy/code-copy";

import { CodeBlock } from "../../components/code-block/code-block";


// INSTALL :

const installTopic = Topic({
    title: "Install",
    content: "Install UIBuilder from npm and start building your interface with a simple and lightweight DOM-based API."
    ,highlight : ["DOM-based","API"]
});

const libInstall = CodeCopy({ 
    code: "$ npm install @limbusfoundation/uibuilder"
});


// IMPORT :

const importTopic = Topic({
    title: "Import",
    content: "Import UIBuilder into your project and access its components, utilities, and DOM helpers directly from the package."
    ,highlight : ["DOM"]

});

const importCode = await CodeBlock({
    code: `import { UIBuilder } from "@limbusfoundation/uibuilder";`
});


// CREATE AN ELEMENT :

const elementTopic = Topic({
    title: "Create an Element",
    content: "Create UI elements using UIBuilder's simple API. Each element is a wrapper around a native DOM element."
    ,highlight : ["DOM"]

});

const elementCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render your elements into the document using UIBuilder's render API. Elements can be rendered into the body or any UIBuilder container."
    ,highlight : ["API"]

});

const renderCode = await CodeBlock({
    code: `UIBuilder.body.render(label);`
});


// COMPOSE ELEMENTS :

const composeTopic = Topic({
    title: "Compose",
    content: "Build larger interfaces by combining multiple elements with UIBuilder.blend or by rendering children directly into containers."

});

const composeCode = await CodeBlock({
    code: `const title = UIBuilder.label({
    label: "Welcome"
});

const button = UIBuilder.button({
    label: "Get Started"
});

const content = UIBuilder.group();

content.render(title);
content.render(button);

UIBuilder.body.render(content);`
});


// EVENTS :

const eventTopic = Topic({
    title: "Events",
    content: "Add DOM events to your components without manually accessing addEventListener. UIBuilder keeps event handling close to the element it belongs to."
    ,highlight : ["addEventListener"]

});

const eventCode = await CodeBlock({
    code: `UIBuilder.event(button).add("click", () => {
    console.log("Button clicked!");
});`
});


// COMPONENTS :

const componentTopic = Topic({
    title: "Components",
    content: "Create reusable UI components with UIBuilder.component. Components can receive props, manage their own state, and return any UIBuilder element."
    ,highlight : ["UIBuilder.component"]

});

const componentCode = await CodeBlock({
    code: `const Counter = UIBuilder.component(() => {

    const label = UIBuilder.label({
        label: "0"
    });

    const button = UIBuilder.button({
        label: "Add"
    });

    let count = 0;

    UIBuilder.event(button).add("click", () => {
        count++;
        label.label(String(count));
    });

    return UIBuilder.blend(label, button);
});

UIBuilder.body.render(Counter());`
});


// ROUTER :

const routerTopic = Topic({
    title: "Routing",
    content: "Create client-side routes without full page reloads. UIBuilder Router can render routes into any UIBuilder container, making it suitable for web-based applications."
    ,highlight : ["web-based","client-side"]
});

const routerCode = await CodeBlock({
    code: `UIBuilder.router.root(app); // <body> by default!

UIBuilder.router.route("/", home);
UIBuilder.router.route("/about", about);

UIBuilder.router.init();`
});


// QUICK START ROUTE :

export const quickStartSection = RouterView({
    childs: UIBuilder.blend(
        installTopic,
        libInstall,

        importTopic,
        importCode,

        elementTopic,
        elementCode,

        renderTopic,
        renderCode,

        composeTopic,
        composeCode,

        eventTopic,
        eventCode,

        componentTopic,
        componentCode,

        routerTopic,
        routerCode
    )
});
