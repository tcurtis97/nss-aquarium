import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {


 
  const contentElement = document.querySelector(".fishList")
  const allTheFish = useFish()

  for (const fishObject of allTheFish) {
    const fishHTML = Fish(fishObject)
    contentElement.innerHTML += fishHTML
  }
}