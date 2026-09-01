
// ROUTER VIEW :

import { UIBuilder } from "@limbusfoundation/uibuilder";

export const RouterView = UIBuilder.component(({childs}, self) => {

    const menuGroup = UIBuilder.group({ className: "router-view" });

    menuGroup.render(childs);

    return menuGroup;
});