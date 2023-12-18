customElements.define(
  "web-card",
  class extends HTMLElement {
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
);
