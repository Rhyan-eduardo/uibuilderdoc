

// SWITCHER SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const switcherTopic = Topic({
    title: "Switcher",
    content: "Create a UIBuilder switcher to control which registered UIElement is currently rendered inside a root element."
});

const switcherCode = await CodeBlock({
    code: `const root = UIBuilder.panel({});

const first = UIBuilder.label({
    label: "First"
});

const second = UIBuilder.label({
    label: "Second"
});

const switcher = UIBuilder.switcher();

switcher.root(root);
switcher.register(first).register(second);

switcher.switch(first);

UIBuilder.body.render(root);`
});

const rootTopic = Topic({
    title: "Root",
    content: "Define the UIElement where the registered elements will be rendered when switching between them."
});

const rootCode = await CodeBlock({
    code: `const root = UIBuilder.panel({});

switcher.root(root);`
});

const registerTopic = Topic({
    title: "Register",
    content: "Register UIElements in the switcher. The register method can be chained to register multiple elements."
});

const registerCode = await CodeBlock({
    code: `switcher.register(first).register(second);`
});

const switchTopic = Topic({
    title: "Switch",
    content: "Switch the currently rendered element to a registered UIElement. The selected element is rendered while other registered elements are unrendered."
});

const switchCode = await CodeBlock({
    code: `switcher.switch(second);`
});

const currentTopic = Topic({
    title: "Current",
    content: "Get the UIElement that is currently rendered by the switcher. Returns null when no registered element is rendered."
});

const currentCode = await CodeBlock({
    code: `const current = switcher.current();`
});

const unregisterTopic = Topic({
    title: "Unregister",
    content: "Remove a UIElement from the switcher. If the element is currently rendered, it will also be unrendered from the switcher root."
});

const unregisterCode = await CodeBlock({
    code: `switcher.unregister(second);`
});

export const switcherSection = RouterView({
    childs: UIBuilder.blend(
        switcherTopic,
        switcherCode,
        rootTopic,
        rootCode,
        registerTopic,
        registerCode,
        switchTopic,
        switchCode,
        currentTopic,
        currentCode,
        unregisterTopic,
        unregisterCode
    )
});
