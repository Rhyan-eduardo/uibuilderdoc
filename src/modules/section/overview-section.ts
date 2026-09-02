
// OVER VIEW SECTION : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { counter } from "../../components/counter/counter";
import { CodeBlock } from "../../components/code-block/code-block";

import logoImg from "../../assets/uibuilder-logo-vector.svg";
import { CodeCopy } from "../../components/code-copy/code-copy";
import { Topic } from "../../components/topic/topic";

// DOCUMENT HEADER :

const detailContainer = UIBuilder.group({
    className: "detail-container"
});

const logo = UIBuilder.image({
    src: logoImg,
    className: "logo"
});

const title = UIBuilder.label({
    label: "DOM Wrapper UI library",
    className: "title"
});

const subTitle = UIBuilder.label({
    label: "Create user interfaces for web-based applications.",
    className: "sub-title"
});


// WHY UIBUILDER TOPIC :

const whyUIBuilderTopic = Topic({
    title: "Why UIBuilder",
    content: "UIBuilder is designed with a direct and focused approach to building user interfaces. It gives developers the freedom to compose elements, components, and layouts without being forced into a predefined architectural pattern. Built around a vanilla-first philosophy, UIBuilder stays close to the native DOM while providing useful abstractions for everyday interface development. Rather than following traditional approaches popularized by frameworks such as React, UIBuilder takes a different path: keeping composition flexible, making the underlying platform accessible, and giving you more control over how your interface is structured and behaves.",
    highlight: [
        "direct and focused approach",
        "vanilla-first philosophy",
        "native DOM",
        "React",
        "composition flexible"
    ]
});

// COUNTER CODE EXAMPLE :

const counterCodeExample = await CodeBlock({
    code : `import { UIBuilder } from "@limbusfoundation/uibuilder";

export const counter = UIBuilder.component(() => {

    const label = UIBuilder.label({ label: "Counter", className : "counter-label" });
    const coutnerValue = UIBuilder.label({ label : "0" , className : "counter-value"});

    const button = UIBuilder.button({ label: "" , className : "counter-button"});

    button.render(coutnerValue)
    button.render(label)

    let count = 0;

    UIBuilder.event(button).add("click", () => {
        count++;
        coutnerValue.label(String(count));
    });

    return UIBuilder.blend(button);   
}); 

const counter1 = counter()

UIBuilder.body.render(counter1);`
})



const codeElement = UIBuilder.html.parseHTMLElement(counterCodeExample);

const codeLines = codeElement.querySelectorAll(".line");


// CODE HIGHLIGHT :

let highlightTimer: number;

const highlightLines = (start: number, end: number) => {

    if (highlightTimer) clearTimeout(highlightTimer);

    for (let line = start; line <= end; line++) codeLines[line].classList.add("tt-tt");
    

    highlightTimer = setTimeout(() => {

        for (let line = start; line <= end; line++) {
            codeLines[line].classList.remove("tt-tt");
        }

    }, 1000);
};


// COUNTER EXAMPLE :

const counter1 = counter({ onClick : () => highlightLines(14, 17) });


// HEADER CONTENT :

detailContainer.render(logo);
detailContainer.render(title);
detailContainer.render(subTitle);
detailContainer.render(counter1);

// ROUTE :

const libInstall = CodeCopy({ code : "$ npm install @limbusfoundation/uibuilder"})

export const overviewRoute = RouterView({
    childs: UIBuilder.blend(
        detailContainer,
        libInstall,
        counterCodeExample,
        whyUIBuilderTopic
    )
});

