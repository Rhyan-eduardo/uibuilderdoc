
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
    attribute: {
        "aria-label": "Home",
        "data-icon": "home"
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
        renderTopic,
        renderCode
    )
});
