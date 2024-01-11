const panels = document.querySelectorAll('.panel'); //必须用querySelectorAll选择全部的panel

panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClasses(); //remove class name
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}