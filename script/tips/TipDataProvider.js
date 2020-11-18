const tipCollection = [
    {
        tip: "Clean your tank when it gets skanky"
    },
    {
        tip: "Keep your cats out of the tank!"
    },
    {
        tip: "Dont let Tom eat Jerry"
    }
]

export const useTip = () => {
    return tipCollection.slice()
  }