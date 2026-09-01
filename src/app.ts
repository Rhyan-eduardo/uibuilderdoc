
// UI BUILDER DOCUMENTATION :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { MenuSection } from "./components/menu-section/menu-section";
import logoImg from "./assets/uibuilder-logo-vector.svg";
import { overviewRoute } from "./modules/section/overview-section";
import { quickStartSection } from "./modules/section/quick-start-section";


const root = UIBuilder.group({ className : "root-container"});

UIBuilder.body.render(root);

const sideBar = UIBuilder.panel({ className : "side-bar"});
const docArea = UIBuilder.panel({ className : "doc-area"});

const layout = UIBuilder.blend(sideBar,docArea)

root.render(layout);

const docHeader = UIBuilder.group({ className : "doc-header"});

sideBar.render(docHeader);

const docLogo = UIBuilder.image({ src : logoImg , className : "doc-header-logo"});

docHeader.render(docLogo);

const docVersionlabel = UIBuilder.label({ label : "v.1.7.1 BETA" , className : "doc-version-label"})

docHeader.render(docVersionlabel);

const menuContainer = UIBuilder.group({ className : "menu-container"})

sideBar.render(menuContainer);

// GET STARTED SECTION : 

UIBuilder.router.root(docArea)
UIBuilder.router.route("/", overviewRoute);
UIBuilder.router.route("/quick-start", quickStartSection);  
UIBuilder.router.init();

const overviewButton = UIBuilder.routeButton({ path : "/", label: "Overview" , className : "menu-button"});
const quickStartMenuButton = UIBuilder.routeButton({ path : "/quick-start", label: "Quick Start" , className : "menu-button"});
const uibuilderButton = UIBuilder.routeButton({ path : "/", label: "UIBuilder" , className : "menu-button"});

const getStartedSection = MenuSection({
    title: "Get Started",
    childs: UIBuilder.blend(overviewButton,quickStartMenuButton,uibuilderButton)
});

menuContainer.render(getStartedSection);

// TEMPLATE SECTION : 

const electronTemplateButton = UIBuilder.routeButton({ path : "/", label: "Electron" , className : "menu-button"});
const webTemplateButton = UIBuilder.routeButton({ path : "/", label: "Web" , className : "menu-button"});
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

const buttonElementButton = UIBuilder.routeButton({ path : "/", label: "Button" , className : "menu-button"});
const groupElementButton = UIBuilder.routeButton({ path : "/", label: "Group" , className : "menu-button"});
const panelElementButton = UIBuilder.routeButton({ path : "/", label: "Panel" , className : "menu-button"});
const textFieldElementButton = UIBuilder.routeButton({ path : "/", label: "TextField" , className : "menu-button"});
const sliderElementButton = UIBuilder.routeButton({ path : "/", label: "Slider" , className : "menu-button"});
const slideElementButton = UIBuilder.routeButton({ path : "/", label: "Label" , className : "menu-button"});
const imageElementButton = UIBuilder.routeButton({ path : "/", label: "Image" , className : "menu-button"});
const iconButtonElementButton = UIBuilder.routeButton({ path : "/", label: "IconButton" , className : "menu-button"});
const routeButtonElementButton = UIBuilder.routeButton({ path : "/", label: "RouteButton" , className : "menu-button"});
const iconElementButton = UIBuilder.routeButton({ path : "/", label: "Icon" , className : "menu-button"});
const customElementButton = UIBuilder.routeButton({ path : "/", label: "Custom" , className : "menu-button"});

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

const   blendMethodButton = UIBuilder.routeButton({ path : "/", label: "Blend" , className : "menu-button"});
const   styleMethodButton = UIBuilder.routeButton({ path : "/", label: "Style" , className : "menu-button"});
const   eventMethodButton = UIBuilder.routeButton({ path : "/", label: "Event" , className : "menu-button"});
const   componentMethodButton = UIBuilder.routeButton({ path : "/", label: "Component" , className : "menu-button"});

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

const   watcherUtilityButton = UIBuilder.routeButton({ path : "/", label: "Watcher" , className : "menu-button"});
const   storeUtilityButton = UIBuilder.routeButton({ path : "/", label: "Store" , className : "menu-button"});
const   htmlUtilityButton = UIBuilder.routeButton({ path : "/", label: "Html" , className : "menu-button"});
const   bodyUtilityButton = UIBuilder.routeButton({ path : "/", label: "Body" , className : "menu-button"});
const   headUtilityButton = UIBuilder.routeButton({ path : "/", label: "Head" , className : "menu-button"});
const   routerUtilityButton = UIBuilder.routeButton({ path : "/", label: "Router" , className : "menu-button"});

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

