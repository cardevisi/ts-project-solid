import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

class SharedButtonTwitter extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://twitter.com/intent/tweet?url=${this.url}`;
  }
}

export default SharedButtonTwitter;
