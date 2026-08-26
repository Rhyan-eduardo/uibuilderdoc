
// : COUNTER :

import { UIBuilder } from "@limbusfoundation/uibuilder";

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