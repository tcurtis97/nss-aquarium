

const fishCollection = [
    {
      name: "Jerry",
      species: "BlueGill",
      food: "Cats",
      location: "Fall Creek Falls",
      length: 4,
      image: "Bluegill.jpg"
    },
    {
      name: "Garry",
      species: "Large Mouth Bass",
      food: "floaty bits",
      location: "Fall Creek Falls",
      length: 15,
      image: "large mouth bass.jpg"
    },
    {
      name: "Tom",
      species: "Cat Fish",
      food: "Mice",
      location: "Fall Creek Falls",
      length: 24,
      image: "channel cat.jpg"
    },
    {
      name: "Mac",
      species: "Mackerel",
      food: "Anything",
      location: "Grand Banks of Newfoundland.",
      length: 9,
      image: "holyMackerel.jpg"
    },
    {
      name: "Craig",
      species: "Gold Fish",
      food: "Anything",
      location: "Grand Banks of Newfoundland.",
      length: 3,
      image: "holyGoldFish.jpg"
    },
    {
      name: "Francis",
      species: "Carp",
      food: "The Holy Light",
      location: "Grand Banks of Newfoundland.",
      length: 10,
      image: "holyCarp.jpg"
    },
    {
      name: "Brutus",
      species: "SwordFish",
      food: "Anything that attacks the Holy Light",
      location: "Grand Banks of Newfoundland.",
      length: 75,
      image: "swordFish.jpg"
    }
  ]
  
  export const useFish = () => {
    return fishCollection.slice()
  }
  





  export const mostHolyFish = () => {

    const holyFish = []

    for (const fish of fishCollection) {
      if (fish.length % 3 === 0)
      holyFish.push(fish)
    }

    return holyFish
}


export const soldierFish = () => {

  const soldiers=[]
  
  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0)
    soldiers.push(fish)
  }
    return soldiers
}


export const nonHolyFish = () => {
  
  const regularFish= []
  
for (const fish of fishCollection)
  if (fish.length  % 3 !== 0 && fish.length % 5 !== 0)
     regularFish.push(fish)

    return regularFish
}