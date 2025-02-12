function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.classList.add("no-select");
    modal.classList.add("no-select");

    document.addEventListener("keydown", handleEscape);
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.removeEventListener("keydown", handleEscape);

}

function handleEscape(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}