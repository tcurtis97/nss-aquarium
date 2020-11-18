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
      length: 18,
      image: "large mouth bass.jpg"
    },
    {
      name: "Tom",
      species: "Cat Fish",
      food: "Mice",
      location: "Fall Creek Falls",
      length: 24,
      image: "channel cat.jpg"
    }
  ]
  
  export const useFish = () => {
    return fishCollection.slice()
  }
  