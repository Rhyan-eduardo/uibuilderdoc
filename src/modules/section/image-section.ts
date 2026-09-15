
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
        renderTopic,
        renderCode
    )
});
