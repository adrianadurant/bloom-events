const pictureAquasella = document.querySelector(`.Main-picture--aquasella`)
const eventoAquasella  = document.querySelector(`.Evento--aquasella`)
const buttonAquasella = document.querySelector(`.Evento-button--aquasella`)
const pictureElrow = document.querySelector(`.Main-picture--elrow`)
const eventoElrow  = document.querySelector(`.Evento--elrow`)
const buttonElrow = document.querySelector(`.Evento-button--elrow`)
const pictureMonegros = document.querySelector(`.Main-picture--monegros`)
const eventoMonegros  = document.querySelector(`.Evento--monegros`)
const buttonMonegros = document.querySelector(`.Evento-button--monegros`)
const pictureDreambeach = document.querySelector(`.Main-picture--dreambeach`)
const eventoDreambeach = document.querySelector(`.Evento--dreambeach`)
const buttonDreambeach = document.querySelector(`.Evento-button--dreambeach`)
const pictureMedusa = document.querySelector(`.Main-picture--medusa`)
const eventoMedusa = document.querySelector(`.Evento--medusa`)
const buttonMedusa = document.querySelector(`.Evento-button--medusa`)
const swiper = document.querySelector(`.Main-swiper`)


//Creo una función con los parámetros picture, evento, button para englobar a todos los definidos antes
//Cuando hago click en picture, a evento y a swiper se les añade la clase isVisible e isHidden respectivamente
//Cuando hago click en button, a evento y a swiper se les elimina la clase isVisible e isHidden respectivamente
//Cuando hago click en window si evento tiene clase isVisible, y el target no es evento ni picture, elimino clase isVisible e isHidden de evento y swiper respectivamente
const eventos = (picture, evento, button) => {
    picture.addEventListener(`click`,()=>{
        evento.classList.add(`isVisible`)
        swiper.classList.add(`isHidden`)
    })
    button.addEventListener(`click`,()=>{
        evento.classList.remove(`isVisible`)
        swiper.classList.remove(`isHidden`)
    })
    window.addEventListener(`click`,(e)=>{
        let {target} = e
        if (evento.classList.contains(`isVisible`) && !evento.contains(target) && !picture.contains(target)) {
            evento.classList.remove(`isVisible`)
            swiper.classList.remove(`isHidden`)
        }
    })
 }


eventos(pictureAquasella, eventoAquasella, buttonAquasella)
eventos(pictureElrow, eventoElrow, buttonElrow)
eventos(pictureMonegros, eventoMonegros, buttonMonegros)
eventos(pictureDreambeach, eventoDreambeach, buttonDreambeach)
eventos(pictureMedusa, eventoMedusa, buttonMedusa)