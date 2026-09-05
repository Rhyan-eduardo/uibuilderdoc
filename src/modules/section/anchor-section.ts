
// ANCHOR SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const anchorTopic = Topic({
    title: "Anchor",
    content: "Create a navigation anchor using UIBuilder.anchor. Anchor wraps the native HTMLAnchorElement and uses the UIBuilder router to navigate between application routes without reloading the page."
});

const anchorCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(anchor);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.anchor accepts a configuration object. You can define the route path, label, identity, CSS classes, and custom HTML attributes when creating the anchor."
});

const optionsCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    id: "get-started",
    label: "Get Started",
    path: "/get-started",
    className: "anchor",
    classList: ["link", "primary"],
    attribute: {
        "aria-label": "Get Started",
        "data-route": "/get-started"
    }
});`
});

const pathTopic = Topic({
    title: "path",
    content: "Define the route path that the anchor navigates to when clicked. The path is also assigned to the native href property of the underlying anchor element."
});

const pathCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Documentation",
    path: "/documentation"
});`
});

const labelTopic = Topic({
    title: "label",
    content: "Set the text displayed by the anchor when it is created."
});

const labelCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Documentation",
    path: "/documentation"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the anchor."
});

const idCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    id: "documentation-anchor",
    path: "/documentation"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the anchor."
});

const classNameCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    className: "anchor",
    path: "/documentation"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the anchor when it is created."
});

const classListCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    classList: ["link", "primary"],
    path: "/documentation"
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the anchor using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Documentation",
    path: "/documentation",
    attribute: {
        "aria-label": "Documentation",
        "data-route": "/documentation"
    }
});`
});

const labelMethodTopic = Topic({
    title: "label",
    content: "Update the text displayed by an existing anchor."
});

const labelMethodCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Home",
    path: "/"
});

anchor.label("Documentation");`
});

const pathMethodTopic = Topic({
    title: "path",
    content: "Update the destination path of an existing anchor. The new path is assigned to the anchor href."
});

const pathMethodCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Documentation",
    path: "/documentation"
});

anchor.path("/get-started");`
});

const navigationTopic = Topic({
    title: "Navigation",
    content: "When the anchor is clicked, the default browser navigation is prevented and UIRouter.navigate is called with the configured path. This allows the application to change routes without performing a full page reload."
});

const navigationCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(anchor);`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the anchor into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const anchor = UIBuilder.anchor({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(anchor);`
});

export const anchorSection = RouterView({
    childs: UIBuilder.blend(
        anchorTopic,
        anchorCode,
        optionsTopic,
        optionsCode,
        pathTopic,
        pathCode,
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
        labelMethodTopic,
        labelMethodCode,
        pathMethodTopic,
        pathMethodCode,
        navigationTopic,
        navigationCode,
        renderTopic,
        renderCode
    )
});
