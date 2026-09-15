
// UI BUILDER DOCUMENTATION :

import { UIBuilder } from "@limbusfoundation/uibuilder";
import { MenuSection } from "./components/menu-section/menu-section";
import { initRouter } from "./modules/router/route";

import logoImg from "./assets/uibuilder-logo-vector.svg";
import { footer } from "./components/footer/footer";

const root = UIBuilder.group({ className : "root-container"});

UIBuilder.body.render(root);

export const sideBar = UIBuilder.group({ className : "side-bar"});
export const docArea = UIBuilder.group({ className : "doc-area"});

export const routeViewStatic = UIBuilder.group({ className : "router-view-static"});

docArea.render(routeViewStatic) 

const layout = UIBuilder.blend(sideBar,docArea) 

root.render(layout);

const docHeader = UIBuilder.group({ className : "doc-header"});

sideBar.render(docHeader);

const hideSideBar = () : any => sideBar.style({ transform : "translateX(-100%)"});


const media = window.matchMedia("(max-width: 768px)");

const checkSize = () => {

    const isMobile = media.matches;

    if(isMobile) UIBuilder.event(sideBar).add("click",hideSideBar);
    else UIBuilder.event(sideBar).remove("click",hideSideBar);

    if(!isMobile) sideBar.style({ transform : "translateX(0px)"}) 


};

media.addEventListener("change", checkSize);

checkSize();

const docLogo = UIBuilder.image({ src : logoImg , className : "doc-header-logo"});

docHeader.render(docLogo);

const getTagLabel = async () : Promise<string> => {
    const response = await fetch("https://registry.npmjs.org/@limbusfoundation/uibuilder");
    const data = await response.json();
    return data;
};

const docVersionlabel = UIBuilder.label({ label : "Loading...", className : "doc-version-label"})

setTimeout( async () => {
    const tag = await getTagLabel()  as any;
    docVersionlabel.label("V " + tag["dist-tags"].latest + " BETA");
}, 2000);

docHeader.render(docVersionlabel);

const menuContainer = UIBuilder.group({ className : "menu-container"}) 

sideBar.render(menuContainer);



const overviewButton = UIBuilder.anchor({ path : "/", label: "Overview" , className : "menu-button"});
const quickStartMenuButton = UIBuilder.anchor({ path : "/quick-start", label: "Quick Start" , className : "menu-button"});
// const uibuilderButton = UIBuilder.rout   eB utton({ path : "/uibuilder", label: "UIBuilder" , className : "menu-button"});

const getStartedSection = MenuSection({
    title: "Get Started",
    childs: UIBuilder.blend(overviewButton,quickStartMenuButton)
}); 

menuContainer.render(getStartedSection);  

// TEMPLATE SEC TION : 

const electronTemplateButton = UIBuilder.anchor({ path : "/electron-template", label: "Electron" , className : "menu-button"});
const webTemplateButton = UIBuilder.anchor({ path : "/web-template", label: "Web" , className : "menu-button"});
const capacitorTemplateButton = UIBuilder.anchor({ path : "/capacitor-template", label: "Capacitor" , className : "menu-button"});

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

const buttonElementButton = UIBuilder.anchor({ path : "/button", label: "Button" , className : "menu-button"});
const groupElementButton = UIBuilder.anchor({ path : "/group", label: "Group" , className : "menu-button"});
const textFieldElementButton = UIBuilder.anchor({ path : "/field", label: "Field" , className : "menu-button"});
const sliderElementButton = UIBuilder.anchor({ path : "/slider", label: "Slider" , className : "menu-button"});
const slideElementButton = UIBuilder.anchor({ path : "/label", label: "Label" , className : "menu-button"});
const imageElementButton = UIBuilder.anchor({ path : "/image", label: "Image" , className : "menu-button"});
const anchorElementButton = UIBuilder.anchor({ path : "/anchor", label: "Anchor" , className : "menu-button"});
const iconElementButton = UIBuilder.anchor({ path : "/icon", label: "Icon" , className : "menu-button"});
const customElementButton = UIBuilder.anchor({ path : "/custom", label: "Custom" , className : "menu-button"});

const elementSection = MenuSection({
    title: "Element",
    childs: UIBuilder.blend(
        buttonElementButton,
        groupElementButton,
        textFieldElementButton,
        sliderElementButton,
        slideElementButton,
        imageElementButton,
        iconElementButton,
        anchorElementButton,
        customElementButton
    )
});

menuContainer.render(elementSection);

// PROPERTY SECTION : 

const   ElementProperty = UIBuilder.anchor({ path : "/element-property", label: "Element" , className : "menu-button"});

const propertyMenu = MenuSection({
    title: "Property",
    childs: UIBuilder.blend( 
        ElementProperty
    )
});

menuContainer.render(propertyMenu); 

// METHOD SECTION : 

const   blendMethodButton = UIBuilder.anchor({ path : "/blend", label: "Blend" , className : "menu-button"});
const   styleMethodButton = UIBuilder.anchor({ path : "/style", label: "Style" , className : "menu-button"});
const   eventMethodButton = UIBuilder.anchor({ path : "/event", label: "Event" , className : "menu-button"});
const   componentMethodButton = UIBuilder.anchor({ path : "/component", label: "Component" , className : "menu-button"});
const   switcherMethodButton = UIBuilder.anchor({ path : "/switcher", label: "Switcher" , className : "menu-button"});


const methodSection = MenuSection({
    title: "Method",
    childs: UIBuilder.blend(
        blendMethodButton,
        styleMethodButton,
        eventMethodButton,
        componentMethodButton,
        switcherMethodButton
    )
});

menuContainer.render(methodSection);

// UTILITY SECTION : 

const   watcherUtilityButton = UIBuilder.anchor({ path : "/watcher", label: "Watcher" , className : "menu-button"});
const   storeUtilityButton = UIBuilder.anchor({ path : "/store", label: "Store" , className : "menu-button"});
const   htmlUtilityButton = UIBuilder.anchor({ path : "/html", label: "Html" , className : "menu-button"});
const   bodyUtilityButton = UIBuilder.anchor({ path : "/body", label: "Body" , className : "menu-button"});
const   headUtilityButton = UIBuilder.anchor({ path : "/head", label: "Head" , className : "menu-button"});
const   routerUtilityButton = UIBuilder.anchor({ path : "/router", label: "Router" , className : "menu-button"});

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

initRouter();  
 
docArea.render(footer());
