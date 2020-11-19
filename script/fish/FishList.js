import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { nonHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {


 
  const contentElement = document.querySelector(".fishList")
  const holyFish = mostHolyFish()
  const soldiers = soldierFish()
  const losers = nonHolyFish()

  for (const fishObject of holyFish) {
    const fishHTML = Fish(fishObject)
    contentElement.innerHTML += fishHTML
  }


for (const fishObject of soldiers) {
  const fishHTML = Fish(fishObject)
  contentElement.innerHTML += fishHTML
}


for (const fishObject of losers) {
  const fishHTML = Fish(fishObject)
  contentElement.innerHTML += fishHTML
}
}
