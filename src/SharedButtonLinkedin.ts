import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

class SharedButtonLinkedin extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/share?url=${this.url}`;
  }
}

export default SharedButtonLinkedin;
