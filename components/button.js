const button = document.createElement("template");
button.innerHTML = /*html*/ `
  <style>
    button {
      background-color: #1f1f29;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  </style>
  <button>
    <slot></slot>
  </button>
`;
class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(button.content.cloneNode(true));
  }
}
customElements.define("button-component", Button);
