
// FOOTER [FOOTER] : 

import { UIBuilder } from "@limbusfoundation/uibuilder";

import uibuilderFooterLogo from "../../assets/uibuilder-footer-logo.svg";

export const footer = UIBuilder.component(()=>{

    const footerContainer = UIBuilder.group({ className : "footer-container"});

    const footerLogo = UIBuilder.image({ src : uibuilderFooterLogo , className : "footer-logo"});

    const footerCopy = UIBuilder.label({ label : "© 2026 Limbus Foundation OSO & Community" , className : "footer-copy"});

    const madeInlabel = UIBuilder.label({ label : "Made With UIBuilder - Self-Hosted" , className : "footer-made-in-label"})

    const licenseLabel = UIBuilder.label({ label : "MIT License" , className : "footer-license-label"})

    const footerLink = UIBuilder.label({ className : "footer-link"});

    const footerGithubLink = UIBuilder.custom({ tag : "a" , attribute : { target : "_blank" , href : "https://github.com/Limbus-Foundation/uibuilder"}})
    const footerNPMLink = UIBuilder.custom({ tag : "a" , attribute : { target : "_blank" , href : "https://www.npmjs.com/package/@limbusfoundation/uibuilder"}})
    const footerDocShowcaseLink = UIBuilder.custom({ tag : "a" , attribute : { target : "_blank" , href : "https://github.com/Rhyan-eduardo/uibuilderdoc"}})

    footerGithubLink.label("Github");
    footerNPMLink.label("NPM");
    footerDocShowcaseLink.label("DOC Code - Showcase");

    footerLink.render(UIBuilder.blend(footerGithubLink,footerNPMLink,footerDocShowcaseLink))

    footerContainer.render(UIBuilder.blend(footerLogo,footerCopy,madeInlabel,licenseLabel,footerLink));

    return footerContainer
});