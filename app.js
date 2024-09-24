
let images = document.querySelectorAll("img")
let wrapper = document.getElementById("wrapper")
let imgWrapper = document.getElementById("fullImg")
let close = document.querySelector(".spanClose")
let headerPos = document.querySelector(".navbar")

// images.forEach((img, index) => {
//   img.addEventListener("click", () => {
//     openModal(`../images/gallery/gal${index}.jpg`)
//     console.log("img clicked.")
//   })
// })

close.addEventListener("click", 
    () => {(wrapper.style.display = "none")
    console.log("close clicked")
    document.body.style.overflow = "auto"
})

function openModal(pic) {
  wrapper.style.display = "flex"
  imgWrapper.src = pic
  document.body.style.overflow = "hidden"
  document.head.style.overflow = "hidden"
}


