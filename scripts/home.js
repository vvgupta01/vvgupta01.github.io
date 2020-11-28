document.oncontextmenu = new Function("return false;");

let index = 0;
let timer;
$(function() {
    let links = $(".link");

    let home = $("#home-container");
    let featured = $("#featured-container");
    let blog = $("#blog-container");
    let about = $("#about-container");

    links.on("click", function() {
        let current = $(".link.active")[0];
        $(current).removeClass("active");
        $(this).addClass("active");

        if (current.innerText === "HOME") {
            home.attr("class", "fadeOut-backwards");
            featured.attr("class", "fadeOut-forwards");
        } else if (current.innerText === "BLOG") {
            blog.attr("class", "fadeOut-backwards");
        } else if (current.innerText === "ABOUT ME") {
            about.attr("class", "fadeOut-backwards");
        }

        if (this.innerText === "HOME") {
            timer = setTimeout(update, 8000);
            setTimeout(function() {
                home.attr("class", "fadeIn-forwards");
                featured.attr("class", "fadeIn-backwards");
            }, 500);
        } else if (this.innerText === "BLOG") {
            clearTimeout(timer);
            setTimeout(function() {
                blog.attr("class", "fadeIn-forwards");
            }, 500);
        } else if (this.innerText === "ABOUT ME") {
            clearTimeout(timer);
            setTimeout(function() {
                about.attr("class", "fadeIn-forwards");
                personal.attr("class", "fadeIn-backwards");
            }, 500);
        }
    });

    timer = setTimeout(update, 12000);
    let buttons = $(".feature-button");
    buttons.eq(0).on("click", function() {
        setIndex(index - 1);
    });

    buttons.eq(1).on("click", function() {
        setIndex(index + 1);
    });

    let items = $(".featured-item");
    let barWidth = 100 / items.length;
    let progressBar = $("#feature-bar");
    items.eq(index).addClass("active");
    $("#items-max").text("/0" + items.length);
    progressBar.css("width", barWidth + "%");

    function update() {
        setIndex(index + 1);
    }

    function setIndex(newIndex) {
        items.eq(index).removeClass("active");

        index = newIndex;
        if (index > items.length - 1) {
            index = 0;
        } else if (index < 0) {
            index = items.length - 1;
        }

        progressBar.css("left", index * barWidth + "%");
        $("#featured-container #current-item").text("0" + (index + 1));
        items.eq(index).addClass("active");

        clearTimeout(timer);
        timer = setTimeout(update, 8000);
    }
});