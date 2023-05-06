export const images = [
    require("../../assets/images/porsche_green.jpeg"),
    require("../../assets/images/audi_black.jpeg"),
    require("../../assets/images/corvette_red.jpeg"),
    require("../../assets/images/mercedes_green.jpeg"),
    require("../../assets/images/bmw_purple.jpg"),
    require("../../assets/images/jaguar_yellow.jpeg"),
    require("../../assets/images/lexus_white.jpeg"),
    require("../../assets/images/ferrari_red.jpeg"),
    require("../../assets/images/bentley_green.jpg"),
    require("../../assets/images/bugatti_silver.jpeg")
]

export function getIndex(index) {
    return ((index % images.length) + images.length) % images.length
}