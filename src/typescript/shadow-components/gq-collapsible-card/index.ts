import templateHtml from './template.html';

class GqCollapsibleCard extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template')
    template.innerHTML = templateHtml;

    if (template?.content) {
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
}

customElements.define('gq-collapsible-card', GqCollapsibleCard);
