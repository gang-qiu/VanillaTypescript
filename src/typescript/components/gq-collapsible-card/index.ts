import './styles.css';

class GqCollapsibleCard extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('gq-collapsible-card') as HTMLTemplateElement | null;
    if (template?.content) {
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('gq-collapsible-card', GqCollapsibleCard);
