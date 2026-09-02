// GROUP SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// GROUP :

const groupTopic = Topic({
    title: "Group",
    content: "Create a generic container using UIBuilder.group. Group is a lightweight wrapper around the native HTMLDivElement and is primarily used to compose multiple UIBuilder elements into a single interface structure."
});

const groupCode = await CodeBlock({
    code: `const group = UIBuilder.group();

UIBuilder.body.render(group);`
});


// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.group accepts a configuration object that can be used to define the group's identity, CSS classes, and custom HTML attributes."
});

const optionsCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    id: "content",
    className: "content-group",
    classList: ["container", "primary"],
    attribute: [
        {
            name: "data-section",
            value: "content"
        }
    ]
});`
});


// ID :

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the group. The value is assigned directly to the underlying HTMLDivElement."
});

const idCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    id: "main-content"
});`
});


// CLASS NAME :

const classNameTopic = Topic({
    title: "className",
    content: "Set the group's CSS class name. This value is assigned directly to the className property of the underlying HTML element."
});

const classNameCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    className: "content-group"
});`
});


// CLASS LIST :

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the group when it is created."
});

const classListCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    classList: ["container", "content", "primary"]
});`
});


// ATTRIBUTE :

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the group using a list of name and value pairs."
});

const attributeCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    attribute: [
        {
            name: "data-section",
            value: "content"
        },
        {
            name: "aria-label",
            value: "Content"
        }
    ]
});`
});


// APPEND :

const appendTopic = Topic({
    title: "append",
    content: "Append UIBuilder elements directly into the group. This makes Group one of the primary building blocks for composing interfaces."
});

const appendCode = await CodeBlock({
    code: `const group = UIBuilder.group();

const title = UIBuilder.label({
    label: "Hello World"
});

const button = UIBuilder.button({
    label: "Continue"
});

group.append(title);
group.append(button);`
});


// COMPOSITION :

const compositionTopic = Topic({
    title: "Composition",
    content: "Groups can be nested to create more complex interface structures. Because a Group represents a native div element, it can contain other groups, components, and UIBuilder elements without imposing a predefined layout structure."
});

const compositionCode = await CodeBlock({
    code: `const header = UIBuilder.group({
    className: "header"
});

const content = UIBuilder.group({
    className: "content"
});

const page = UIBuilder.group({
    className: "page"
});

header.append(
    UIBuilder.label({
        label: "My Application"
    })
);

content.append(
    UIBuilder.label({
        label: "Welcome!"
    })
);

page.append(header);
page.append(content);

UIBuilder.body.render(page);`
});


// REMOVE ATTRIBUTE :

const removeAttributeTopic = Topic({
    title: "removeAttribute",
    content: "Remove an HTML attribute from the group after it has been created."
});

const removeAttributeCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    attribute: [
        {
            name: "data-section",
            value: "content"
        }
    ]
});

group.removeAttribute("data-section");`
});


// REMOVE CLASS :

const removeClassNameTopic = Topic({
    title: "removeClassName",
    content: "Remove a CSS class from the group after it has been created."
});

const removeClassNameCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    classList: ["container", "primary"]
});

group.removeClassName("primary");`
});


// REMOVE :

const removeTopic = Topic({
    title: "remove",
    content: "Remove the group from its current parent element."
});

const removeCode = await CodeBlock({
    code: `const group = UIBuilder.group();

UIBuilder.body.render(group);

group.remove();`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the group into another UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const group = UIBuilder.group();

const label = UIBuilder.label({
    label: "Hello World"
});

group.render(label);

UIBuilder.body.render(group);`
});


// EXPORT :

export const groupSection = RouterView({
    childs: UIBuilder.blend(
        groupTopic,
        groupCode,

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

        compositionTopic,
        compositionCode,

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