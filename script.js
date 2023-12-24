ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:1500,
    delay:200

});
ScrollReveal().reveal('.header-text,.subtitle,.title', { origin: 'top' });
ScrollReveal().reveal('.image,.col-7,.project', { origin: 'bottom' });
ScrollReveal().reveal('.header-text h1,.contact-left', { origin: 'left' });
ScrollReveal().reveal('.contact-right', { origin: 'right' });


const typed=new Typed('.multiple-text',{
   strings :['Front-end developer','Back-end Developer','Full Stack Developer'],
   typeSpeed:80,
   backSpedd:80,
   backDelay:100,
   loop:true,

})
