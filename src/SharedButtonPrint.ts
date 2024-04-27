import AbstractShareButton from "./AbstractSharedButton";
import EventHandler from "./EventHandler";

class SharedButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, className: string) {
    super(eventHandler, className);
  }

  createAction(): any {
    return () => window.print();
  }
}

export default SharedButtonPrint;
