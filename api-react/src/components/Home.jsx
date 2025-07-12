import React from "react"
import { useState, useEffect } from "react"


export default function Home() {

    const [planets, setPlanets] = useState([])

    const [planetName, setPlanetName] =("")




    useEffect(() => {
        const fetchPlanets = async () => {
            const url = "https://www.swapi.tech/api/planets"
            const resp = await fetch(url)
            const data = await resp.json()
            setPlanets(data.results[0].name)
        }
        fetchPlanets()
    }, [])

    return (<>
        <p> {planets} </p>
        <button></button>
    </>)
}