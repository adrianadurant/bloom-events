
const slider = document.querySelector(`.Slider`)
const newsContent = document.querySelector('.News-content') // Seleccionar el elemento
let isThrottled = false
let counter = 0

// Agrego un evento keydown donde si la tecla es ArrowDown, a counter se le suma 1 
//Si la telca es ArrowUp a counter le resto 1
// Si el contador llega a la última posición del slider, lo reseteamos 
window.addEventListener(`keydown`, (e) => {
    let {key} = e

    if (key === "ArrowDown") {
        counter++
    } else if (key === "ArrowUp") {
        counter-- 
    }
    if (counter >= 5) {
        counter = 0
    }
    slider.style.transform = `translateY(-${20 * counter}%)` // Aplico el estilo transform al slider
})

// Uso del Throttling para evitar que el evento wheel se dispare muchas veces hecho con chatGPT
window.addEventListener("wheel", (e) => {
    if (newsContent.contains(e.target)) { // Evitar la acción si el evento ocurre dentro de newsContent
        return // Sale de la función si el wheel ocurre sobre newsContent
    }
    if (isThrottled) return
    isThrottled = true

    let { deltaY } = e
    if (deltaY > 0) {
        counter++
        console.log("Scrolling Down")
    } else {
        counter--
        console.log("Scrolling Up")
    }

    if (counter >= 5) {
        counter = 0
    } else if (counter < 0) {
        counter = 4
    }

    slider.style.transform = `translateY(-${20 * counter}%)`

    setTimeout(() => {
        isThrottled = false
    }, 400) // 400 ms de intervalo entre eventos
})

const swiperElrow = slider.querySelector(`.News-swiper--elrow`)
const swiperSonar = slider.querySelector(`.News-swiper--sonar`)
const swiperTml = slider.querySelector(`.News-swiper--tml`)
const newsButtonElrow = slider.querySelector(`.News-button--elrow`)
const newsButtonSonar = slider.querySelector(`.News-button--sonar`)
const newsButtonTml = slider.querySelector(`.News-button--tml`)
const backButtonElrow = slider.querySelector(`.News-button--back--elrow`)
const backButtonSonar = slider.querySelector(`.News-button--back--sonar`)
const backButtonTml = slider.querySelector(`.News-button--back--tml`)


//Creo un evento keydown donde si apreto ArrowRight, los elementos swiper se desplaza -50%
//Si apreyo ArrowLeft, los elementos swiper se desplazan a la posición 0%
window.addEventListener(`keydown`,(e)=>{
    let {key} = e
    if(key === `ArrowRight`){
        swiperElrow.style.transform = `translateX(-50%)`
        swiperSonar.style.transform = `translateX(-50%)`
        swiperTml.style.transform = `translateX(-50%)`
    }
    else if (key === `ArrowLeft`){
        swiperElrow.style.transform = `translateX(0%)`
        swiperSonar.style.transform = `translateX(0%)`
        swiperTml.style.transform = `translateX(0%)`
    } 
})

//Cuando hago click en newsButton, el swiper se desplaza 50%
//CUando hago click en backButton, el swiper se desplaza a la posición 0%
const newsSwiper = (swiper, newsButton, backButton)=>{
    newsButton.addEventListener(`click`,()=>{
        swiper.style.transform = `translateX(-50%)`
    })
    backButton.addEventListener(`click`,()=>{
        swiper.style.transform = `translateX(0%)`
    })
}

//Cuando haco wheel con el ratón, si el deltaX es más grande de 0, el swiper se desplaza 50% a la izquierda
//Si deltaX es menor a 0, swiper se desplaza a la posición 0%
window.addEventListener(`wheel`,(e)=>{
    let {deltaX} = e
    console.log(deltaX)

    if (deltaX > 0){
        swiperElrow.style.transform = `translateX(-50%)`
        swiperSonar.style.transform = `translateX(-50%)`
        swiperTml.style.transform = `translateX(-50%)`
    }
    else if (deltaX < 0){
        swiperElrow.style.transform = `translateX(0%)`
        swiperSonar.style.transform = `translateX(0%)`
        swiperTml.style.transform = `translateX(0%)`
    }
    
})

window.addEventListener("wheel", (e) => {
    let { deltaX } = e // Extrae el valor de desplazamiento horizontal
     if (isThrottled) return // Si está en espera, no ejecuta la función

    isThrottled = true // Activa el throttle

    if (deltaX > 0) {
        swiperElrow.style.transform = `translateX(-50%)`
        swiperSonar.style.transform = `translateX(-50%)`
        swiperTml.style.transform = `translateX(-50%)`
    } else if (deltaX < 0) {
        swiperElrow.style.transform = `translateX(0%)`
        swiperSonar.style.transform = `translateX(0%)`
        swiperTml.style.transform = `translateX(0%)`
    }
    // Restablece el throttle después de 500ms
    setTimeout(() => {
        isThrottled = false
    }, 400)
})

newsSwiper (swiperElrow, newsButtonElrow, backButtonElrow)
newsSwiper (swiperSonar, newsButtonSonar, backButtonSonar)
newsSwiper (swiperTml, newsButtonTml, backButtonTml)