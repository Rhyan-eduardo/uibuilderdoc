
// UIBUILDER SECTION [SECTION] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const uibuilderTopic = Topic({

    title: "UIBuilder",

    content: "UIBuilder is the central API of the library and serves as the main entry point for building user interfaces. Instead of spreading functionality across multiple independent modules or requiring developers to instantiate a framework object, UIBuilder exposes its core capabilities through a single static class. Components, utilities, DOM helpers, events, routing, and other features are accessed directly through this central API, creating a consistent and predictable way to work with the library. This design keeps the public interface focused while allowing the underlying implementation to remain modular. Everything you build with UIBuilder ultimately starts from this central entry point, whether you are creating a simple label, composing a complex interface, handling events, managing application state, or rendering content into the document. The static nature of UIBuilder also means that no framework instance or application context needs to be created before using the library. You simply import UIBuilder and begin composing your interface. This reflects one of the core ideas behind the library: the DOM should remain accessible, and building an interface should not require a large amount of ceremony or infrastructure. UIBuilder provides abstractions where they are useful while keeping the relationship between your code and the browser's native platform clear. As the library grows, its APIs remain organized around this central object, making UIBuilder both the foundation of the library and the primary interface developers interact with when building applications."
    ,highlight : ["API"]
});

const uibuilderStatic = await CodeBlock({
    code : `import { UIBuilder } from "@limbusfoundation/uibuilder"; 
    
UIBuilder.label(...)
UIBuilder.button(...)
UIBuilder.group(...)
UIBuilder.blend(...)
    `
})

export const uibuilderSection = RouterView({
    childs : UIBuilder.blend(
        uibuilderTopic,
        uibuilderStatic
    )
})





