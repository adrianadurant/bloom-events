
const footerTitleAbout = document.querySelector(`.Footer-dt--about`);
const footerTitleInfo = document.querySelector(`.Footer-dt--info`);
const footerTitleContact = document.querySelector(`.Footer-dt--contact`);


//Función para recorrer cada footerTitle. Cuando hago click en un footerTitle, 
// a los demás footerTitle se le elimina la clase isActive y al seleccionado
let footerAcordeon = (footerTitles) => {
    footerTitles.forEach((footerTitle) => {
        footerTitle.addEventListener(`click`, () => {
            footerTitles.forEach((title) => title.classList.remove(`isActive`));
            footerTitle.classList.add(`isActive`);
        });
    });
};

//Incluyo en la función el array de los footerTitle
footerAcordeon([footerTitleAbout, footerTitleInfo, footerTitleContact]);

//Funciones para el botón burger del menú mobile
const burgerButton = document.querySelector(`.Header-button--burger`)
const closeButton = document.querySelector(`.Header-button--close`)
const mobileMenu = document.querySelector(`.Header-nav`)

//He metido los dos botones dentro de un array para optimizar el código y así usar solo una función.
let buttons = [closeButton, burgerButton] 

//Definición de funciones Handler para simplificar el código
//Añade clase isActive de los botones y luego añade clase isActive a mobileMenu
const burgerButtonHandler =  () => {
    buttons.forEach((_,i) => {
        buttons[i].classList.add(`isActive`)
    })
    mobileMenu.classList.add(`isActive`)
}
//Elimina clase isActive de los botones y luego elimina clase isActive a mobileMenu
const closeButtonHandler = () => {
    buttons.forEach((_,i) => {
        buttons[i].classList.remove(`isActive`)
    })
    mobileMenu.classList.remove(`isActive`)
}
//Si target no es ni el mobileMenu ni burgerButton, a mobileMenu se le elimina la clase isActive
//Luego a todos los botones se les elimina la clase isActive
const windowHandler = (e) => {
    let {target} = e
    if (!mobileMenu.contains(target) && !burgerButton.contains(target)) {
        mobileMenu.classList.remove(`isActive`)
        buttons.forEach((_,i) => {
            buttons[i].classList.remove(`isActive`)
        })
    }
}
//Llamada a las funciones Handler

//Cuando hago click en burgerButton se ejecuta la función burgerButtonHandler
burgerButton.addEventListener(`click`, burgerButtonHandler)
// Cuando hago click en closeButton, se elimina la clase isActive de ambos botones y del mobileMenu
closeButton.addEventListener(`click`, closeButtonHandler)
//Añado un evento de click a la ventana que pone la condición de que si el click se ha hecho fuera del menuMobile o del botón burgerButton, al mobilbeMenu se le elimina la clase isActive
window.addEventListener(`click`, windowHandler)

const cursor = document.querySelector(`.Cursor`)
const links = document.querySelectorAll(`a`)
//Agrupo <a> y <button> en una constante
const buttonsLinks = document.querySelectorAll(`a, button`) 

//Muevo cursor según el valor de client X y clientY
const windowMousemoveHandler = (e) => {
    let {clientX , clientY} = e
cursor.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`
} 
//Cuando hago mouseover en cada botón o enlace, el cursor cambia el color
const buttonsLinksEachHandler = (_,i) => {
    buttonsLinks[i].addEventListener(`mouseover`, ()=>{
    cursor.style.border = ` .125rem dashed #00feca`
})
buttonsLinks[i].addEventListener(`mouseout`, ()=>{
    cursor.style.border = `.125rem dashed #ff85ea`
})
}
const buttonsMouseHandler = () => (_,i)=>{
    buttonsLinks[i].addEventListener(`mouseover`,()=>{
        cursor.style.border = `.125rem dashed #00feca`
    })
    buttonsLinks[i].addEventListener(`mouseout`,()=>{
        cursor.style.border = `.125rem dashed #ff85ea`
    })
}

window.addEventListener(`mousemove` , windowMousemoveHandler)
buttonsLinks.forEach(buttonsLinksEachHandler)
buttonsLinks.forEach(buttonsMouseHandler)

const scrollTitle = document.querySelector(`.Scroll-title`)
const scrollImg = document.querySelectorAll(`.Scroll-img`)
const scrollPlaylist = document.querySelectorAll(`.Scroll-playlist`)

//Deifno un threshold para las imágenes para que estén en intersección cuando acaba de entrar y ucando acaba de salir
let options = {
    threshold: 1
}
//Deifno un threshold para las playlists para que estén en intersección cuando haya entrado un 0.3 en la ventana
let optionsMusic = {
    threshold: 0.3
}

//Cuando target está intersectando, se le añade la clase isVisible
//Cuando target contiene la clase Scroll-img--rest, el scrollTitle se le añade la clase isHidden
//Cuando target ya no está intersectando, se le elimina la clase isVisible
const observerHandler = (cambios) => {
    cambios.forEach((cambio) => {

        let {isIntersecting, target} = cambio
        if (isIntersecting) {

            target.classList.add(`isVisible`)
            if (target.classList.contains(`Scroll-img--rest`)) {
                scrollTitle.classList.add(`isHidden`)
            }
            else {
                scrollTitle.classList.remove(`isHidden`)
                target.classList.add(`isVisible`)
            }
        }
        else {
            target.classList.remove(`isVisible`)
        }
    })
}

//Cuando target está intersectando, se le añade la clase isVisible y cuando ya no intersecta se le eliminal a clase isVisible
const observerMusicHandler = (cambios) => {
    cambios.forEach((cambio) => {
        let {isIntersecting, target} = cambio
        if (isIntersecting) {
            target.classList.add(`isVisible`)
        }
        else {
            target.classList.remove(`isVisible`)
        }
    })
}

let observer = new IntersectionObserver(observerHandler, options)
let observerMusic = new IntersectionObserver(observerMusicHandler, optionsMusic)

//Activamos los dos observers
scrollImg.forEach((_,i)=> {
    observer.observe(scrollImg[i])
})
scrollPlaylist.forEach((_,i)=> {
        observerMusic.observe(scrollPlaylist[i])
})