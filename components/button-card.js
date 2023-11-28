const buttonCard = document.createElement("template");
buttonCard.innerHTML = /*html*/ `
  <card-component>
    <button-component>
      <slot></slot>
    </button-component>
  </card-component>
`;
class ButtonCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(buttonCard.content.cloneNode(true));
  }
}
customElements.define("button-card", ButtonCard);
