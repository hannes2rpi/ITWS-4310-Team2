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

function showDetail(element) {
    var title = element.getAttribute('data-title');
    var description = element.getAttribute('data-description');
    var image1 = element.getAttribute('data-image1');
    var image2 = element.getAttribute('data-image2');

    document.getElementById('detailTitle').innerText = title;
    document.getElementById('detailDescription').innerText = description;

    var imagesContainer = document.getElementById('detailImages');
    imagesContainer.innerHTML = ''; 
    var img1 = document.createElement('img');
    img1.src = image1;
    img1.className = 'detail-image';

    var img2 = document.createElement('img');
    img2.src = image2;
    img2.className = 'detail-image';

    imagesContainer.appendChild(img1);
    imagesContainer.appendChild(img2);

    document.getElementById('detailView').style.display = 'flex';
}

function closeDetailView() {
    document.getElementById('detailView').style.display = 'none';
}

document.querySelector('.fossil-gallery').addEventListener('click', function(e) {
    if(e.target.closest('.fossil-item')) {
        showDetail(e.target.closest('.fossil-item'));
    }
});

document.querySelector('.close').addEventListener('click', closeDetailView);

document.querySelectorAll('.fossil-item').forEach(item => {
    item.addEventListener('click', function() {
        showDetail(this);
    });
});

window.onload = function() {
    document.querySelector('.close').addEventListener('click', closeDetailView);
};

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