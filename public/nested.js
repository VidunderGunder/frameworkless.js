customElements.define(
  "app-nested",
  class extends HTMLElement {
    constructor() {
      super();
      const element = document.createElement("template");
      element.innerHTML = /*html*/ `
      <app-card>
        <app-button>
          <slot></slot>
        </app-button>
      </app-card>
    `;
      const shadow = this.attachShadow({ mode: "open" });
      shadow.append(element.content.cloneNode(true));
    }
  }
);
