function navHover(id, color) {
    let navLink = document.getElementById(id);
    let navLinkLower = document.getElementById(id + "-lower");
    if (id == "title") {
        let navLinkLowest = document.getElementById(id + "-lowest");
    }
    navLink.addEventListener("mouseenter", function(event) {
        event.target.style.color = color;
        event.target.style.opacity = 0.9;
        navLinkLower.style.opacity = 1;
        if (id == "title") {
            let navLinkLowest = document.getElementById(id + "-lowest");
            navLinkLowest.style.opacity = 1;
        }
    })
    
    navLink.addEventListener("mouseleave", function(event) {
        event.target.style.color = "black";
        navLinkLower.style.opacity = 0;
        if (id == "title") {
            let navLinkLowest = document.getElementById(id + "-lowest");
            navLinkLowest.style.opacity = 0;
        }
    })
}

navHover('carto',  "#ff48b0");
navHover('writing', '#0078bf');
navHover('wood', '#0078bf');
