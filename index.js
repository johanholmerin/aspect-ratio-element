export default class AspectRatio extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }

        .size {
          padding-top: calc(100% / (var(--aspect-ratio)));
        }

        .content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          contain: layout size;
        }

        ::slotted(*) {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="size"></div>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('aspect-ratio', AspectRatio);
