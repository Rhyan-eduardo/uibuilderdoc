
// ROUTE BUTTON SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const routeButtonTopic = Topic({
    title: "Route Button",
    content: "Create a navigation button using UIBuilder.routeButton. RouteButton is a wrapper around the native HTMLAnchorElement that uses the UIBuilder router to navigate between application routes without reloading the page."
});

const routeButtonCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(button);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.routeButton accepts a configuration object. You can define the route path, label, identity, CSS classes, and custom HTML attributes when creating the button."
});

const optionsCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    id: "get-started",
    label: "Get Started",
    path: "/get-started",
    className: "route-button",
    classList: ["button", "primary"],
    attribute: {
        "aria-label": "Get Started",
        "data-route": "/get-started"
    }
});`
});

const pathTopic = Topic({
    title: "path",
    content: "Define the route path that the button navigates to when clicked. The path is also assigned to the native href property of the underlying anchor element."
});

const pathCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Documentation",
    path: "/documentation"
});`
});

const labelTopic = Topic({
    title: "label",
    content: "Set the text displayed by the route button when it is created."
});

const labelCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Documentation",
    path: "/documentation"
});`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the route button."
});

const idCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    id: "documentation-button",
    path: "/documentation"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the route button."
});

const classNameCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    className: "route-button",
    path: "/documentation"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the route button when it is created."
});

const classListCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    classList: ["button", "primary"],
    path: "/documentation"
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the route button using an object where each property represents an attribute name and its value represents the attribute value."
});

const attributeCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
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
    content: "Update the text displayed by an existing route button."
});

const labelMethodCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Home",
    path: "/"
});

button.label("Documentation");`
});

const pathMethodTopic = Topic({
    title: "path",
    content: "Update the destination path of an existing route button. The new path is assigned to the anchor href."
});

const pathMethodCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Documentation",
    path: "/documentation"
});

button.path("/get-started");`
});

const navigationTopic = Topic({
    title: "Navigation",
    content: "When the route button is clicked, the default anchor navigation is prevented and UIRouter.navigate is called with the configured path. This allows the application to change routes without performing a full page reload."
});

const navigationCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(button);`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the route button into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "Get Started",
    path: "/get-started"
});

UIBuilder.body.render(button);`
});

export const routeButtonSection = RouterView({
    childs: UIBuilder.blend(
        routeButtonTopic,
        routeButtonCode,
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
