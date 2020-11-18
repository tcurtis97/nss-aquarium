const fishCollection = [
    {
      name: "Jerry",
      species: "BlueGill",
      food: "Cats",
      location: "neighbor's pond",
      length: 4,
      image: "Bluegill.jpg"
    },
    {
      name: "Garry",
      species: "Large Mouth Bass",
      food: "floaty bits",
      location: "Harpeth River",
      length: 18,
      image: "large mouth bass.jpg"
    },
    {
      name: "Tom",
      species: "Cat Fish",
      food: "Mice",
      location: "Harpeth River",
      length: 24,
      image: "channel cat.jpg"
    }
  ]
  
  export const useFish = () => {
    return fishCollection.slice()
  }
  