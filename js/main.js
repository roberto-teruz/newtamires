const whatsapp = document.querySelector('.contato_whatsaap-nutricionista-tamires')
const popupWhatsapp = document.querySelector('#popup__whatsaap')
const body = document.querySelector('body')

whatsapp.addEventListener('mouseover', () => {
    popupWhatsapp.classList.add('mostra')    
})

whatsapp.addEventListener('mouseout', () => {
    popupWhatsapp.classList.remove('mostra')    
})






