
// IMAGE SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const imageTopic = Topic({
    title: "Image",
    content: "Create an image using UIBuilder.image. Image is a lightweight wrapper around the native HTMLImageElement and provides a simple API for creating and updating image sources."
});

const imageCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    src: "https://example.com/image.png"
});

UIBuilder.body.render(image);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.image accepts a configuration object. You can define the image source, identity, CSS classes, and custom HTML attributes when creating the image."
});

const optionsCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    id: "logo",
    src: "https://example.com/logo.png",
    className: "image",
    classList: ["logo", "primary"],
    attribute: {
        "alt": "Application logo",
        "loading": "lazy"
    }
});`
});

const srcTopic = Topic({
    title: "src",
    content: "Set the source of the image when it is created."
});

const srcCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    src: "https://example.com/image.png"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the image."
});

const idCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    id: "logo"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the image."
});

const classNameCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    className: "image"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the image when it is created."
});

const classListCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    classList: ["image", "logo"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the image using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    attribute: {
        "alt": "Application logo",
        "loading": "lazy",
        "width": "256",
        "height": "256"
    }
});`
});

const srcMethodTopic = Topic({
    title: "src",
    content: "Update the source of an existing image."
});

const srcMethodCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    src: "https://example.com/old-image.png"
});

image.src("https://example.com/new-image.png");`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the image into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const image = UIBuilder.image({
    src: "https://example.com/image.png"
});

UIBuilder.body.render(image);`
});

export const imageSection = RouterView({
    childs: UIBuilder.blend(
        imageTopic,
        imageCode,
        optionsTopic,
        optionsCode,
        srcTopic,
        srcCode,
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        srcMethodTopic,
        srcMethodCode,
        renderTopic,
        renderCode
    )
});
