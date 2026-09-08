
// CAPACITOR TEMPLATE [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeCopy } from "../../components/code-copy/code-copy";

const cloneTopic = Topic({
    title: "Clone",
    content: "Clone the UIBuilder Capacitor template from GitHub to get a ready-to-use Capacitor project configured with UIBuilder."
});

const copyClone = await CodeCopy({
    code: "git clone https://github.com/Auto-Software/uibuilder-capacitor-template.git"
});

const installTopic = Topic({
    title: "Install",
    content: "Install the project dependencies using npm before running the application."
});

const installCopy = await CodeCopy({
    code: "npm install"
});

const runTopic = Topic({
    title: "Run",
    content: "Start the UIBuilder application in development mode using the development script."
});

const runCopy = await CodeCopy({
    code: "npm run dev"
});

export const capacitorTemplateSection = RouterView({
    childs: UIBuilder.blend(
        cloneTopic,
        copyClone,
        installTopic,
        installCopy,
        runTopic,
        runCopy
    )
});