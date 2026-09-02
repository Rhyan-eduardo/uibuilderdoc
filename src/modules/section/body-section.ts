
// BODY SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const bodyTopic = Topic({
    title: "Body",
    content: "Interact directly with the document body using UIBuilder.body. It provides methods for rendering, removing and styling UIBuilder elements in the page body."
});

const renderTopic = Topic({
    title: "render",
    content: "Render a UIBuilder element directly into the document body using UIBuilder.body.render."
});

const renderCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

UIBuilder.body.render(label);`
});

const blendTopic = Topic({
    title: "Blend",
    content: "UIBuilder.body.render can also receive a UIBuilder blend, allowing multiple elements to be rendered into the body together."
});

const blendCode = await CodeBlock({
    code: `const title = UIBuilder.label({
    label: "Title"
});

const description = UIBuilder.label({
    label: "Description"
});

UIBuilder.body.render(
    UIBuilder.blend(title, description)
);`
});

const organizationTopic = Topic({
    title: "Organization",
    content: "When rendering an element or blend, an optional organization can define how the element is positioned relative to the existing body content."
});

const organizationCode = await CodeBlock({
    code: `UIBuilder.body.render(label, "below");`
});

const unrenderTopic = Topic({
    title: "unrender",
    content: "Remove a previously rendered UIBuilder element from the document body using UIBuilder.body.unrender."
});

const unrenderCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

UIBuilder.body.render(label);

UIBuilder.body.unrender(label);`
});

const styleTopic = Topic({
    title: "style",
    content: "Apply CSS styles directly to the document body using UIBuilder.body.style. It accepts a UIStyle created with UIBuilder.style."
});

const styleCode = await CodeBlock({
    code: `const bodyStyle = UIBuilder.style({
    margin: "0",
    padding: "0",
    fontFamily: "sans-serif"
});

UIBuilder.body.style(bodyStyle);`
});

const directStyleTopic = Topic({
    title: "Direct Properties",
    content: "Body styles can also be provided directly as style properties."
});

const directStyleCode = await CodeBlock({
    code: `UIBuilder.body.style({
    margin: "0",
    padding: "0",
    backgroundColor: "#ffffff"
});`
});

export const bodySection = RouterView({
    childs: UIBuilder.blend(
        bodyTopic,
        renderTopic,
        renderCode,
        blendTopic,
        blendCode,
        organizationTopic,
        organizationCode,
        unrenderTopic,
        unrenderCode,
        styleTopic,
        styleCode,
        directStyleTopic,
        directStyleCode
    )
});
