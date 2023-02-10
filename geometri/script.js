// variabel
// untuk menanmpung suatu nilai
// var let const
// variabel global 
// variabel local

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const tambah = document.getElementById("tambah")
const kurang = document.getElementById("kurang")
const kali = document.getElementById("kali")
const bagi = document.getElementById("bagi")

function penjumlahan(){
    const nilaiInput1 = parseInt(input1.value)
    const nilaiInput2 = parseInt(input2.value)
    const hasil = nilaiInput1 + nilaiInput2
    alert("Hasil = " + hasil)
}
function pengurangan(){
    const nilaiInput1 = parseInt(input1.value)
    const nilaiInput2 = parseInt(input2.value)    
    const hasil = nilaiInput1 - nilaiInput2
    alert("Hasil = " + hasil)
}
function perkalian(){
    const nilaiInput1 = parseInt(input1.value)
    const nilaiInput2 = parseInt(input2.value)
    const hasil = nilaiInput1 * nilaiInput2
    alert("Hasil = " + hasil)
}
function pembagian(){
    const nilaiInput1 = parseInt(input1.value)
    const nilaiInput2 = parseInt(input2.value)
    const hasil = nilaiInput1 / nilaiInput2
    alert("Hasil = " + hasil)
}

tambah.addEventListener("click",penjumlahan)
kurang.addEventListener("click",pengurangan)
kali.addEventListener("click",perkalian)
bagi.addEventListener("click",pembagian)


// Luas Segitiga
// Keliling
// Luas Lingkaran

const alasSegitiga = document.getElementById("alasSegitiga")
const tinggiSegitiga = document.getElementById("tinggiSegitiga")
const luasSegitiga = document.getElementById("luasSegitiga")

luasSegitiga.addEventListener("click",function () {
    const alas = parseInt(alasSegitiga.value)
    const tinggi = parseInt(tinggiSegitiga.value)
    const hasil = 0.5 * alas * tinggi
    console.log(alas,tinggi)
    alert("Luas Segitiga = "+ hasil)
})

const sisi1 = document.getElementById("sisi1")
const sisi2 = document.getElementById("sisi2")
const sisi3 = document.getElementById("sisi3")
const kelilingSegitiga = document.getElementById("kelilingSegitiga")

kelilingSegitiga.addEventListener("click",function () {
    const a = parseInt(sisi1.value)
    const b = parseInt(sisi2.value)
    const c = parseInt(sisi3.value)

    const hasil = a + b + c

    alert("Keliling Segitiga = "+ hasil)
})

const jarijari = document.getElementById("jarijari")
const luasLingkaran = document.getElementById("luasLingkaran")

luasLingkaran.addEventListener("click", function (){
    const r = parseInt(jarijari.value)
    const hasil = 3.14 * r * r
    alert("Luas Lingkaran = "+hasil)
})
