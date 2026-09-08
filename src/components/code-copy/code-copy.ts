
// CODE COPY [COMPONENT] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const CodeCopy = UIBuilder.component(({ code } : { code : string })=> {

    const codeText: string = code;

    const copyContainer = UIBuilder.group({
        className: "doc-lib-install"
    });

    const copyLabel = UIBuilder.label({
        label: codeText,
        className: "doc-install-label"
    });

    const copyCodeButton = UIBuilder.icon({
        className : "ri-clipboard-line",
        classList : ["doc-install-copy-button"]
    });

    UIBuilder.event(copyCodeButton).add("click", async () => {
        await navigator.clipboard.writeText(codeText.replace("$ ", ""));

        copyLabel.label("Copied!");

        setTimeout(() => copyLabel.label(codeText), 2000);
    });

    copyContainer.render(copyLabel);
    copyContainer.render(copyCodeButton);

    return copyContainer

})