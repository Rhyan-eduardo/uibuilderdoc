
// ROUTER VIEW :

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const RouterView = UIBuilder.component(({childs}) => {

    const menuGroup = UIBuilder.group({ className: "router-view" });

    menuGroup.render(childs);

    return menuGroup;
});