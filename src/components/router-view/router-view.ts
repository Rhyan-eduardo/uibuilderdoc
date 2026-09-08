
// ROUTER VIEW :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { sideBar } from "../../app";

export const RouterView = UIBuilder.component(({childs}) => {

    const menuGroup = UIBuilder.group({ className: "router-view" });

    const menuButton = UIBuilder.icon({ className : "ri-menu-line" , classList : ["menu-button-han"]});

    menuGroup.render(menuButton);
    menuGroup.render(childs);

    UIBuilder.event(menuButton).add("click",()=>{
        sideBar.style({ transform : "translateX(0px)"});
    });

    return menuGroup; 
});