
// WATCHER SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const watcherTopic = Topic({
    title: "Watcher",
    content: "Watch values for changes using UIBuilder.watcher. A watcher executes a callback when the observed value changes, making it useful for reacting to state updates without manually checking for changes."
});

const watcherCode = await CodeBlock({
    code: `const value = UIBuilder.watcher.watch(0, (value) => {
    console.log(value);
});`
});

const watchTopic = Topic({
    title: "watch",
    content: "Use watch to observe a value. The callback is called when the observed value changes and receives the new value."
});

const watchCode = await CodeBlock({
    code: `const value = UIBuilder.watcher.watch(0, (value) => {
    console.log("Value changed:", value);
});

value.value = 10;`
});

const callbackTopic = Topic({
    title: "Callback",
    content: "The callback receives the updated value through its parameter. Its type can be inferred or explicitly defined when using TypeScript."
});

const callbackCode = await CodeBlock({
    code: `const value = UIBuilder.watcher.watch(0, (value) => {
    console.log(value);
});`
});

const storeTopic = Topic({
    title: "UIStore",
    content: "UIWatcher can also observe a UIStore. When a value inside the store changes, the watcher callback receives the store's current state."
});

const storeCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0
});

UIBuilder.watcher.watch(store, (state) => {
    console.log(state);
});`
});

const unwatchTopic = Topic({
    title: "unwatch",
    content: "Use unwatch to stop observing a previously watched value."
});

const unwatchCode = await CodeBlock({
    code: `const value = UIBuilder.watcher.watch(0, (value) => {
    console.log(value);
});

UIBuilder.watcher.unwatch(value);`
});

const exampleTopic = Topic({
    title: "Example",
    content: "A watcher can be used to react to state changes and update another part of the interface."
});

const exampleCode = await CodeBlock({
    code: `const value = UIBuilder.watcher.watch(0, (value) => {
    counterValue.label(String(value));
});

value.value = 1;
value.value = 2;
value.value = 3;`
});

export const watcherSection = RouterView({
    childs: UIBuilder.blend(
        watcherTopic,
        watcherCode,
        watchTopic,
        watchCode,
        callbackTopic,
        callbackCode,
        storeTopic,
        storeCode,
        unwatchTopic,
        unwatchCode,
        exampleTopic,
        exampleCode
    )
});
