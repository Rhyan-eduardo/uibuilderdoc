// WEB TEMPLATE [SECTION] :

import { CodeCopy } from './../../components/code-copy/code-copy';
import { Topic } from './../../components/topic/topic';
import { RouterView } from './../../components/router-view/router-view';
import { UIBuilder } from "@limbusfoundation/uibuilder";

const cloneTopic = Topic({
    title: "Clone",
    content: "Clone the UIBuilder Web Template repository."
})

const copyClone = await CodeCopy({
    code: "https://github.com/Auto-Software/uibuilder-web-template.git"
});

const installTopic = Topic({
    title: "Install",
    content: "Install the project dependencies."
})

const installCopy = await CodeCopy({
    code: "npm install"
});

const runTopic = Topic({
    title: "Run",
    content: "Start the development server."
})

const runCopy = await CodeCopy({
    code: "npm run dev"
});

export const webTemplateSection = RouterView({
    childs: UIBuilder.blend(
        cloneTopic,
        copyClone,
        installTopic,
        installCopy,
        runTopic,
        runCopy
    )
})