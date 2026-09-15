
// ROUTER : 

import { overviewRoute } from "../../modules/section/overview-section";
import { quickStartSection } from "../../modules/section/quick-start-section";
import { uibuilderSection } from "../../modules/section/uibuilder-section";
import { buttonSection } from "../../modules/section/button-section";
import { groupSection } from "../../modules/section/group-section";
import { fieldSection } from "../section/field-section";
import { sliderSection } from "../../modules/section/slider-section";
import { labelSection } from "../../modules/section/label-section";
import { imageSection } from "../../modules/section/image-section";
import { iconSection } from "../../modules/section/icon-section";
import { anchorSection } from "../section/anchor-section";
import { customSection } from "../../modules/section/custom-section";
import { blendSection } from "../../modules/section/blend-section";
import { styleSection } from "../../modules/section/style-section";
import { eventSection } from "../../modules/section/event-section";
import { componentSection } from "../../modules/section/component-section";
import { watcherSection } from "../../modules/section/watcher-section";
import { storeSection } from "../../modules/section/store-section";
import { htmlSection } from "../../modules/section/html-section";
import { bodySection } from "../../modules/section/body-section";
import { headSection } from "../../modules/section/head-section";
import { routerSection } from "../../modules/section/router-section";
import { electronTemplateSection } from "../../modules/section/electron-section";
import { webTemplateSection } from "../../modules/section/web-section";
import { UIBuilder } from "@limbusfoundation/uibuilder"; 
import { docArea } from "../../app";
import { capacitorTemplateSection } from "../section/capacitor-section";
import { switcherSection } from "../section/switcher-section";
import { elementPropertySection } from "../section/element-property-section";

export const initRouter = () : void => {

    UIBuilder.router.root(docArea)
    UIBuilder.router.route("/", overviewRoute);
    UIBuilder.router.route("/quick-start", quickStartSection);
    UIBuilder.router.route("/uibuilder", uibuilderSection);
    UIBuilder.router.route("/button", buttonSection);
    UIBuilder.router.route("/group", groupSection);
    UIBuilder.router.route("/field", fieldSection);
    UIBuilder.router.route("/slider", sliderSection);
    UIBuilder.router.route("/label", labelSection);
    UIBuilder.router.route("/image", imageSection);
    UIBuilder.router.route("/icon", iconSection);
    UIBuilder.router.route("/anchor", anchorSection);
    UIBuilder.router.route("/custom", customSection);
    UIBuilder.router.route("/blend", blendSection);
    UIBuilder.router.route("/style", styleSection);
    UIBuilder.router.route("/event", eventSection);
    UIBuilder.router.route("/component", componentSection);
    UIBuilder.router.route("/watcher", watcherSection);
    UIBuilder.router.route("/store", storeSection);
    UIBuilder.router.route("/html", htmlSection);
    UIBuilder.router.route("/body", bodySection);
    UIBuilder.router.route("/head", headSection);
    UIBuilder.router.route("/router", routerSection);
    UIBuilder.router.route("/electron-template", electronTemplateSection);
    UIBuilder.router.route("/web-template", webTemplateSection);
    UIBuilder.router.route("/uibuilder", uibuilderSection);
    UIBuilder.router.route("/capacitor-template", capacitorTemplateSection);
    UIBuilder.router.route("/switcher", switcherSection);
    UIBuilder.router.route("/element-property", elementPropertySection);
    UIBuilder.router.init();

};

const updateActiveAnchor = (path: string) => {

    document.querySelectorAll("a").forEach((element) => {

        const href = element.getAttribute("href");

        element.style.background = "";
        element.style.color = "";

        if (href === path) {
            element.style.background = "#032230";
            element.style.color = "#ffffff";
        };
    });
};

UIBuilder.router.listenAllRoute((route)=> updateActiveAnchor(route)); 

 