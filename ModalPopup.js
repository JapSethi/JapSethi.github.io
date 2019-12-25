$(document).ready(function() {
    $("a.seven").on("click", function(e) {
        e.preventDefault();
        $(this).simplePopup();
    });
});
