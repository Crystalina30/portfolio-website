const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = 150;

        if(top < window.innerHeight - visible){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();