class Button extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement("template");
    element.innerHTML = /*html*/ `
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
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(element.content.cloneNode(true));
  }
}

class Card extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement("template");
    element.innerHTML = /*html*/ `
      <style>
        .card {
          background-color: #f1f1f1;
          border: none;
          padding: 15px 32px;
          text-decoration: none;
          font-size: 16px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
        }
      </style>
      <div class="card">
        <slot></slot>
      </div>
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(element.content.cloneNode(true));
  }
}

class CardButton extends HTMLElement {
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

customElements.define("app-button", Button);
customElements.define("app-card", Card);
customElements.define("app-button-card", CardButton);
