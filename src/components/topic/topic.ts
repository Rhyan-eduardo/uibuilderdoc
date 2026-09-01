
// TOPIC [COMPONENT] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const Topic = UIBuilder.component(({ title , content } : { title : string , content : string})=> {

    const topicGroup = UIBuilder.group({ className : "topic-group"});

    const topicTitle = UIBuilder.custom({ tag : "h1" , className : "topic-title"});
    const topicContent = UIBuilder.custom({ tag : "p" , className : "topic-content"});

    topicTitle.label(title);
    topicContent.label(content)

    topicGroup.render(UIBuilder.blend(topicTitle,topicContent));

    return topicGroup;
})