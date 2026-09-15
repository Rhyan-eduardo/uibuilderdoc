
// HTML SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const htmlTopic = Topic({
    title: "HTML",
    content: "Access the native HTMLElement represented by a UIBuilder element using UIBuilder.html."
});

const htmlCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Click Me"
});

const element = UIBuilder.html.parseHTMLElement(button);`
});

const parseTopic = Topic({
    title: "parseHTMLElement",
    content: "Convert a UIElement into its native HTMLElement. This is useful when you need to access standard DOM APIs or properties that are not directly exposed by the UIBuilder element."
});

const parseCode = await CodeBlock({
    code: `const button = UIBuilder.button({
    label: "Click Me"
});

const element = UIBuilder.html.parseHTMLElement(button);

element.addEventListener("click", () => {
    console.log("Clicked");
});`
});

const domTopic = Topic({
    title: "Native HTMLElement",
    content: "The returned value is the actual HTMLElement associated with the UIBuilder element, allowing it to be used with the standard browser DOM APIs."
});

const domCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

const element = UIBuilder.html.parseHTMLElement(label);

element.textContent = "Updated";`
});

const renderedTopic = Topic({
    title: "Rendered Elements",
    content: "Find rendered HTML elements using a CSS selector or a UIBuilder element. The rendered method returns the matching native HTMLElement, multiple elements when using the ... class selector, or null when no element is found."
});

const renderedCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    label: "Hello World"
});

UIBuilder.body.render(label);

const element = UIBuilder.html.rendered(label);

element?.textContent = "Updated";`
});

const selectorCode = await CodeBlock({
    code: `UIBuilder.html.rendered("#title");
UIBuilder.html.rendered(".button");
UIBuilder.html.rendered("...button");
UIBuilder.html.rendered(UIElement);`
});

export const htmlSection = RouterView({
    childs: UIBuilder.blend(
        htmlTopic,
        htmlCode,
        parseTopic,
        parseCode,
        domTopic,
        domCode,
        renderedTopic,
        renderedCode,
        selectorCode
    )
});
