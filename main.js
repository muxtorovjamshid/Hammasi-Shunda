//  Navbar stilini ozgartirish scroll paytida

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


//  savollarga javoblar qismi + bosilganda malumot chiqishi

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // iconni o'zgartirish
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else {
            icon.className= "uil uil-plus"
        }
    })
})