
// STORE SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const storeTopic = Topic({
    title: "Store",
    content: "Create a shared state container using UIBuilder.store. A UIStore holds an object that can be accessed and updated throughout your application."
});

const storeCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0,
    name: "John"
});`
});

const setTopic = Topic({
    title: "set",
    content: "Use set to create a UIStore from an initial object. The object passed to set becomes the store's initial state."
});

const setCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0
});`
});

const getTopic = Topic({
    title: "get",
    content: "Access the current store state through the get property. The returned object contains the values stored in the UIStore."
});

const getCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0,
    name: "John"
});

console.log(store.get.count);
console.log(store.get.name);`
});

const updateTopic = Topic({
    title: "Update",
    content: "The state can be updated directly through the get property. Changes are made to the same object held by the store."
});

const updateCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0
});

store.get.count = 1;

console.log(store.get.count);`
});

const typedTopic = Topic({
    title: "Typed Store",
    content: "UIStore is generic, so TypeScript can infer the shape of the state from the object passed to UIBuilder.store.set."
});

const typedCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0,
    enabled: true
});

store.get.count = 10;
store.get.enabled = false;`
});

const watcherTopic = Topic({
    title: "With Watcher",
    content: "A UIStore can be combined with UIBuilder.watcher to react to changes in its state."
});

const watcherCode = await CodeBlock({
    code: `const store = UIBuilder.store.set({
    count: 0
});

UIBuilder.watcher.watch(store, (state) => {
    console.log(state.count);
});

store.get.count = 1;`
});

export const storeSection = RouterView({
    childs: UIBuilder.blend(
        storeTopic,
        storeCode,
        setTopic,
        setCode,
        getTopic,
        getCode,
        updateTopic,
        updateCode,
        typedTopic,
        typedCode,
        watcherTopic,
        watcherCode
    )
});
