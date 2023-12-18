customElements.define(
  "web-nested",
  class extends HTMLElement {
    constructor() {
      super();
      const element = document.createElement("template");
      element.innerHTML = /*html*/ `
        <web-card>
          <web-button>
            <slot></slot>
          </web-button>
        </web-card>
      `;
      const shadow = this.attachShadow({ mode: "open" });
      shadow.append(element.content.cloneNode(true));
    }
  }
);
