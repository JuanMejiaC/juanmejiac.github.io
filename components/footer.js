class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <div class="container-fluid">
        <footer class="text-center text-lg-start footer-custom">
            <!-- Copyright -->
            <div class="text-center p-3 copyright">
                2021
                <a class="text-light"> Juan Mejia</a>
            </div>
            <!-- Copyright -->
        </footer>
    </div>
      `;
    }

}

customElements.define("footer-component", Footer);