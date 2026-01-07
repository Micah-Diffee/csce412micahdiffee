function load_style() {
    var page_style = localStorage.getItem("page_stylesheet_name");

    if (page_style === null) {
        page_style = "style.css";
    }

    document.getElementById('page_style').setAttribute("href", page_style);
}

function change_style() {

    var page_style = localStorage.getItem("page_stylesheet_name");

    if (page_style === "style.css") {
        localStorage.setItem("page_stylesheet_name", "style2.css");
    } else {
        localStorage.setItem("page_stylesheet_name", "style.css");
    }

    load_style();
}

load_style();