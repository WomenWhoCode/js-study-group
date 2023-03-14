const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=> {
    panel.addEventListener("click", ()=> {
        panel.classList.toggle('open')}
        )
        panel.addEventListener("transitionend", ()=> {
            if (panel.classList.contains("open")) {
                panel.classList.add('open-active')
            }
            else {
                panel.classList.remove('open-active')
            }
        }) 
}
)




