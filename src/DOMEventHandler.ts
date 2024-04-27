import EventHandler from "./EventHandler";

class DOMEventHandler implements EventHandler {
  addEventListenerToElement(className: string, event: string, fn: any) {
    const element: any = document.querySelector(className);
    element.addEventListener(event, fn);
  }
}

export default DOMEventHandler;
