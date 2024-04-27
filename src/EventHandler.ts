interface EventHandler {
  addEventListenerToElement(className: string, event: string, fn: any): void;
}

export default EventHandler;
