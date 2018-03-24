import TwigBase from 'twig-components/twig-base';

export default class TceHero extends TwigBase {
  static get observedAttributes() {
    return ['src', 'text', 'subtext', 'callout-text', 'callout-href', 'align'];
  }

  renderTemplate(variables) {
    return require('./tce-hero.twig')(variables);
  }
}

if (!window.customElements.get('tce-hero')) {
  window.customElements.define('tce-hero', TceHero);
}
