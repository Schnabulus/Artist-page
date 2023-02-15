    const images = slideshowImages;

    const section = document.getElementById("werke-content");

    images.map(img => {
        const article = document.createElement("article");
        const image = document.createElement("img");
        image.setAttribute("src", img.src );
        image.setAttribute("alt", img.name);
        const title = document.createElement("p");
        title.innerHTML = img.name;

        article.appendChild(image);
        article.appendChild(title);
        section.appendChild(article);  
    })