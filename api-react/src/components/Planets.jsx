import React from "react";
import { useState, useEffect } from "react";

const Planets = () => {

    const [planets, setPlanets] = useState([])
    const [planetName, setPlanetName] = useState("")
  

    useEffect(() => {
        const getWorld = async () => {
            const url = "https://swapi.info/api/planets";
            const resp = await fetch(url);
            const data = await resp.json();
            setPlanets(data);
            if (data.length > 2) {
                setPlanetName(data[0].name);
            

            }
        };
        getWorld();
    }, []);

    const visitOtherPlanet = () => {
        const randomPlanet = Math.floor(Math.random() * planets.length)
        setPlanetName(planets[randomPlanet].name)
     
    }



    return (<>

                <p> Welcome to {planetName} </p>
                <p> This planet Terrain is: {planets.find(p => p.name === planetName)?.terrain}</p>
                <p>The Climate today is: {planets.find(p => p.name === planetName)?.climate}</p>
                <button onClick={ visitOtherPlanet} > Travel  </button>

            </>

            );}

export default Planets;