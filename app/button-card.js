const element = document.createElement("template");
element.innerHTML = /*html*/ `
  <app-card>
    <app-button>
      <slot></slot>
    </app-button>
  </app-card>
`;
class Component extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(element.content.cloneNode(true));
  }
}
customElements.define("app-button-card", Component);
