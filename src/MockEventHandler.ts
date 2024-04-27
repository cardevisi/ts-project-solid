import EventHandler from "./EventHandler";

class MockEventHandler implements EventHandler {
  addEventListenerToElement(className: string, event: string, fn: any) {
    console.log(className, event, fn);
  }
}

export default MockEventHandler;
