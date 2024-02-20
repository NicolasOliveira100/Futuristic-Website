//Expandir o header com o botão verde

function greenbtn() {
    const div = document.getElementById("fh");
    div.classList.add("expanded");
    console.log("alo nick");
}

//Retrair  o Header com o botão vermelho

function redbtn() {
    const div = document.getElementById("fh");
    div.classList.add("contract");
}

// volta a barra para defalt

function yellowbtn() {
    const div = document.getElementById("fh");
    div.classList.remove("contract","expanded");
    console.log("funcionou")
}


// if para botar o botão verde pra fununciar
