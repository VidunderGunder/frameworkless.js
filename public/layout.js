customElements.define(
  "web-layout",
  class extends HTMLElement {
    constructor() {
      super();
      let element = document.createElement("template");
      element.innerHTML = /*html*/ `
        <style>
          nav, main, footer {
            font-family: sans-serif;
          }
          nav {
            top: 0;
            left: 0;
            right: 0;
            position: fixed;
            width: 100%;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            box-shadow: 0 0 0 0.25rem rgba(0,0,0,0.05);
          }
          main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: center;
          }
          footer {
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            box-shadow: 0 0 0 0.25rem rgba(0,0,0,0.05);
          }
        </style>
        <nav>
          <a href="/">Home</a>
          <a href="/sub/">Subpage Index</a>
          <a href="/sub/example">Subpage</a>
          <a href="/404">404</a>
          <a href="/some/link">Doesn't Exists</a>
          <a href="/swagger/">API (Swagger)</a>
        </nav>
        <main>
          <slot></slot>
        </main>
        <footer>Footer</footer>
      `;

      const shadow = this.attachShadow({ mode: "open" });
      shadow.append(element.content.cloneNode(true));
    }
  }
);
