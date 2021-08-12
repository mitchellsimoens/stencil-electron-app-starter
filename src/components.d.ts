/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AboutPage {
    }
    interface AppHeader {
    }
    interface AppRoot {
    }
    interface HomePage {
    }
    interface NotFoundPage {
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLNotFoundPageElement extends Components.NotFoundPage, HTMLStencilElement {
    }
    var HTMLNotFoundPageElement: {
        prototype: HTMLNotFoundPageElement;
        new (): HTMLNotFoundPageElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "app-header": HTMLAppHeaderElement;
        "app-root": HTMLAppRootElement;
        "home-page": HTMLHomePageElement;
        "not-found-page": HTMLNotFoundPageElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface AppHeader {
    }
    interface AppRoot {
    }
    interface HomePage {
    }
    interface NotFoundPage {
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "app-header": AppHeader;
        "app-root": AppRoot;
        "home-page": HomePage;
        "not-found-page": NotFoundPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "not-found-page": LocalJSX.NotFoundPage & JSXBase.HTMLAttributes<HTMLNotFoundPageElement>;
        }
    }
}
