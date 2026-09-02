
// STYLE SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const styleTopic = Topic({
    title: "Style",
    content: "Apply CSS styles to UIBuilder elements using the style method. Styles can be provided through UIBuilder.style or passed directly as properties."
});

const styleCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

label.style({
    fontSize: "24px",
    fontWeight: "bold"
});`
});

const uiStyleTopic = Topic({
    title: "UIStyle",
    content: "Create a reusable style definition using UIBuilder.style and apply it to an element."
});

const uiStyleCode = await CodeBlock({
    code: `const titleStyle = UIBuilder.style({
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px"
});

const title = UIBuilder.label({
    label: "Hello World"
});

title.style(titleStyle);`
});

const directTopic = Topic({
    title: "Direct Properties",
    content: "Style properties can also be passed directly to the style method without creating a UIStyle instance."
});

const directCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Continue"
});

button.style({
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px"
});`
});

const multipleTopic = Topic({
    title: "Multiple Elements",
    content: "The same UIStyle can be reused across multiple elements when the same visual properties are needed."
});

const multipleCode = await CodeBlock({
    code: `const textStyle = UIBuilder.style({
    fontSize: "16px",
    lineHeight: "1.5"
});

const title = UIBuilder.label({
    label: "Title"
});

const description = UIBuilder.label({
    label: "Description"
});

title.style(textStyle);
description.style(textStyle);`
});

const bodyTopic = Topic({
    title: "Body",
    content: "Apply styles directly to the document body using UIBuilder.body.style. Like element styles, the body style method accepts either a UIStyle or style properties directly."
});

const bodyCode = await CodeBlock({
    code: `UIBuilder.body.style({
    margin: "0",
    fontFamily: "sans-serif",
    backgroundColor: "#ffffff"
});`
});

const bodyStyleTopic = Topic({
    title: "Body UIStyle",
    content: "A UIStyle can also be created and applied directly to the document body."
});

const bodyStyleCode = await CodeBlock({
    code: `const bodyStyle = UIBuilder.style({
    margin: "0",
    padding: "0",
    overflow: "hidden"
});

UIBuilder.body.style(bodyStyle);`
});

export const styleSection = RouterView({
    childs: UIBuilder.blend(
        styleTopic,
        styleCode,
        uiStyleTopic,
        uiStyleCode,
        directTopic,
        directCode,
        multipleTopic,
        multipleCode,
        bodyTopic,
        bodyCode,
        bodyStyleTopic,
        bodyStyleCode
    )
});
