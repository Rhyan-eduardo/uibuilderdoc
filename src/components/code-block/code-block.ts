
// CODE BLOCK [COMPONENT] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { codeToHtml } from "shiki";

export const CodeBlock = UIBuilder.component( async ({ code } : { code : string})=> {

    const codeContainer = UIBuilder.group({ className : "code-block"});

    const html = await codeToHtml(code, {
        lang: "typescript",
        theme: "poimandres"
    });

    UIBuilder.html.parseHTMLElement(codeContainer).innerHTML = html;

    return codeContainer;

});