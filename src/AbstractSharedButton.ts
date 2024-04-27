import EventHandler from "./EventHandler";

abstract class AbstractSharedButton {
  eventHandler: EventHandler;
  className: string;

  constructor(eventHandler: EventHandler, className: string) {
    this.className = className;
    this.eventHandler = eventHandler;
  }

  abstract createAction(): string;

  public bind() {
    const action = this.createAction();

    this.eventHandler.addEventListenerToElement(
      this.className,
      "click",
      action
    );
  }
}

export default AbstractSharedButton;
