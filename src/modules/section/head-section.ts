
// HEAD SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const headTopic = Topic({
    title: "Head",
    content: "Interact directly with the document <head> using UIBuilder.head. It allows UIBuilder elements to be appended to the page head."
});

const appendTopic = Topic({
    title: "append",
    content: "Append a UIBuilder element directly to the document head using UIBuilder.head.append. The method returns the native HTMLElement that was added."
});

const appendCode = await CodeBlock({
    code: `const meta = UIBuilder.custom({
    tag: "meta",
    attribute: {
        name: "description",
        content: "My application"
    }
});

UIBuilder.head.append(meta);`
});

export const headSection = RouterView({
    childs: UIBuilder.blend(
        headTopic,
        appendTopic,
        appendCode
    )
});
