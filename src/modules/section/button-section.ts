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
    label: "Click me"
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
    classList: ["primary", "large"],
    attribute: [
        {
            name: "type",
            value: "submit"
        }
    ],
    label: "Submit"
});`
});


// ID :

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the button. The value is assigned directly to the underlying HTMLButtonElement."
});

const idCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    id: "submit-button",
    label: "Submit"
});`
});


// CLASS NAME :

const classNameTopic = Topic({
    title: "className",
    content: "Set the button's CSS class name. This value is assigned directly to the className property of the underlying HTML element."
});

const classNameCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    className: "primary-button",
    label: "Submit"
});`
});


// CLASS LIST :

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the button when it is created. UIBuilder applies the provided class list directly to the underlying element."
});

const classListCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    classList: ["button", "primary"],
    label: "Submit"
});`
});


// ATTRIBUTE :

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the button. Attributes are provided as a list of name and value pairs and are applied to the underlying HTML element."
});

const attributeCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    attribute: [
        {
            name: "type",
            value: "submit"
        },
        {
            name: "aria-label",
            value: "Submit form"
        }
    ],
    label: "Submit"
});`
});


// LABEL :

const labelTopic = Topic({
    title: "label",
    content: "Set or update the text displayed by the button using the label method inherited from the UIBuilder element API."
});

const labelCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Submit"
});

button.label("Send");`
});


// EVENT :

const eventTopic = Topic({
    title: "Events",
    content: "Attach DOM events to a button through UIBuilder.event. This keeps event handling directly associated with the UIBuilder element without requiring direct access to addEventListener."
});

const eventCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Click me"
});

UIBuilder.event(button).add("click", () => {
    console.log("Button clicked!");
});`
});


// APPEND :

const appendTopic = Topic({
    title: "append",
    content: "Append another UIBuilder element to the button. This method is inherited from the generic UIBuilder element API."
});

const appendCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Click me"
});

const icon = UIBuilder.icon({
    className: "ri-arrow-right-line"
});

button.append(icon);`
});


// REMOVE ATTRIBUTE :

const removeAttributeTopic = Topic({
    title: "removeAttribute",
    content: "Remove an HTML attribute from the button after it has been created."
});

const removeAttributeCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    attribute: [
        {
            name: "disabled",
            value: "true"
        }
    ]
});

button.removeAttribute("disabled");`
});


// REMOVE CLASS :

const removeClassNameTopic = Topic({
    title: "removeClassName",
    content: "Remove a CSS class from the button after it has been created."
});

const removeClassNameCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    classList: ["button", "primary"]
});

button.removeClassName("primary");`
});


// REMOVE :

const removeTopic = Topic({
    title: "remove",
    content: "Remove the button from the document or its current parent element."
});

const removeCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Remove me"
});

UIBuilder.body.render(button);

button.remove();`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the button into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Get Started"
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

        idTopic,
        idCode,

        classNameTopic,
        classNameCode,

        classListTopic,
        classListCode,

        attributeTopic,
        attributeCode,

        labelTopic,
        labelCode,

        eventTopic,
        eventCode,

        appendTopic,
        appendCode,

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