
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
    content: "Hello World",
    className: "label",
    attribute: {
        "data-type": "title",
        "aria-label": "Title"
    }
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
        renderTopic,
        renderCode
    )
});
