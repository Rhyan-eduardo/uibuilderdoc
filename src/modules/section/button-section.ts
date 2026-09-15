// BUTTON SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// BUTTON :

const buttonTopic = Topic({
    title: "Button",
    content: "Create a native HTML button using UIBuilder.button. The Button component provides a lightweight wrapper around the HTMLButtonElement while exposing the common UIBuilder element API."
});

const buttonCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    content : "Click me"
});`
});

// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.button accepts a configuration object that can be used to define the button's identity, classes, attributes, and initial label."
});

const optionsCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    id: "submit-button",
    className: "button",
    attribute: {
        "type" : "submit"
    },
    content: "Submit"
});`
});

// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the button into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    content: "Get Started"
});

UIBuilder.body.render(button);`
});

// EXPORT :

export const buttonSection = RouterView({
    childs: UIBuilder.blend(
        buttonTopic,
        buttonCode,

        optionsTopic,
        optionsCode,

        renderTopic,
        renderCode,
    )
});