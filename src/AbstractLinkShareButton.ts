import AbstractSharedButton from "./AbstractSharedButton";
import EventHandler from "./EventHandler";

abstract class AbstractLinkSharedButton extends AbstractSharedButton {
  url: string;
  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className);
    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}

export default AbstractLinkSharedButton;
