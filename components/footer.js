// Create HTML Template
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        .footer {
            background: #6699CC;
            color: #00386D;
            font-family: "Times New Roman", Times, serif;
            font-size: 15px ;
            text-align:center;
            margin-bottom: 30px;
        }
    </style>
    <footer class="footer">
        <div>
            <p>&copy; 2024 Taniti Island Tourism</p>
            <a href="site-map.html">Site Map</a> |
            <a href="privacy-policy.html">Privacy Policy</a> |
            <a href="contact.html">Contact</a> |
            <a href="term-service.html">Terms of Service</a>
            <p>Images Provided By https://www.gettyimages.com/</p>
        </div>
    </footer>
`;

class Footer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);


