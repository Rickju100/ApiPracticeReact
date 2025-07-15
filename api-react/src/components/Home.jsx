import React from "react"
import { useState, useEffect } from "react"


export default function Home() {

    const [planets, setPlanets] = useState([])

    const [planetName, setPlanetName] =useState("")

    useEffect(() => {
        const fetchPlanets = async () => {
            const url = "https://www.swapi.tech/api/planets"
            const resp = await fetch(url)
            const data = await resp.json()
            setPlanets(data.results);
            if(data.results.length >2){
                setPlanetName(data.results[0].name);
            }
        }
        fetchPlanets()
    }, [])


    const planetChange = () =>{
        if(planets.length >0) {
            const indexRandom = Math.floor(Math.random() *planets.length);
            setPlanetName(planets[indexRandom].name);
        }
    }

    return (<>
        <p> {planetName} </p>
        <button onClick={planetChange} > Click me </button>
    </>)
}