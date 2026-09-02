
// BLEND SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const blendTopic = Topic({
    title: "Blend",
    content: "Group multiple UIBuilder elements into a single value using UIBuilder.blend. Blend is useful when you need to compose several elements together and pass them as a single group of children to another UIBuilder element."
});

const blendCode = await CodeBlock({
    code: `const title = UIBuilder.label({
    label: "Hello World"
});

const button = UIBuilder.button({
    label: "Continue"
});

const content = UIBuilder.blend(
    title,
    button
);`
});

const compositionTopic = Topic({
    title: "Composition",
    content: "Use Blend when a component needs multiple elements as its children. This makes it easier to build interfaces by composing existing elements without creating an additional wrapper element."
});

const compositionCode = await CodeBlock({
    code: `const title = UIBuilder.label({
    label: "Welcome"
});

const description = UIBuilder.label({
    label: "Create your account to continue."
});

const button = UIBuilder.button({
    label: "Continue"
});

const content = UIBuilder.blend(
    title,
    description,
    button
);

const group = UIBuilder.group({
    className: "form"
});

group.render(content);`
});

const panelTopic = Topic({
    title: "Panels and Groups",
    content: "Blend is particularly useful when composing the children of Groups and Panels. Instead of rendering each element separately, you can create a collection of elements and provide them together."
});

const panelCode = await CodeBlock({
    code: `const header = UIBuilder.label({
    label: "Dashboard"
});

const action = UIBuilder.button({
    label: "Create"
});

const panelContent = UIBuilder.blend(
    header,
    action
);

const panel = UIBuilder.panel({
    className: "dashboard"
});

panel.render(panelContent);`
});

const singleTopic = Topic({
    title: "Multiple Elements",
    content: "Pass as many UIBuilder elements as needed to create a composed collection. The order of the elements is preserved."
});

const singleCode = await CodeBlock({
    code: `const content = UIBuilder.blend(
    UIBuilder.label({ label: "Title" }),
    UIBuilder.label({ label: "Description" }),
    UIBuilder.button({ label: "Continue" })
);`
});

export const blendSection = RouterView({
    childs: UIBuilder.blend(
        blendTopic,
        blendCode,
        compositionTopic,
        compositionCode,
        panelTopic,
        panelCode,
        singleTopic,
        singleCode
    )
});
