function toggleSection(id) {
    let content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        content.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        content.style.display = "none";
    }
}
