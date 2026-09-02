// PANEL SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// PANEL :

const panelTopic = Topic({
    title: "Panel",
    content: "Create a structural container using UIBuilder.panel. Unlike Group, which is primarily intended for composing interface elements and content, Panel is designed to act as a parent container for larger layout structures. Panels can contain Groups, other UIBuilder elements, or even other Panels, making them useful for defining the main areas of an interface such as sidebars, content areas, headers, and application sections."
});

const panelCode = await CodeBlock({
    code: `const panel = UIBuilder.panel();

UIBuilder.body.render(panel);`
});


// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.panel accepts a configuration object that can be used to define the panel's identity, CSS classes, and custom HTML attributes."
});

const optionsCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    id: "main-panel",
    className: "main-panel",
    classList: ["layout", "content"],
    attribute: [
        {
            name: "data-layout",
            value: "main"
        }
    ]
});`
});


// ID :

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the panel. The value is assigned directly to the underlying HTMLDivElement."
});

const idCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    id: "main-content"
});`
});


// CLASS NAME :

const classNameTopic = Topic({
    title: "className",
    content: "Set the panel's CSS class name. This value is assigned directly to the className property of the underlying HTML element."
});

const classNameCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    className: "content-panel"
});`
});


// CLASS LIST :

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the panel when it is created."
});

const classListCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    classList: ["panel", "content", "primary"]
});`
});


// ATTRIBUTE :

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the panel using a list of name and value pairs."
});

const attributeCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    attribute: [
        {
            name: "data-layout",
            value: "content"
        },
        {
            name: "aria-label",
            value: "Main content"
        }
    ]
});`
});


// APPEND :

const appendTopic = Topic({
    title: "append",
    content: "Append UIBuilder elements into the panel. This is useful when the panel acts as a parent container for groups or other structural elements."
});

const appendCode = await CodeBlock({
    code: `const panel = UIBuilder.panel();

const group = UIBuilder.group({
    className: "content-group"
});

panel.append(group);`
});


// LAYOUT :

const layoutTopic = Topic({
    title: "Layout",
    content: "Panels are particularly useful for defining the structural hierarchy of an interface. A Panel can contain multiple Groups, with each Group responsible for composing the content inside its respective area. This creates a clear separation between the layout structure and the elements that make up each section."
});

const layoutCode = await CodeBlock({
    code: `const sidebar = UIBuilder.panel({
    className: "sidebar"
});

const content = UIBuilder.panel({
    className: "content"
});

const header = UIBuilder.group({
    className: "header"
});

const main = UIBuilder.group({
    className: "main"
});

const footer = UIBuilder.group({
    className: "footer"
});

content.append(header);
content.append(main);
content.append(footer);

const app = UIBuilder.blend(
    sidebar,
    content
);

UIBuilder.body.render(app);`
});


// NESTING :

const nestingTopic = Topic({
    title: "Nesting",
    content: "Panels can be nested when an interface requires multiple levels of structural organization. A parent Panel can contain other Panels, allowing complex layouts to be represented as a hierarchy of structural containers."
});

const nestingCode = await CodeBlock({
    code: `const application = UIBuilder.panel({
    className: "application"
});

const sidebar = UIBuilder.panel({
    className: "sidebar"
});

const workspace = UIBuilder.panel({
    className: "workspace"
});

const toolbar = UIBuilder.group({
    className: "toolbar"
});

const content = UIBuilder.group({
    className: "content"
});

workspace.append(toolbar);
workspace.append(content);

application.append(sidebar);
application.append(workspace);

UIBuilder.body.render(application);`
});


// REMOVE ATTRIBUTE :

const removeAttributeTopic = Topic({
    title: "removeAttribute",
    content: "Remove an HTML attribute from the panel after it has been created."
});

const removeAttributeCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    attribute: [
        {
            name: "data-layout",
            value: "content"
        }
    ]
});

panel.removeAttribute("data-layout");`
});


// REMOVE CLASS :

const removeClassNameTopic = Topic({
    title: "removeClassName",
    content: "Remove a CSS class from the panel after it has been created."
});

const removeClassNameCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({
    classList: ["panel", "primary"]
});

panel.removeClassName("primary");`
});


// REMOVE :

const removeTopic = Topic({
    title: "remove",
    content: "Remove the panel from its current parent element."
});

const removeCode = await CodeBlock({
    code: `const panel = UIBuilder.panel();

UIBuilder.body.render(panel);

panel.remove();`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the panel into another UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const panel = UIBuilder.panel();

const group = UIBuilder.group();

panel.append(group);

UIBuilder.body.render(panel);`
});


// EXPORT :

export const panelSection = RouterView({
    childs: UIBuilder.blend(
        panelTopic,
        panelCode,

        optionsTopic,
        optionsCode,

        idTopic,
        idCode,

        classNameTopic,
        classNameCode,

        classListTopic,
        classListCode,

        attributeTopic,
        attributeCode,

        appendTopic,
        appendCode,

        layoutTopic,
        layoutCode,

        nestingTopic,
        nestingCode,

        removeAttributeTopic,
        removeAttributeCode,

        removeClassNameTopic,
        removeClassNameCode,

        removeTopic,
        removeCode,

        renderTopic,
        renderCode
    )
});