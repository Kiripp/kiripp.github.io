const hoverCardAnimation = () => {
    if(window.innerWidth < 1200) return null

    document.querySelectorAll('.card-container').forEach(container => {
        container.addEventListener('mousemove', e => {
        for(const card of document.querySelectorAll(".card-wrapper")) {
            const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);  
        }   
    });
});
}

hoverCardAnimation();