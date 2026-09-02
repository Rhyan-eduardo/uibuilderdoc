// TEXT FIELD SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";


// TEXT FIELD :

const textFieldTopic = Topic({
    title: "Text Field",
    content: "Create an input field using UIBuilder.textField. TextField is a lightweight wrapper around the native HTMLInputElement and provides a simple API for creating, reading, and modifying input values without accessing the underlying DOM element directly."
});

const textFieldCode = await CodeBlock({
    code: `const textField = UIBuilder.textField();

UIBuilder.body.render(textField);`
});


// OPTIONS :

const optionsTopic = Topic({
    title: "Options",
    content: "UIBuilder.textField accepts an optional configuration object. You can define the input type, initial value, placeholder, identity, CSS classes, and custom HTML attributes when creating the element."
});

const optionsCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    id: "username",
    type: "text",
    value: "Rhyan",
    placeholder: "Enter your name",
    className: "text-field",
    classList: ["input", "primary"],
    attribute: [
        {
            name: "autocomplete",
            value: "name"
        }
    ]
});`
});


// TYPE :

const typeTopic = Topic({
    title: "type",
    content: "Define the type of input field. TextField supports text, password, and number input types. When no type is provided, the input defaults to text."
});

const typeCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    type: "password"
});`
});


// VALUE :

const valueTopic = Topic({
    title: "value",
    content: "Set the initial value of the input when it is created. The value can also be read or updated later through the value method."
});

const valueCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    value: "Hello World"
});

const value = textField.value();

textField.value("New Value");`
});


// PLACEHOLDER :

const placeholderTopic = Topic({
    title: "placeholder",
    content: "Set the placeholder text displayed when the input does not contain a value."
});

const placeholderCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    placeholder: "Enter your name"
});

textField.placeholder("Enter your username");`
});


// ID :

const idTopic = Topic({
    title: "id",
    content: "Set a unique HTML id for the text field. The value is assigned directly to the underlying HTMLInputElement."
});

const idCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    id: "username"
});`
});


// CLASS NAME :

const classNameTopic = Topic({
    title: "className",
    content: "Set the CSS class name of the text field."
});

const classNameCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    className: "text-field"
});`
});


// CLASS LIST :

const classListTopic = Topic({
    title: "classList",
    content: "Add multiple CSS classes to the text field when it is created."
});

const classListCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    classList: ["input", "primary"]
});`
});


// ATTRIBUTE :

const attributeTopic = Topic({
    title: "attribute",
    content: "Define custom HTML attributes for the text field using a list of name and value pairs."
});

const attributeCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    attribute: [
        {
            name: "autocomplete",
            value: "username"
        },
        {
            name: "data-field",
            value: "user"
        }
    ]
});`
});


// VALUE METHOD :

const valueMethodTopic = Topic({
    title: "value",
    content: "Read or update the current value of the text field. When called without an argument, value returns the current input value. When a string is provided, the input value is updated."
});

const valueMethodCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    value: "Hello"
});

const currentValue = textField.value();

textField.value("Hello World");`
});


// PLACEHOLDER METHOD :

const placeholderMethodTopic = Topic({
    title: "placeholder",
    content: "Update the placeholder text of an existing text field."
});

const placeholderMethodCode = await CodeBlock({
    code: `const textField = UIBuilder.textField();

textField.placeholder("Enter your name");`
});


// DISABLE :

const disableTopic = Topic({
    title: "disable",
    content: "Enable or disable the text field by changing its disabled state. Pass true to disable the input or false to enable it again."
});

const disableCode = await CodeBlock({
    code: `const textField = UIBuilder.textField();

textField.disable(true);

textField.disable(false);`
});


// EVENTS :

const eventsTopic = Topic({
    title: "Events",
    content: "Attach DOM events to the text field through UIBuilder.event. This can be used to react to user input, focus changes, keyboard events, and other native browser events."
});

const eventsCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    placeholder: "Enter your name"
});

UIBuilder.event(textField).add("input", () => {
    console.log(textField.value());
});`
});


// RENDER :

const renderTopic = Topic({
    title: "Render",
    content: "Render the text field into a UIBuilder container or directly into the document body."
});

const renderCode = await CodeBlock({
    code: `const textField = UIBuilder.textField({
    placeholder: "Enter your name"
});

UIBuilder.body.render(textField);`
});


// EXPORT :

export const textFieldSection = RouterView({
    childs: UIBuilder.blend(
        textFieldTopic,
        textFieldCode,

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