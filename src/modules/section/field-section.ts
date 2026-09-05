
// FIELD SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// FIELD :

const fieldTopic = Topic({
    title: "Field",
    content: "Create an input field using UIBuilder.field. Field is a lightweight wrapper around the native HTMLInputElement and provides a simple API for creating, reading, and modifying input values without accessing the underlying DOM element directly."
});

const fieldCode = await CodeBlock({
    code: `const field = UIBuilder.field();

UIBuilder.body.render(field);`
});


// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.field accepts an optional configuration object. You can define the input type, initial value, placeholder, identity, CSS classes, and custom HTML attributes when creating the element."
});

const optionsCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    id: "username",
    type: "text",
    value: "Rhyan",
    placeholder: "Enter your name",
    className: "field",
    classList: ["input", "primary"],
    attribute: {
        "autocomplete" : "name"
    }
    
});`
});


// TYPE :

const typeTopic = Topic({
    title: "type",
    content: "Define the type of input field. Field supports text, password, and number input types. When no type is provided, the input defaults to text."
});

const typeCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    type: "password"
});`
});


// VALUE :

const valueTopic = Topic({
    title: "value",
    content: "Set the initial value of the input when it is created. The value can also be read or updated later through the value method."
});

const valueCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    value: "Hello World"
});

const value = field.value();

field.value("New Value");`
});


// PLACEHOLDER :

const placeholderTopic = Topic({
    title: "placeholder",
    content: "Set the placeholder text displayed when the input does not contain a value."
});

const placeholderCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    placeholder: "Enter your name"
});

field.placeholder("Enter your username");`
});


// ID :

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the field. The value is assigned directly to the underlying HTMLInputElement."
});

const idCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    id: "username"
});`
});


// CLASS NAME :

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the field."
});

const classNameCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    className: "field"
});`
});


// CLASS LIST :

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the field when it is created."
});

const classListCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    classList: ["input", "primary"]
});`
});


// ATTRIBUTE :

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the field using a list of name and value pairs."
});

const attributeCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    attribute: {
        autocomplete : "username",
        "data-field" : "user"
    }
});`
});


// VALUE METHOD :

const valueMethodTopic = Topic({
    title: "value",
    content: "Read or update the current value of the field. When called without an argument, value returns the current input value. When a string is provided, the input value is updated."
});

const valueMethodCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    value: "Hello"
});

const currentValue = field.value();

field.value("Hello World");`
});


// PLACEHOLDER METHOD :

const placeholderMethodTopic = Topic({
    title: "placeholder",
    content: "Update the placeholder text of an existing field."
});

const placeholderMethodCode = await CodeBlock({
    code: `const field = UIBuilder.field();

field.placeholder("Enter your name");`
});


// DISABLE :

const disableTopic = Topic({
    title: "disable",
    content: "Enable or disable the field by changing its disabled state. Pass true to disable the input or false to enable it again."
});

const disableCode = await CodeBlock({
    code: `const field = UIBuilder.field();

field.disable(true);

field.disable(false);`
});


// EVENTS :

const eventsTopic = Topic({
    title: "Events",
    content: "Attach DOM events to the field through UIBuilder.event. This can be used to react to user input, focus changes, keyboard events, and other native browser events."
});

const eventsCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    placeholder: "Enter your name"
});

UIBuilder.event(field).add("input", () => {
    console.log(field.value());
});`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the field into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const field = UIBuilder.field({
    placeholder: "Enter your name"
});

UIBuilder.body.render(field);`
});


// EXPORT :

export const fieldSection = RouterView({
    childs: UIBuilder.blend(
        fieldTopic,
        fieldCode,

        optionsTopic,
        optionsCode,

        typeTopic,
        typeCode,

        valueTopic,
        valueCode,

        placeholderTopic,
        placeholderCode,

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

        placeholderMethodTopic,
        placeholderMethodCode,

        disableTopic,
        disableCode,

        eventsTopic,
        eventsCode,

        renderTopic,
        renderCode
    )
});
