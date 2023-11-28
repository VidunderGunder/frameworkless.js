const element = document.createElement("template");
element.innerHTML = /*html*/ `
  <head>
    <slot></slot>
  </head>
`;
class Component extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(element.content.cloneNode(true));
  }
}
customElements.define("head", Component);
