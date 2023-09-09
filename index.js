document.addEventListener('DOMContentLoaded',()=>{

    // Get links to attach easy scroll
    const links = document.querySelectorAll('.link')
    links.forEach(element => {
        element.addEventListener('click', easyScroll)
    })
    
    
})




// easyscroll callback function
function easyScroll(event) {
    event.preventDefault()
    const targetId = this.getAttribute('href')
    const targetPosition = document.querySelector(targetId).offsetTop
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    })
}
