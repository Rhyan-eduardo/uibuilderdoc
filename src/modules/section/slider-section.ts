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
    classList: ["control", "primary"],
    attribute: [
        {
            name: "min",
            value: "0"
        },
        {
            name: "max",
            value: "100"
        }
    ]
});`
});

const valueTopic = Topic({
    title: "value",
    content: "Set the initial value of the slider when it is created. The value can also be read or updated later through the value method."
});

const valueCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    value: "50"
});

const value = slider.value();

slider.value("75");`
});

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the slider."
});

const idCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    id: "volume"
});`
});

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the slider."
});

const classNameCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    className: "slider"
});`
});

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the slider when it is created."
});

const classListCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    classList: ["slider", "primary"]
});`
});

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the slider using a list of name and value pairs. This can be used to configure native range input properties such as min, max, and step."
});

const attributeCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    attribute: [
        {
            name: "min",
            value: "0"
        },
        {
            name: "max",
            value: "100"
        },
        {
            name: "step",
            value: "10"
        }
    ]
});`
});

const valueMethodTopic = Topic({
    title: "value",
    content: "Read or update the current value of the slider. When called without an argument, value returns the current slider value. When a string is provided, the slider value is updated."
});

const valueMethodCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    value: "25"
});

const currentValue = slider.value();

slider.value("75");`
});

const disableTopic = Topic({
    title: "disable",
    content: "Enable or disable the slider by changing its disabled state. Pass true to disable the slider or false to enable it again."
});

const disableCode = await CodeBlock({
    code: `const slider = UIBuilder.slider();

slider.disable(true);

slider.disable(false);`
});

const eventsTopic = Topic({
    title: "Events",
    content: "Attach DOM events to the slider through UIBuilder.event. This can be used to react whenever the slider value changes."
});

const eventsCode = await CodeBlock({
    code: `const slider = UIBuilder.slider({
    value: "50",
    attribute: [
        {
            name: "min",
            value: "0"
        },
        {
            name: "max",
            value: "100"
        }
    ]
});

UIBuilder.event(slider).add("input", () => {
    console.log(slider.value());
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
        valueTopic,
        valueCode,
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        valueMethodTopic,
        valueMethodCode,
        disableTopic,
        disableCode,
        eventsTopic,
        eventsCode,
        renderTopic,
        renderCode
    )
});