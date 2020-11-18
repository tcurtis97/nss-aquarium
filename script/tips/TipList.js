import { useTip } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"

export const tipsList = () => {


 
    const contentElement = document.querySelector(".tankTips")
    const allTheTips = useTip()
  
    for (const tipObject of allTheTips) {
      const tipHTML = Tips(tipObject)
      contentElement.innerHTML += tipHTML
    }
  }