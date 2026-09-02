
// CODE BLOCK [COMPONENT] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { codeToHtml } from "shiki";

export const CodeBlock = UIBuilder.component( async ({ code } : { code : string})=> {

    const codeContainer = UIBuilder.group({ className : "code-block"});

    const html = await codeToHtml(code, {
        lang: "typescript",
        theme: "poimandres"
    });

    const copyButton = UIBuilder.button({ label : "Copy" , className : "code-block-copy-button"});

    UIBuilder.html.parseHTMLElement(codeContainer).innerHTML = html;

    codeContainer.render(copyButton);

    UIBuilder.event(copyButton).add("click", async ()=>{
        await navigator.clipboard.writeText(code);
        copyButton.label("Copied!");
        setTimeout(() => copyButton.label("Copy"), 1000);
    });

    return codeContainer;

});

