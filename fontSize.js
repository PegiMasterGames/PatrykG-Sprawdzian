function changeFontSize(type){
    
    let ids =["#h", "#p", "#h2", "#p2", "#h3", "#p3"];

    ids.forEach(id => {
        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");

        fontSize = parseFloat(fontSize);

        if(type === "increase"){
            el.style.fontSize = (fontSize + 5) + "px";
        }else{
            el.style.fontSize = (fontSize - 5) + "px";
        }
    });
};