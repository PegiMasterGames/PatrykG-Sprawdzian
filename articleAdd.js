const element = document.getElementById("button");
element.addEventListener("click", CreateArticle);

function CreateArticle() {
    const articleText = document.createElement('div');
    articleText.className = "article";
    articleText.innerHTML += "<article> <h1>KLIK :)</h1> <p> Widzę, że mnie kliknąłeś :). </p></article>";
    document.getElementById("article-content").appendChild(articleText);
}

