
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

export const htmlSection = RouterView({
    childs: UIBuilder.blend(
        htmlTopic,
        htmlCode,
        parseTopic,
        parseCode,
        domTopic,
        domCode
    )
});
