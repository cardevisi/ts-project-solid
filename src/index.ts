import SharedButtonFacebook from "./SharedButtonFacebook";
import SharedButtonLinkedin from "./SharedButtonLinkedin";
import SharedButtonTwitter from "./SharedButtonTwitter";
import SharedButtonPrint from "./SharedButtonPrint";
import AbstractSharedButton from "./AbstractSharedButton";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";

//const eventHandler = new DOMEventHandler();
const eventHandler = new MockEventHandler();

const linkedin: AbstractSharedButton = new SharedButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "https://www.linkedin.com/in/carlosoliveira/"
);
linkedin.bind();

const twitter: AbstractSharedButton = new SharedButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "https://twitter.com/carlosoliveira"
);
twitter.bind();

const facebook: AbstractSharedButton = new SharedButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "https://www.facebook.com/carlosoliveira"
);
facebook.bind();

const print: AbstractSharedButton = new SharedButtonPrint(
  eventHandler,
  ".btn-print"
);
print.bind();

console.log("this script was loaded");
