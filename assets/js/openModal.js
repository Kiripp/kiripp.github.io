function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}