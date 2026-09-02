
// ICON BUTTON SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const iconButtonTopic = Topic({
    title: "Icon Button",
    content: "Create a button with an icon using UIBuilder.iconButton. IconButton combines a native HTMLButtonElement with an icon element, allowing you to create interactive buttons with an icon and optional label."
});

const iconButtonCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-home-line",
    label: "Home"
});

UIBuilder.body.render(iconButton);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.iconButton accepts a configuration object. You can define the button identity, CSS classes, custom HTML attributes, icon class, and optional label."
});

const optionsCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    id: "home-button",
    className: "icon-button",
    classList: ["button", "primary"],
    iconClassName: "ri-home-line",
    label: "Home",
    attribute: {
        "type": "button",
        "aria-label": "Home"
    }
});`
});

const iconClassNameTopic = Topic({
    title: "iconClassName",
    content: "Set the CSS class name used by the icon inside the button. This is commonly used with external icon libraries such as Remix Icon."
});

const iconClassNameCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-home-line"
});`
});

const labelTopic = Topic({
    title: "label",
    content: "Set an optional text label displayed alongside the icon."
});

const labelCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-download-line",
    label: "Download"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the button."
});

const idCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    id: "download-button"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the button."
});

const classNameCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    className: "icon-button"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the button when it is created."
});

const classListCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    classList: ["button", "primary", "large"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the button using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    attribute: {
        "type": "button",
        "aria-label": "Download",
        "data-action": "download"
    }
});`
});

const iconMethodTopic = Topic({
    title: "icon",
    content: "Update the icon displayed inside an existing icon button. You can also provide an optional label that will be displayed alongside the new icon."
});

const iconMethodCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-home-line",
    label: "Home"
});

iconButton.icon("ri-settings-line", "Settings");`
});

const eventsTopic = Topic({
    title: "Events",
    content: "Attach DOM events to the icon button through UIBuilder.event. This allows the button to respond to native browser events such as clicks."
});

const eventsCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-download-line",
    label: "Download"
});

UIBuilder.event(iconButton).add("click", () => {
    console.log("Download clicked");
});`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the icon button into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const iconButton = UIBuilder.iconButton({
    iconClassName: "ri-home-line",
    label: "Home"
});

UIBuilder.body.render(iconButton);`
});

export const iconButtonSection = RouterView({
    childs: UIBuilder.blend(
        iconButtonTopic,
        iconButtonCode,
        optionsTopic,
        optionsCode,
        iconClassNameTopic,
        iconClassNameCode,
        labelTopic,
        labelCode,
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        iconMethodTopic,
        iconMethodCode,
        eventsTopic,
        eventsCode,
        renderTopic,
        renderCode
    )
});
