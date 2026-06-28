// ================================
// Client Side Router
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        this.getAttribute("href");

        document
        .querySelector(target)
        .scrollIntoView({

            behavior:"smooth"

        });

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

window.addEventListener("scroll",()=>{

    const sections =
    document.querySelectorAll("section");

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        ==="#"+current){

            link.classList.add("active");

        }

    });

});