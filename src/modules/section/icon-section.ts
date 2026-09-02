
// ICON SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const iconTopic = Topic({
    title: "Icon",
    content: "Create an icon using UIBuilder.icon. Icon is a lightweight wrapper around the native HTMLIElement and is designed to work with icon libraries and CSS-based icon systems."
});

const iconCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    className: "ri-home-line"
});

UIBuilder.body.render(icon);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.icon accepts a configuration object. You can define the icon identity, CSS classes, and custom HTML attributes when creating the icon."
});

const optionsCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    id: "home-icon",
    className: "ri-home-line",
    classList: ["icon", "primary"],
    attribute: {
        "aria-label": "Home",
        "data-icon": "home"
    }
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the icon."
});

const idCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    id: "home-icon"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the icon. This is commonly used to specify the icon provided by an external icon library."
});

const classNameCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    className: "ri-home-line"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the icon when it is created."
});

const classListCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    classList: ["icon", "large", "primary"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the icon using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    attribute: {
        "aria-label": "Home",
        "data-icon": "home",
        "role": "img"
    }
});`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the icon into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const icon = UIBuilder.icon({
    className: "ri-home-line"
});

UIBuilder.body.render(icon);`
});

export const iconSection = RouterView({
    childs: UIBuilder.blend(
        iconTopic,
        iconCode,
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
        renderTopic,
        renderCode
    )
});
