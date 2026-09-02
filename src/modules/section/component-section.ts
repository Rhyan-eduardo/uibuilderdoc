
// COMPONENT SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const componentTopic = Topic({
    title: "Component",
    content: "Create reusable UI structures using UIBuilder.component. A component receives props and builds its interface using the same UIBuilder API used throughout the application."
});

const componentCode = await CodeBlock({
    code: `const HelloWorld = UIBuilder.component(() => {

    const label = UIBuilder.label({
        label: "Hello World"
    });

    return label;
});

const hello = HelloWorld();`
});

const propsTopic = Topic({
    title: "Props",
    content: "Components can receive props as an object. Passing an object such as { a, b } is recommended because it keeps related values together and makes the component easier to extend."
});

const propsCode = await CodeBlock({
    code: `const Greeting = UIBuilder.component(({ name, message }) => {

    const label = UIBuilder.label({
        label: \`\${message}, \${name}!\`
    });

    return label;
});

const greeting = Greeting({
    name: "John",
    message: "Hello"
});`
});

const typedPropsTopic = Topic({
    title: "Typed Props",
    content: "In TypeScript, the props object can be explicitly typed using the parameter syntax props: Type. This provides type checking and autocomplete for the values received by the component."
});

const typedPropsCode = await CodeBlock({
    code: `const Greeting = UIBuilder.component(
    ({ name, message }: { name: string; message: string }) => {

        const label = UIBuilder.label({
            label: \`\${message}, \${name}!\`
        });

        return label;
    }
);`
});

const selfTopic = Topic({
    title: "self",
    content: "The component callback can receive self as its second parameter. It provides methods that allow the component to listen for changes to its state."
});

const selfCode = await CodeBlock({
    code: `const Counter = UIBuilder.component(({ count }, self) => {

    const value = UIBuilder.label({
        label: String(count)
    });

    self.stateListen((state) => {
        value.label(String(state.count));
    });

    return value;
});`
});

const stateTopic = Topic({
    title: "State",
    content: "Components created with UIBuilder.component provide a state method. Calling state updates the component state and notifies the listeners registered through self."
});

const stateCode = await CodeBlock({
    code: `const counter = Counter({
    count: 0
});

counter.state({
    count: 1
});`
});

const exampleTopic = Topic({
    title: "Component Example",
    content: "A component can combine props, multiple UIBuilder elements, events and self.stateListen to create a reusable interactive interface."
});

const exampleCode = await CodeBlock({
    code: `const Counter = UIBuilder.component(({ onClick }, self) => {

    const label = UIBuilder.label({
        label: "Counter",
        className: "counter-label"
    });

    const counterValue = UIBuilder.label({
        label: "0",
        className: "counter-value"
    });

    const button = UIBuilder.button({
        label: "",
        className: "counter-button"
    });

    button.render(counterValue);
    button.render(label);

    let count = 0;

    UIBuilder.event(button).add("click", () => {
        count++;
        counterValue.label(String(count));
        onClick();
    });

    self.stateListen((state) => {
        counterValue.label(String(state.count));
    });

    return UIBuilder.blend(button);
});

const counter = Counter({
    onClick: () => {
        console.log("Clicked");
    }
});`
});

export const componentSection = RouterView({
    childs: UIBuilder.blend(
        componentTopic,
        componentCode,
        propsTopic,
        propsCode,
        typedPropsTopic,
        typedPropsCode,
        selfTopic,
        selfCode,
        stateTopic,
        stateCode,
        exampleTopic,
        exampleCode
    )
});

