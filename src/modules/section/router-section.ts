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
    content: "Register a route by associating a path with a UIBuilder element or blend. Routes can also contain dynamic parameters using the :name syntax."
});

const routeCode = await CodeBlock({
    code: `const home = UIBuilder.label({
    label: "Home"
});

const profile = UIBuilder.label({
    label: "Profile"
});

UIBuilder.router.route("/", home);
UIBuilder.router.route("/profile/:id", profile);`
});

const navigateTopic = Topic({
    title: "navigate",
    content: "Navigate to a route programmatically using UIBuilder.router.navigate. Navigation creates a new browser history entry without reloading the page."
});

const navigateCode = await CodeBlock({
    code: `UIBuilder.router.navigate("/about");`
});

const retargetTopic = Topic({
    title: "retarget",
    content: "Navigate to a route while replacing the current browser history entry. Unlike navigate, retarget does not create a new history entry."
});

const retargetCode = await CodeBlock({
    code: `UIBuilder.router.retarget("/about");`
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

const baseTopic = Topic({
    title: "base",
    content: "Define a base path for the router. Routes and navigation are resolved relative to this path, which is useful when an application is hosted inside a subdirectory."
});

const baseCode = await CodeBlock({
    code: `UIBuilder.router.base("/app");

UIBuilder.router.route("/", home);
UIBuilder.router.navigate("/about");`
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

const outRouteTopic = Topic({
    title: "outRoute",
    content: "Define fallback content to render when the current URL does not match any registered route."
});

const outRouteCode = await CodeBlock({
    code: `const notFound = UIBuilder.label({
    label: "Page not found"
});

UIBuilder.router.outRoute(notFound);`
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

const paramTopic = Topic({
    title: "Parameters",
    content: "Routes can define dynamic parameters using the :name syntax. The parameter values are decoded from the current URL and can be accessed with listenParam."
});

const paramCode = await CodeBlock({
    code: `UIBuilder.router.route(
    "/user/:id",
    profile
);

UIBuilder.router.listenParam("/user", ({ id }) => {
    console.log("User ID:", id);
});

UIBuilder.router.navigate("/user/42");`
});

const queryTopic = Topic({
    title: "Query",
    content: "Listen for query string changes on a route using listenQuery. Query values are provided as a key-value object."
});

const queryCode = await CodeBlock({
    code: `UIBuilder.router.listenQuery("/search", (queries) => {
    console.log(queries);
});

UIBuilder.router.navigate("/search?q=ui-builder&page=2");`
});

const listenRouteTopic = Topic({
    title: "listenRoute",
    content: "Listen for navigation to a route. The callback is executed whenever the registered route becomes active."
});

const listenRouteCode = await CodeBlock({
    code: `UIBuilder.router.listenRoute("/about", () => {
    console.log("About route accessed");
});`
});

const listenParamTopic = Topic({
    title: "listenParam",
    content: "Listen for changes to dynamic route parameters. The callback receives the resolved parameters as an object."
});

const listenParamCode = await CodeBlock({
    code: `UIBuilder.router.listenParam("/user", ({ id }) => {
    console.log("User ID:", id);
});`
});

const listenQueryTopic = Topic({
    title: "listenQuery",
    content: "Listen for query string changes on a route. The callback receives all query values as an object."
});

const listenQueryCode = await CodeBlock({
    code: `UIBuilder.router.listenQuery("/search", (queries) => {
    console.log("Queries:", queries);
});`
});

const anchorTopic = Topic({
    title: "Anchor",
    content: "Create a navigation element using UIBuilder.anchor. It provides a primitive anchor element that can navigate through the UIBuilder router without reloading the page."
});

const anchorCode = await CodeBlock({
    code: `const link = UIBuilder.anchor({
    label: "About",
    path: "/about"
});

UIBuilder.body.render(link);`
});

const exampleTopic = Topic({
    title: "Example",
    content: "A complete router setup can define the application root, register routes, configure a base path, listen for parameters and initialize the router once the interface is ready."
});

const exampleCode = await CodeBlock({
    code: `const app = UIBuilder.group({
    className: "app"
});

UIBuilder.body.render(app);
UIBuilder.router.root(app);

UIBuilder.router.base("/app");

const home = UIBuilder.label({
    label: "Home"
});

const profile = UIBuilder.label({
    label: "Profile"
});

UIBuilder.router.route("/", home);
UIBuilder.router.route("/profile/:id", profile);

UIBuilder.router.listenParam("/profile", ({ id }) => {
    console.log("Profile:", id);
});

UIBuilder.router.init();

UIBuilder.router.navigate("/profile/42");`
});

export const routerSection = RouterView({
    childs: UIBuilder.blend(
        routerTopic,
        routeTopic,
        routeCode,
        navigateTopic,
        navigateCode,
        retargetTopic,
        retargetCode,
        rootTopic,
        rootCode,
        baseTopic,
        baseCode,
        initTopic,
        initCode,
        backTopic,
        backCode,
        forwardTopic,
        forwardCode,
        outRouteTopic,
        outRouteCode,
        blendTopic,
        blendCode,
        paramTopic,
        paramCode,
        queryTopic,
        queryCode,
        listenRouteTopic,
        listenRouteCode,
        listenParamTopic,
        listenParamCode,
        listenQueryTopic,
        listenQueryCode,
        anchorTopic,
        anchorCode,
        exampleTopic,
        exampleCode
    )
});