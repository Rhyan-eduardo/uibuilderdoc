
// CUSTOM SECTION [SECTION] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const customTopic = Topic({
    title: "Custom",
    content: "Create a custom HTML element using UIBuilder.custom. Custom provides a generic wrapper for creating native HTML elements when a specialized UIBuilder component is not required."
});

const customCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div"
});

UIBuilder.body.render(element);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.custom accepts a configuration object. You can define the HTML tag, identity, CSS classes, and custom HTML attributes when creating the element."
});

const optionsCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div",
    id: "container",
    className: "container",
    classList: ["content", "primary"],
    attribute: {
        "data-id": "123",
        title: "Hello"
    }
});`
});

const tagTopic = Topic({
    title: "tag",
    content: "Define the native HTML tag used to create the element. The tag property accepts HTML element names supported by HTMLElementTagNameMap."
});

const tagCode = await CodeBlock({
    code: `const heading = UIBuilder.custom({
    tag: "h1"
});

const paragraph = UIBuilder.custom({
    tag: "p"
});

const section = UIBuilder.custom({
    tag: "section"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the custom element."
});

const idCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div",
    id: "content"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the custom element."
});

const classNameCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div",
    className: "container"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the custom element when it is created."
});

const classListCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div",
    classList: ["container", "primary"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the element using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "div",
    attribute: {
        "data-id": "123",
        "aria-label": "Content",
        title: "Hello"
    }
});`
});

const compositionTopic = Topic({
    title: "Composition",
    content: "Custom elements can be composed with other UIBuilder elements using the inherited append and composition APIs. This makes Custom useful for creating semantic HTML structures while keeping the elements inside the UIBuilder system."
});

const compositionCode = await CodeBlock({
    code: `const title = UIBuilder.custom({
    tag: "h1"
});

title.label("Hello World");

const content = UIBuilder.custom({
    tag: "div"
});

content.append(title);

UIBuilder.body.render(content);`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the custom element into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const element = UIBuilder.custom({
    tag: "section",
    className: "content"
});

UIBuilder.body.render(element);`
});

export const customSection = RouterView({
    childs: UIBuilder.blend(
        customTopic,
        customCode,
        optionsTopic,
        optionsCode,
        tagTopic,
        tagCode,
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        compositionTopic,
        compositionCode,
        renderTopic,
        renderCode
    )
});
