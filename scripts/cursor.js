const cursor = $("#cursor");

$(function() {
    setTimeout(function () {
        cursor.removeClass("hidden");
    }, 5000);

    $(document).on("mousemove", function(e) {
        cursor.css({left: e.clientX, top: e.clientY});
    });

    $(document).on("mousedown", function() {
        if (!cursor.hasClass("hidden")) {
            cursor.css({width: 30, height: 30});
        }

    });

    $(document).on("mouseup", function() {
        if (!cursor.hasClass("hidden")) {
            cursor.css({width: 50, height: 50});
        }
    });

    // $(document).on("scroll",function() {
    //     let scrollPos = $(document).scrollTop();
    //     cursor.css("transform", `translate(-50%, -50%) translate(0, ${scrollPos}px)`);
    // })

    $("a, .link, .progress-block").on("mouseenter", function() {
        cursor.addClass("select");
    }).on("mouseleave", function() {
        cursor.removeClass("select");
    });
});