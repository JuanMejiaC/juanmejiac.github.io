class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let index = "", repos = "";
    if(document.getElementById("repos")) {
      repos = "active"
    }else{ index = "active"}
    this.innerHTML = `
    <div class=k"container-fluid" id="custom-navbar">
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
        
        <a class="navbar-brand navbar-brand-custom" href="index.html"><img src="assets/logo.png" width="30" height="30" alt="">
        Juan Personal GitHub Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ${index}">
                    <a class="nav-link" href="index.html">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item ${repos}">
                    <a class="nav-link" href="repos.html">Repositories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="mailto:mejiacortez25@hotmail.com">Open Email</a>
                </li>
            </ul>
        </div>
        </nav>
      <div>
    `;
  }

}

customElements.define("header-component", Header);