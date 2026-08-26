
// COPYRIGHT (C) 2026 - YYYY AUTHOR_NAME 
// THIS FILE IS PART OF : PROJECT_NAME
// LINCESE - LICENSE_NAME

// APP ( MAIN RENDERER ) : 

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { counter } from "./components/counter/counter";
import logoImg from "./assets/uibuilder-logo-vector.svg";

const datailContainer = UIBuilder.group({ className : "detail-container"});

const logo = UIBuilder.image({ src : logoImg , className : "logo"})

const title = UIBuilder.label({ label : "A vanilla-based UI library" , className : "title"})
const subTitle = UIBuilder.label({ label : "Create user interfaces for web-based applications." , className : "sub-title"})

datailContainer.render(logo);
datailContainer.render(title);
datailContainer.render(subTitle); 
datailContainer.render(counter()); 

UIBuilder.body.render(datailContainer); 


// UIBuilder.watch(count, (value) => {
//     label.label(String(value));
// });

// const count = UIBuilder.state(0);

// UIBuilder.watch(count, (value) => {
//     label.label(String(value));
// });

// count.value++;