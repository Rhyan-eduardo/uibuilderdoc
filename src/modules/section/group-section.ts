// GROUP SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// GROUP :

const groupTopic = Topic({
    title: "Group",
    content: "Create a generic container using UIBuilder.group. Group is a lightweight wrapper around the native HTMLDivElement and is primarily used to compose multiple UIBuilder elements into a single interface structure."
});

const groupCode = await CodeBlock({
    code: `const group = UIBuilder.group();

UIBuilder.body.render(group);`
});


// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.group accepts a configuration object that can be used to define the group's identity, CSS classes, and custom HTML attributes."
});

const optionsCode = await CodeBlock({
    code: `const group = UIBuilder.group({
    id: "content",
    className: "content-group",
    attribute: {
        "data-section" : "content"
    }
    
});`
});

// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the group into another UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const group = UIBuilder.group();

const label = UIBuilder.label({
    label: "Hello World"
});

group.render(label);

UIBuilder.body.render(group);`
});


// EXPORT :

export const groupSection = RouterView({
    childs: UIBuilder.blend(
        groupTopic,
        groupCode,

        optionsTopic,
        optionsCode,

        renderTopic,
        renderCode
    )
});