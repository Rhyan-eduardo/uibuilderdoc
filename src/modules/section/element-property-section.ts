
// ELEMENT PROPERTY SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const idTopic = Topic({
    title: "ID",
    content: "Set the HTML id attribute of a UIBuilder element."
});

const idCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.id("title");`
});

const classNameTopic = Topic({
    title: "Class Name",
    content: "Add CSS classes to a UIBuilder element using a space-separated class name string."
});

const classNameCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.className("title primary");`
});

const classListTopic = Topic({
    title: "Class List",
    content: "Add multiple CSS classes to a UIBuilder element using an array of class names. This method is deprecated; use className instead.",
    deprecated : true,
    highlight : ["This method is deprecated; use className instead."],
    see : "[className();](/element-property#class-name)"
});

const classListCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.classList(["title", "primary"]);`
});

const attributeTopic = Topic({
    title: "Attribute",
    content: "Set an HTML attribute on a UIBuilder element."
});

const attributeCode = await CodeBlock({
    code: `const input = UIBuilder.custom({
    tag: "input"
});

input.attribute("placeholder", "Enter your name");`
});

const removeAttributeTopic = Topic({
    title: "Remove Attribute",
    content: "Remove an HTML attribute from a UIBuilder element."
});

const removeAttributeCode = await CodeBlock({
    code: `input.removeAttribute("placeholder");`
});

const removeClassNameTopic = Topic({
    title: "Remove Class Name",
    content: "Remove a CSS class from a UIBuilder element."
});

const removeClassNameCode = await CodeBlock({
    code: `label.removeClassName("primary");`
});

const labelTopic = Topic({
    title: "Label",
    content: "Set the text content of a UIBuilder element. This method is deprecated; use content instead.",
    deprecated : true,
    highlight : ["This method is deprecated; use content instead."],
    see : "[Content();](/element-property#content)"

});

const labelCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.label("Updated");`
});

const contentTopic = Topic({
    title: "Content",
    content: "Set the text content of a UIBuilder element."
});

const contentCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.content("Updated");`
});

const replaceRenderTopic = Topic({
    title: "Replace Render",
    content: "Replace an existing rendered UIElement with another UIElement inside the current generic element."
});

const replaceRenderCode = await CodeBlock({
    code: `const first = UIBuilder.label({
    content: "First"
});

const second = UIBuilder.label({
    content: "Second"
});

const panel = UIBuilder.group({});

panel.render(first);
panel.replaceRender(second, first);`
});

const renderTopic = Topic({
    title: "Render",
    content: "Render a UIElement or UIBlend inside the current generic element."
});

const renderCode = await CodeBlock({
    code: `const panel = UIBuilder.panel({});

const label = UIBuilder.label({
    content: "Hello World"
});

panel.render(label);`
});

const unrenderTopic = Topic({
    title: "Unrender",
    content: "Remove a rendered UIElement or UIBlend from the current generic element."
});

const unrenderCode = await CodeBlock({
    code: `panel.unrender(label);`
});

const listenRenderTopic = Topic({
    title: "Listen Render",
    content: "Register a callback that is invoked when the generic element is rendered."
});

const listenRenderCode = await CodeBlock({
    code: `panel.listenRender(() => {
    console.log("Element rendered");
});`
});

const listenUnrenderTopic = Topic({
    title: "Listen Unrender",
    content: "Register a callback that is invoked when the generic element is unrendered."
});

const listenUnrenderCode = await CodeBlock({
    code: `panel.listenUnrender(() => {
    console.log("Element unrendered");
});`
});

const styleTopic = Topic({
    title: "Style",
    content: "Apply CSS styles to a UIBuilder element using a UIStyle or CSS style properties."
});

const styleCode = await CodeBlock({
    code: `const label = UIBuilder.label({
    content: "Hello World"
});

label.style({
    fontSize: "24px",
    fontWeight: "bold"
});`
});

const replaceSelfRenderTopic = Topic({
    title: "Replace Self Render",
    content: "Replace the current UIElement with another UIElement directly in the DOM. Unlike replaceRender, replaceSelfRender allows the element to replace itself without requiring a reference to its parent."
});

const replaceSelfRenderCode = await CodeBlock({
    code: `const first = UIBuilder.label({
    content: "First"
});

const second = UIBuilder.label({
    content: "Second"
});

UIBuilder.body.render(first);

first.replaceSelfRender(second);`
});

export const elementPropertySection = RouterView({
    childs: UIBuilder.blend(
        idTopic,
        idCode,
        classNameTopic,
        classNameCode,
        classListTopic,
        classListCode,
        attributeTopic,
        attributeCode,
        removeAttributeTopic,
        removeAttributeCode,
        removeClassNameTopic,
        removeClassNameCode,
        labelTopic,
        labelCode,
        contentTopic,
        contentCode,
        replaceRenderTopic,
        replaceRenderCode,
        renderTopic,
        renderCode,
        unrenderTopic,
        unrenderCode,
        listenRenderTopic,
        listenRenderCode,
        listenUnrenderTopic,
        listenUnrenderCode,
        styleTopic,
        styleCode,
        replaceSelfRenderTopic,
        replaceSelfRenderCode
    )
});
