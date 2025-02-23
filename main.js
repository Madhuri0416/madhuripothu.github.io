

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec,offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a ')
            });
        };
    });

    let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
};

ScrollReveal({
     distance: '80px',
     duration: 2000,
     delay: 200,
});

ScrollReveal().reveal('.home-content h3 , heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact-container', { origin: 'button' });
ScrollReveal().reveal('.home-contact h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact h4, .about-content',  { origin: 'right' });


const typed =new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Web Designer', 'Data Analyst'],
    typespeed: 70,
    backspeed: 70,
    backDelay: 1000,
    loop: true,
})
