// Create HTML Template
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>
        .navigation-header {
            padding: 15px 15px 0 10px;
            margin-right: 20%;
            display: flex;
            align-items: center;
            background: #6699CC;
            color: #00386D;
            font-family: "Times New Roman", Times, serif;
            box-sizing: border-box;
        }   
        .header_button {
            height: 40px;
            width: 140px;
            background: #676767;
            font-size: 15px;
            text-align: center;
            color: #d3d3d3;
            border-radius: 12px;
        }
        .navigation-items {
            display: flex;
            gap: 15px;
        }

        .logo-container {
            width: 30%;
        }
    </style>
    <header class="navigation-header">
                 <div class="logo-container">
                    <img src="../images/logo.png" alt="Logo with TI inside">
                </div>

                <div class="navigation-items">
                     <a href="../index.html">
                        <button class="header_button">Home</button>
                    </a>

                    <a href="../views/lodging.html">
                        <button class="header_button">Lodging</button>
                    </a>

                    <a href="../views/transportation.html">
                        <button class="header_button">Transportation</button>
                    </a>

                    <a href="../views/dining.html">
                        <button class="header_button">Dining</button>
                    </a>

                    <a href="../views/activities.html">
                        <button class="header_button">Activities</button>
                    </a>

                    <a href="../views/faq.html">
                        <button class="header_button">FAQ</button>
                    </a>
                </div>
            </header>        
        `;

class Header extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
