class Titulodinamico extends HTMLElement{
     constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"})

        //base componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar componente
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

     }
}

customElements.define("titulo-dinamico", Titulodinamico)