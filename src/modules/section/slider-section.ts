// SLIDER SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const sliderTopic = Topic({
    title: "Slider",
    content: "Create a range slider using UIBuilder.slider. Slider is a lightweight wrapper around the native HTMLInputElement configured with the range input type, providing a simple API for reading, updating, and controlling its value."
});

const sliderCode = await CodeBlock({
    code: `const slider = UIBuilder.slider();

UIBuilder.body.render(slider);`
});

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.slider accepts an optional configuration object. You can define the initial value, identity, CSS classes, and custom HTML attributes when creating the slider."
});

const optionsCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    id: "volume",
    value: "50",
    className: "slider",
    attribute: {
        min: "0",
        max: "100"
    }
});`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render the slider into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    value: "50"
});

UIBuilder.body.render(slider);`
});

export const sliderSection = RouterView({
    childs: UIBuilder.blend(
        sliderTopic,
        sliderCode,
        optionsTopic,
        optionsCode,
        renderTopic,
        renderCode
    )
});