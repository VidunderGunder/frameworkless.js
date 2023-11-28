class WebComponent extends HTMLElement {
  constructor(templateContent: string) {
    super();
    const template = document.createElement("template");
    template.innerHTML = templateContent;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}
