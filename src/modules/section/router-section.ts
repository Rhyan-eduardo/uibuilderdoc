
// ROUTER SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const routerTopic = Topic({
    title: "Router",
    content: "Create client-side navigation using UIBuilder.router. The router manages application routes and changes the displayed content without reloading the page."
});

const routeTopic = Topic({
    title: "route",
    content: "Register a route by associating a path with a UIBuilder element or blend. When the browser navigates to that path, the registered content is rendered."
});

const routeCode = await CodeBlock({
    code: `const home = UIBuilder.label({
    label: "Home"
});

UIBuilder.router.route("/", home);`
});

const navigateTopic = Topic({
    title: "navigate",
    content: "Navigate to a registered route programmatically using UIBuilder.router.navigate. Navigation uses the browser History API without reloading the page."
});

const navigateCode = await CodeBlock({
    code: `UIBuilder.router.navigate("/about");`
});

const rootTopic = Topic({
    title: "root",
    content: "Define the UIBuilder element that will contain the route content. By default, the router uses the document body, but a custom UIBuilder element can be used as the route root."
});

const rootCode = await CodeBlock({
    code: `const app = UIBuilder.group({
    className: "app"
});

UIBuilder.body.render(app);

UIBuilder.router.root(app);`
});

const initTopic = Topic({
    title: "init",
    content: "Initialize the router and start listening for browser history changes. The current URL is checked immediately when the router is initialized."
});

const initCode = await CodeBlock({
    code: `UIBuilder.router.init();`
});

const backTopic = Topic({
    title: "back",
    content: "Navigate to the previous entry in the browser history using UIBuilder.router.back."
});

const backCode = await CodeBlock({
    code: `UIBuilder.router.back();`
});

const forwardTopic = Topic({
    title: "forward",
    content: "Navigate to the next entry in the browser history using UIBuilder.router.forward."
});

const forwardCode = await CodeBlock({
    code: `UIBuilder.router.forward();`
});

const blendTopic = Topic({
    title: "Blend",
    content: "A route can contain multiple elements by using UIBuilder.blend. All elements in the blend are rendered together when the route is active."
});

const blendCode = await CodeBlock({
    code: `const title = UIBuilder.label({
    label: "Home"
});

const description = UIBuilder.label({
    label: "Welcome to the application"
});

UIBuilder.router.route(
    "/",
    UIBuilder.blend(title, description)
);`
});

const exampleTopic = Topic({
    title: "Example",
    content: "A complete router setup can define the application root, register multiple routes and initialize the router once the interface is ready."
});

const exampleCode = await CodeBlock({
    code: `const app = UIBuilder.group({
    className: "app"
});

UIBuilder.body.render(app);
UIBuilder.router.root(app);

const home = UIBuilder.label({
    label: "Home"
});

const about = UIBuilder.label({
    label: "About"
});

UIBuilder.router.route("/", home);
UIBuilder.router.route("/about", about);

UIBuilder.router.init();

UIBuilder.router.navigate("/about");`
});

const routeButtonTopic = Topic({
    title: "Route Button",
    content: "Create a button that navigates to a registered route using UIBuilder.routeButton. It combines a label and a route path, using the UIBuilder router to navigate without reloading the page."
});

const routeButtonCode = await CodeBlock({
    code: `const button = UIBuilder.routeButton({
    label: "About",
    path: "/about"
});

UIBuilder.body.render(button);`
});


export const routerSection = RouterView({
    childs: UIBuilder.blend(
        routerTopic,
        routeTopic,
        routeCode,
        navigateTopic,
        navigateCode,
        rootTopic,
        rootCode,
        initTopic,
        initCode,
        backTopic,
        backCode,
        forwardTopic,
        forwardCode,
        blendTopic,
        blendCode,
        exampleTopic,
        exampleCode,
        routeButtonTopic,
        routeButtonCode
    )
});
