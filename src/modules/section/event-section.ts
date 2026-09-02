
// EVENT SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const eventTopic = Topic({
    title: "Event",
    content: "Handle native JavaScript DOM events on UIBuilder elements using UIBuilder.event. UIEvent works directly with the browser's event system, so events such as click, input, change and keydown behave like standard JavaScript events."
});

const eventCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Click Me"
});

const event = UIBuilder.event(button);`
});

const addTopic = Topic({
    title: "add",
    content: "Add an event listener to an element using add. The event name uses the same native event names provided by JavaScript."
});

const addCode = await CodeBlock({
    code: `UIBuilder.event(button).add("click", () => {
    console.log("Button clicked");
});`
});

const callbackTopic = Topic({
    title: "Event Callback",
    content: "The callback receives the native event object through the e parameter. Its type is automatically inferred from the event name, allowing you to access the properties provided by that specific event."
});

const callbackCode = await CodeBlock({
    code: `UIBuilder.event(button).add("click", (e) => {
    console.log(e.clientX);
});`
});

const removeTopic = Topic({
    title: "remove",
    content: "Remove an event listener using remove. The same callback reference used when adding the event must be provided when removing it."
});

const removeCode = await CodeBlock({
    code: `const handleClick = (e: MouseEvent) => {
    console.log("Button clicked");
};

const event = UIBuilder.event(button);

event.add("click", handleClick);

event.remove("click", handleClick);`
});

const chainingTopic = Topic({
    title: "Chaining",
    content: "The add and remove methods return the UIEvent instance, allowing event operations to be chained."
});

const chainingCode = await CodeBlock({
    code: `UIBuilder.event(button)
    .add("click", handleClick)
    .remove("click", handleClick);`
});

const nativeTopic = Topic({
    title: "Native Events",
    content: "UIBuilder does not introduce a separate event system. UIEvent uses the native JavaScript event system, keeping event handling compatible with the standard DOM APIs and behavior."
});

export const eventSection = RouterView({
    childs: UIBuilder.blend(
        eventTopic,
        eventCode,
        addTopic,
        addCode,
        callbackTopic,
        callbackCode,
        removeTopic,
        removeCode,
        chainingTopic,
        chainingCode,
        nativeTopic
    )
});
