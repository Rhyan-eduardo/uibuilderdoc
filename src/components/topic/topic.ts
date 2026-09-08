// TOPIC [COMPONENT] :

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const Topic = UIBuilder.component(({ title, content, highlight }: {title: string,content: string,highlight?: string[]}) => {

    const anchorId = title.replaceAll(" ","-").toLowerCase();

    const topicGroup = UIBuilder.group({ className: "topic-group" , id : anchorId});

    const anchor = UIBuilder.custom({ tag : "a" , className : "topic-anchor" , attribute : { href : "#" + anchorId}});
    anchor.label("# ");

    if (highlight) {
        highlight.forEach(h => {
            content = content.replaceAll(h, `<span class="topic-highlight">${h}</span>`);
        });
    };

    const topicTitle = UIBuilder.custom({ tag: "h1", className: "topic-title" });
    const topicContent = UIBuilder.custom({ tag: "p", className: "topic-content" });

    topicTitle.label(title);

    topicTitle.render(anchor,"above");

    UIBuilder.html.parseHTMLElement(topicContent).innerHTML = content;

    topicGroup.render(UIBuilder.blend(topicTitle, topicContent));

    return topicGroup;
});