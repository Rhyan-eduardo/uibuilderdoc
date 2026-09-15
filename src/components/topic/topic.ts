// TOPIC [COMPONENT] :

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const Topic = UIBuilder.component(({ title, content, highlight, deprecated , see }: {title: string,content: string,highlight?: string[] , deprecated? : boolean , see ? : string}) => {

    const anchorId = title.replaceAll(" ","-").toLowerCase();

    const topicGroup = UIBuilder.group({ className: "topic-group" , id : anchorId});

    const deprecatedLabel = UIBuilder.label({ label : " @Deprecated"}); 
    deprecatedLabel.style({ color : "#0296f8"})

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

    if(deprecated) topicTitle.render(deprecatedLabel)

    if(see) {

        const match = see.match(/\[([^\]]+)\]\(([^)]+)\)/);

        if(match) {

            const seelabel = UIBuilder.custom({ tag : "a" , className : "overview-anchor" , attribute : { href : match[2] }});

            seelabel.label(" @See " + match[1])

            topicTitle.render(seelabel);

        };

        
    };

    UIBuilder.html.parseHTMLElement(topicContent).innerHTML = content;

    topicGroup.render(UIBuilder.blend(topicTitle, topicContent));

    return topicGroup;
});