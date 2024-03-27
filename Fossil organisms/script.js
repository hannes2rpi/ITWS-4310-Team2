function showDetail(element) {
    const detailView = document.getElementById('detailView');
    detailView.style.display = 'block';
    
    document.getElementById('detailTitle').innerText = element.getAttribute('data-title');
    document.getElementById('detailDescription').innerText = element.getAttribute('data-description');
}

function closeDetail() {
    document.getElementById('detailView').style.display = 'none';
}
