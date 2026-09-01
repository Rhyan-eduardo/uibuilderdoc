
import { UIBuilder } from "@limbusfoundation/uibuilder";

export const MenuSection = UIBuilder.component(({ title, childs }) => {

    const menuGroup = UIBuilder.group({ className: "menu-group" });

    const menuTitle = UIBuilder.label({
        label: title,
        className: "menu-section-title"
    });

    menuGroup.render(menuTitle);
    menuGroup.render(childs);

    return menuGroup;
});