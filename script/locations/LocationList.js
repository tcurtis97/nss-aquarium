import { useLocation } from "/script/locations/LocationDataProvider.js"
import { Location } from "/script/locations/Location.js"

export const locationList = () => {


 
    const contentElement = document.querySelector(".locations")
    const allTheLocations = useLocation()
  
    for (const locationObject of allTheLocations) {
      const locationHTML = Location(locationObject)
      contentElement.innerHTML += locationHTML
    }
  }