
// STORE SECTION [SECTION] :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { RouterView } from "../../components/router-view/router-view";
import { Topic } from "../../components/topic/topic";
import { CodeBlock } from "../../components/code-block/code-block";

const storeTopic = Topic({
    title: "Store",
    content: "Create a shared state container using UIBuilder.store. The UIStore organizes application data into named sectors."
});

const storeCode = await CodeBlock({
    code: `const store = UIBuilder.store;

store.sector("user");

store.set("user", "name", "John");
store.set("user", "age", 18);`
});

const sectorTopic = Topic({
    title: "Sector",
    content: "Create a named sector in the UIStore to organize related data."
});

const sectorCode = await CodeBlock({
    code: `UIBuilder.store.sector("user");`
});

const setTopic = Topic({
    title: "Set",
    content: "Create or update a value inside a sector. If the key already exists, its value is updated. Otherwise, a new value is created."
});

const setCode = await CodeBlock({
    code: `const store = UIBuilder.store;

store.sector("user");

store.set("user", "name", "John");
store.set("user", "age", 18);

store.set("user", "age", 19);`
});

const getTopic = Topic({
    title: "Get",
    content: "Retrieve a value from a sector by its key. The get method supports a generic type to define the expected value type."
});

const getCode = await CodeBlock({
    code: `const store = UIBuilder.store;

store.sector("user");

store.set("user", "age", 18);

const age = store.get<number>("user", "age");

console.log(age);`
});

const listenSectorTopic = Topic({
    title: "Listen Sector",
    content: "Listen for changes inside a specific sector. The callback receives the sector, changed key, new value, and a compare function for checking the current change."
});

const listenSectorCode = await CodeBlock({
    code: `const store = UIBuilder.store;

store.sector("user");

store.listenSector("user", (sector, key, value, compare) => {

    if(compare("age", 18)) {
        console.log("User age is 18");
    }

});

store.set("user", "age", 18);`
});

const compareTopic = Topic({
    title: "Compare",
    content: "Compare the changed key and value with the current change. The value is optional, allowing you to check only whether a specific key changed."
});

const compareCode = await CodeBlock({
    code: `store.listenSector("user", (sector, key, value, compare) => {

    if(compare("age", 18)) {
        console.log("Age changed to 18");
    }

    if(compare("name")) {
        console.log("Name changed");
    }

});`
});

export const storeSection = RouterView({
    childs: UIBuilder.blend(
        storeTopic,
        storeCode,
        sectorTopic,
        sectorCode,
        setTopic,
        setCode,
        getTopic,
        getCode,
        listenSectorTopic,
        listenSectorCode,
        compareTopic,
        compareCode
    )
});
