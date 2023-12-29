document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("red").focus();
})

function change_color(className) {
  let red_car = document.getElementById("rojo_metalico")
  let black_car = document.getElementById("negro_profundo")
  let gray_car = document.getElementById("gris_carbonizado")
  let green_car = document.getElementById("verde_metalico")
  let orange_car = document.getElementById("naranja_metalica")
  let sky_car = document.getElementById("azul_claro")
  let blue_car = document.getElementById("azul_atlas")

  switch(className) {
    case "rojo_metalico":
      red_car.style.display = "block"
      black_car.style.display = "none"
      gray_car.style.display = "none"
      green_car.style.display = "none"
      orange_car.style.display = "none"
      sky_car.style.display = "none"
      blue_car.style.display = "none"
      break
    case "negro_profundo":
      red_car.style.display = "none"
      black_car.style.display = "block"
      gray_car.style.display = "none"
      green_car.style.display = "none"
      orange_car.style.display = "none"
      sky_car.style.display = "none"
      blue_car.style.display = "none"
      break
    case "gris_carbonizado":
      red_car.style.display = "none"
      black_car.style.display = "none"
      gray_car.style.display = "block"
      green_car.style.display = "none"
      orange_car.style.display = "none"
      sky_car.style.display = "none"
      blue_car.style.display = "none"
      break
    case "verde_metalico":
      red_car.style.display = "none"
      black_car.style.display = "none"
      gray_car.style.display = "none"
      green_car.style.display = "block"
      orange_car.style.display = "none"
      sky_car.style.display = "none"
      blue_car.style.display = "none"
      break
    case "naranja_metalica":
      red_car.style.display = "none"
      black_car.style.display = "none"
      gray_car.style.display = "none"
      green_car.style.display = "none"
      orange_car.style.display = "block"
      sky_car.style.display = "none"
      blue_car.style.display = "none"
      break
    case "azul_claro":
      red_car.style.display = "none"
      black_car.style.display = "none"
      gray_car.style.display = "none"
      green_car.style.display = "none"
      orange_car.style.display = "none"
      sky_car.style.display = "block"
      blue_car.style.display = "none"
      break
    case "azul_atlas":
      red_car.style.display = "none"
      black_car.style.display = "none"
      gray_car.style.display = "none"
      green_car.style.display = "none"
      orange_car.style.display = "none"
      sky_car.style.display = "none"
      blue_car.style.display = "block"
      break
  }
}
