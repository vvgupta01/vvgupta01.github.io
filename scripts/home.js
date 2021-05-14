document.oncontextmenu = new Function("return false;");

let index = 0;
let timer;

$(function() {
    const home = $("#home-container");
    const featured = $("#feature-container");
    const about = $("#about-container")
    const quote = $("#quote-container");

    const logo = $("#logo");
    const featureLinks = $(".featured-item a");
    const featureArrows = $(".featured-item i");
    const resumeLink = $("#resume a");

    const items = $(".featured-item");
    const blocks = $(".progress-block");

    const URL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(URL, function(data) {
        $("#quote-text").text("\"" + data.quoteText + "\"");
        $("#quote-author").text(data.quoteAuthor);
    });

    setTimeout(function() {
        $("#greeting").removeClass("fade-left");
    }, 1000);

    setTimeout(function() {
        $("#intro").removeClass("fade-left");
    }, 2500);

    setTimeout(function() {
        $("#link-container").removeClass("fade-left");
        logo.removeClass("fade-left");
        $("#footer").removeClass("fade-left");

        featured.removeClass("fade-right");
        $("#navbar").removeClass("fade-right");
        $("#side-container").removeClass("fade-right");
    }, 4000);

    let running = false;

    $(".link").on("click", function() {
        if (!running) {
            running = true;

            let current = $(".link.active")[0];
            $(current).removeClass("active");
            $(this).addClass("active");

            if (current.innerText === "HOME") {
                home.toggleClass("fade-left");
                featured.toggleClass("fade-right");
            } else if (current.innerText === "ABOUT ME") {
                about.toggleClass("fade-left");
                quote.toggleClass("fade-right");
            }

            if (this.innerText === "HOME") {
                timer = setTimeout(update, 10000);
                setTimeout(function() {
                    home.toggleClass("fade-left");
                    featured.toggleClass("fade-right");
                    running = false;
                }, 500);
            } else if (this.innerText === "ABOUT ME") {
                clearTimeout(timer);
                setTimeout(function() {
                    about.toggleClass("fade-left");
                    quote.toggleClass("fade-right");
                    running = false;
                }, 500);
            }
        }
    });

    featureLinks.on("mouseenter", function() {
        let idx = Array.prototype.indexOf.call(featureLinks, this);
        featureArrows.eq(idx).removeClass("short-fade");
    }).on("mouseleave", function() {
        featureArrows.addClass("short-fade");
    });

    resumeLink.on("mouseenter", function() {
        $("#resume i").removeClass("short-fade");
    }).on("mouseleave", function() {
        $("#resume i").addClass("short-fade");
    });

    blocks.on("click", function() {
       setIndex(Array.prototype.indexOf.call(blocks, this));
    });

    logo.on("mouseenter", function() {
        $("#logo-text").removeClass("short-fade");
    }).on("mouseleave", function() {
        $("#logo-text").addClass("short-fade");
    });

    timer = setTimeout(update, 12000);

    items.eq(index).addClass("active");
    blocks.eq(index).addClass("active");
    $("#items-max").text("/0" + items.length);

    function update() {
        setIndex(index + 1);
    }

    function setIndex(newIndex) {
        items.eq(index).removeClass("active");
        blocks.eq(index).removeClass("active");

        if (newIndex === items.length) {
            index = 0;
        } else {
            index = newIndex;
        }

        $("#feature-container #current-item").text("0" + (index + 1));
        items.eq(index).addClass("active");
        blocks.eq(index).addClass("active");

        clearTimeout(timer);
        timer = setTimeout(update, 10000);
    }
});