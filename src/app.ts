
// UI BUILDER DOCUMENTATION :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { MenuSection } from "./components/menu-section/menu-section";
import { initRouter } from "./modules/router/route";

import logoImg from "./assets/uibuilder-logo-vector.svg";
import { footer } from "./modules/footer/footer";

const root = UIBuilder.group({ className : "root-container"});

UIBuilder.body.render(root);

const sideBar = UIBuilder.panel({ className : "side-bar"});
export const docArea = UIBuilder.panel({ className : "doc-area"});

const layout = UIBuilder.blend(sideBar,docArea)

root.render(layout);

const docHeader = UIBuilder.group({ className : "doc-header"});

sideBar.render(docHeader);

const docLogo = UIBuilder.image({ src : logoImg , className : "doc-header-logo"});

docHeader.render(docLogo);

const docVersionlabel = UIBuilder.label({ label : "v.1.7.12 BETA" , className : "doc-version-label"})

docHeader.render(docVersionlabel);

const menuContainer = UIBuilder.group({ className : "menu-container"}) 

sideBar.render(menuContainer);

initRouter();

docArea.render(footer());

const overviewButton = UIBuilder.routeButton({ path : "/", label: "Overview" , className : "menu-button"});
const quickStartMenuButton = UIBuilder.routeButton({ path : "/quick-start", label: "Quick Start" , className : "menu-button"});
const uibuilderButton = UIBuilder.routeButton({ path : "/uibuilder", label: "UIBuilder" , className : "menu-button"});

const getStartedSection = MenuSection({
    title: "Get Started",
    childs: UIBuilder.blend(overviewButton,quickStartMenuButton,uibuilderButton)
}); 

menuContainer.render(getStartedSection);  

// TEMPLATE SEC TION : 

const electronTemplateButton = UIBuilder.routeButton({ path : "/electron-template", label: "Electron" , className : "menu-button"});
const webTemplateButton = UIBuilder.routeButton({ path : "/web-template", label: "Web" , className : "menu-button"});
const capacitorTemplateButton = UIBuilder.routeButton({ path : "/", label: "Capacitor" , className : "menu-button"});

const templateSection = MenuSection({
    title: "Template",
    childs: UIBuilder.blend(
        electronTemplateButton,
        capacitorTemplateButton,
        webTemplateButton
    )
});

menuContainer.render(templateSection);

// ELEMENT SECTION : 

const buttonElementButton = UIBuilder.routeButton({ path : "/button", label: "Button" , className : "menu-button"});
const groupElementButton = UIBuilder.routeButton({ path : "/group", label: "Group" , className : "menu-button"});
const panelElementButton = UIBuilder.routeButton({ path : "/panel", label: "Panel" , className : "menu-button"});
const textFieldElementButton = UIBuilder.routeButton({ path : "/text-field", label: "TextField" , className : "menu-button"});
const sliderElementButton = UIBuilder.routeButton({ path : "/slider", label: "Slider" , className : "menu-button"});
const slideElementButton = UIBuilder.routeButton({ path : "/label", label: "Label" , className : "menu-button"});
const imageElementButton = UIBuilder.routeButton({ path : "/image", label: "Image" , className : "menu-button"});
const iconButtonElementButton = UIBuilder.routeButton({ path : "/icon-button", label: "IconButton" , className : "menu-button"});
const routeButtonElementButton = UIBuilder.routeButton({ path : "/route-button", label: "RouteButton" , className : "menu-button"});
const iconElementButton = UIBuilder.routeButton({ path : "/icon", label: "Icon" , className : "menu-button"});
const customElementButton = UIBuilder.routeButton({ path : "/custom", label: "Custom" , className : "menu-button"});

const elementSection = MenuSection({
    title: "Element",
    childs: UIBuilder.blend(
        buttonElementButton,
        groupElementButton,
        panelElementButton,
        textFieldElementButton,
        sliderElementButton,
        slideElementButton,
        imageElementButton,
        iconElementButton,
        iconButtonElementButton,
        routeButtonElementButton,
        customElementButton
    )
});

menuContainer.render(elementSection);

// METHOD SECTION : 

const   blendMethodButton = UIBuilder.routeButton({ path : "/blend", label: "Blend" , className : "menu-button"});
const   styleMethodButton = UIBuilder.routeButton({ path : "/style", label: "Style" , className : "menu-button"});
const   eventMethodButton = UIBuilder.routeButton({ path : "/event", label: "Event" , className : "menu-button"});
const   componentMethodButton = UIBuilder.routeButton({ path : "/component", label: "Component" , className : "menu-button"});

const methodSection = MenuSection({
    title: "Method",
    childs: UIBuilder.blend(
        blendMethodButton,
        styleMethodButton,
        eventMethodButton,
        componentMethodButton
    )
});

menuContainer.render(methodSection);

// UTILITY SECTION : 

const   watcherUtilityButton = UIBuilder.routeButton({ path : "/watcher", label: "Watcher" , className : "menu-button"});
const   storeUtilityButton = UIBuilder.routeButton({ path : "/store", label: "Store" , className : "menu-button"});
const   htmlUtilityButton = UIBuilder.routeButton({ path : "/html", label: "Html" , className : "menu-button"});
const   bodyUtilityButton = UIBuilder.routeButton({ path : "/body", label: "Body" , className : "menu-button"});
const   headUtilityButton = UIBuilder.routeButton({ path : "/head", label: "Head" , className : "menu-button"});
const   routerUtilityButton = UIBuilder.routeButton({ path : "/router", label: "Router" , className : "menu-button"});

const utilitySection = MenuSection({
    title: "Utility",
    childs: UIBuilder.blend(
        watcherUtilityButton,
        storeUtilityButton,
        htmlUtilityButton,
        bodyUtilityButton,
        headUtilityButton,
        routerUtilityButton
    )
});

menuContainer.render(utilitySection);

