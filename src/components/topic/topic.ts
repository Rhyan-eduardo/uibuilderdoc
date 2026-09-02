// TOPIC [COMPONENT] :

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const Topic = UIBuilder.component(({ title, content, highlight }: {title: string,content: string,highlight?: string[]}) => {

    const topicGroup = UIBuilder.group({ className: "topic-group" });

    if (highlight) {
        highlight.forEach(h => {
            content = content.replaceAll(h, `<span class="topic-highlight">${h}</span>`);
        });
    };

    const topicTitle = UIBuilder.custom({ tag: "h1", className: "topic-title" });
    const topicContent = UIBuilder.custom({ tag: "p", className: "topic-content" });

    topicTitle.label(title);

    UIBuilder.html.parseHTMLElement(topicContent).innerHTML = content;

    topicGroup.render(UIBuilder.blend(topicTitle, topicContent));

    return topicGroup;
});