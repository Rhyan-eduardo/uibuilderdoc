
// CODE BLOCK [COMPONENT] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import typescript from "@shikijs/langs/typescript";
import poimandres from "@shikijs/themes/poimandres";

const highlighter = await createHighlighterCore({
    langs: [typescript],
    themes: [poimandres],
    engine: createJavaScriptRegexEngine()
});

export const CodeBlock = UIBuilder.component(async ({ code }: { code: string }) => {

    const codeContainer = UIBuilder.group({ className: "code-block" });

    const html = highlighter.codeToHtml(code, {
        lang: "typescript", 
        theme: "poimandres"
    }); 

    const copyButton = UIBuilder.button({ label: "Copy", className: "code-block-copy-button" });

    UIBuilder.html.parseHTMLElement(codeContainer).innerHTML = html;

    codeContainer.render(copyButton);

    UIBuilder.event(copyButton).add("click", async () => {
        await navigator.clipboard.writeText(code);
        copyButton.label("Copied!");
        setTimeout(() => copyButton.label("Copy"), 1000);
    });

    return codeContainer;

});