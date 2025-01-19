const newReleases = document.querySelector(`.New-releases`)
const newReleasesSong = newReleases.querySelectorAll(`.New-releases--li`)
const newReleasesNext = document.querySelector(`.New-releases--next`)
const newReleasesPrev = document.querySelector(`.New-releases--prev`)
const topSongs = document.querySelector(`.Top-songs`)
const topSongsSong = topSongs.querySelectorAll(`.Top-songs--li`)
const topSongsNext = document.querySelector(`.Top-songs--next`)
const topSongsPrev = document.querySelector(`.Top-songs--prev`)
const topAlbums = document.querySelector(`.Top-albums`)
const topAlbumsAlbum = topAlbums.querySelectorAll(`.Top-albums--li`)
const topAlbumsNext = document.querySelector(`.Top-albums--next`)
const topAlbumsPrev = document.querySelector(`.Top-albums--prev`)
const forYou = document.querySelector(`.For-you`)
const forYouSong = forYou.querySelectorAll(`.For-you--li`)
const forYouNext = document.querySelector(`.For-you--next`)
const forYouPrev = document.querySelector(`.For-you--prev`)
const favs = document.querySelectorAll(`.Music-svg--fav`)


//Defino una función con los siguiente parámetros
//Cuanod hago click en nextButton, a song le sumo 1, pero si llega a sonsItems - 4 vuelvo a asignarle el valor 0
//Mientras song sea menor a songsItems.length - 4, singList se desplaza el songWidth por el valor de song a la izquierda
//Cuanod hago click en prevButton, a songsItems.length - 4 le resto 1, pero si llego a 0 le vuelvo a asignarle el valor songItems.length - 4
//Mientras song sea mayor a 0, singList se desplaza el songWidth por el valor de song a la derecha
const songsSlider = (songsList, songsItems, nextButton, prevButton) => {

    let song = 0
    let songWidth = 100 / 10

    nextButton.addEventListener(`click`, () => {
        song++
        if (song >= songsItems.length - 4) {
            song = 0
        }
        songsList.style.transform = `translateX(-${songWidth * song}%)`
      })

    prevButton.addEventListener(`click`, () => {
        if (song <= 0) {
            song = songsItems.length - 4
        }
    song--
    songsList.style.transform = `translateX(-${songWidth * song}%)`
    })
}

songsSlider (newReleases, newReleasesSong, newReleasesNext, newReleasesPrev)
songsSlider (topSongs, topSongsSong, topSongsNext, topSongsPrev)
songsSlider (topAlbums, topAlbumsAlbum, topAlbumsNext, topAlbumsPrev)
songsSlider (forYou, forYouSong, forYouNext, forYouPrev)

favs.forEach((_,i) => {
    console.log(favs[i])
    favs[i].addEventListener(`click`, () => {
        favs[i].classList.toggle(`isActive`)
    })
})

//Cuando hago scroll vertical en la ventana
    // el elemento .Slider se desliza 100vh
//si el punto del scroll es igual o menor a 12 (donde termina el .Slider) y el deltaY es menor a 0
    //el elemento .Slider vuelve a estar en la posición original 0vh
//Fuera del elemento .Slider el scroll es normal

const slider = document.querySelector(`.Slider`)

window.addEventListener(`wheel`, (e)=>{
    let { deltaY } = e
    let {scrollY} = window

    if(deltaY > 0 && scrollY <= 12){
        slider.style.transform = `translateY(-100vh)`
    }
    else if(deltaY <0 && scrollY <= 12 ){
        slider.style.transform = `translateY(0vh)`
    }
    else if (deltaY >0 && scrollY >1370){
        slider.style.transform = `translateY(0vh)`

    }
})


  