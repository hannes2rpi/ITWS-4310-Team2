document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});

function toggleMore(event) {
    event.preventDefault(); // Prevent the default anchor action
    var moreText = document.querySelector('.more-text');
    var displayStyle = window.getComputedStyle(moreText).display;

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}

