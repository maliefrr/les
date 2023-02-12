const image = document.getElementById("myImage")
const tombolku = document.getElementById("tombolku")

function tombol(){
    if(image.src === "https://www.w3schools.com/js/pic_bulboff.gif"){
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        tombolku.innerHTML = "Matikan"
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif"
        tombolku.innerHTML  = "Nyalakan"
    }
}
