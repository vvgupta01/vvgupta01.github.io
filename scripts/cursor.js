$(function() {
    $(document).on("mousemove", function(e) {
        $("#cursor").css({left: e.clientX, top: e.clientY});
    });

    $(document).on("mousedown", function() {
        $("#cursor").css({width: 30, height: 30});
    });

    $(document).on("mouseup", function() {
        $("#cursor").css({width: 50, height: 50});
    });

    $(document).on("scroll",function() {
        let scrollPos = $(document).scrollTop();
        $("#cursor").css("transform", `translate(-50%, -50%) translate(0, ${scrollPos}px)`);
    })

    $("a, .link").on("mouseover", function() {
        $("#cursor").addClass("select");
    }).on("mouseout", function() {
        $("#cursor").removeClass("select");
    });
});