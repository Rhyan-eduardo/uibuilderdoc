
// LABEL SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const labelTopic = Topic({
    title: "Label",
    content: "Create a text label using UIBuilder.label. Label is a lightweight wrapper around the native HTMLSpanElement and provides a simple API for creating and updating text content."
});

const labelCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

UIBuilder.body.render(label);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.label accepts a configuration object. You can define the label text, identity, CSS classes, and custom HTML attributes when creating the element."
});

const optionsCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    id: "title",
    label: "Hello World",
    className: "label",
    classList: ["text", "primary"],
    attribute: {
        "data-type": "title",
        "aria-label": "Title"
    }
});`
});

const labelOptionTopic = Topic({
    title: "label",
    content: "Set the text content of the label when it is created."
});

const labelOptionCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the label."
});

const idCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    id: "username"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the label."
});

const classNameCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    className: "label"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the label when it is created."
});

const classListCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    classList: ["label", "primary"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the label using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    attribute: {
        "data-type": "label",
        "aria-label": "Username",
        "title": "User name"
    }
});`
});

const labelMethodTopic = Topic({
    title: "label",
    content: "Update the text content of an existing label. The provided string replaces the current label text."
});

const labelMethodCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello"
});

label.label("Hello World");`
});

const eventsTopic = Topic({
    title: "Events",
    content: "Attach DOM events to the label through UIBuilder.event. This can be used to react to native browser events dispatched by the underlying span element."
});

const eventsCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Click me"
});

UIBuilder.event(label).add("click", () => {
    console.log("Label clicked");
});`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the label into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

UIBuilder.body.render(label);`
});

export const labelSection = RouterView({
    childs: UIBuilder.blend(
        labelTopic,
        labelCode,
        optionsTopic,
        optionsCode,
        labelOptionTopic,
        labelOptionCode,
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        labelMethodTopic,
        labelMethodCode,
        eventsTopic,
        eventsCode,
        renderTopic,
        renderCode
    )
});
