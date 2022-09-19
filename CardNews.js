class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:"open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
   
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/photo-default.jpg";
        newsImage.alt = "Foto da noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                -webkit-box-shadow: 3px 1px 16px 9px rgba(0,0,0,0.61); 
                box-shadow: 3px 1px 16px 9px rgba(0,0,0,0.61);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card_left > p{
                color: rgb(59, 57, 57);
            }
            
            .card_left > span{
                font-weight: 400;
            }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);