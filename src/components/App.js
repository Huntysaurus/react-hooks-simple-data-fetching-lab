import React, { useEffect, useState } from "react"
// create your App component here

function App() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [dog, setDog] =useState("")

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((dog) => {
            setDog(dog.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return <img src={dog} alt="A Random Dog"></img>
}

export default App
