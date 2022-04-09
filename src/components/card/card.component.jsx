// Card List Component
import React from "react";
import '../../index.css';

export const Card = (props) => {
    return (<div className={props.css_style}>
        <img alt="superheroimg" src={props.superhero.images.sm}></img>
        <h2>{props.superhero.name}</h2>
        <p>Real Name: {props.superhero.biography.fullName}</p>
        <p>Universe: {props.superhero.biography.publisher}</p>
        <p>Height, Weight: {props.superhero.appearance.height[0]}, {props.superhero.appearance.weight[0]}</p>
        <p>Combat: {props.superhero.powerstats.combat} <br/> Durability: {props.superhero.powerstats.durability} <br/>
        Intelligence: {props.superhero.powerstats.intelligence} <br/> Power: {props.superhero.powerstats.power} <br/>
        Speed: {props.superhero.powerstats.speed} <br/> Strength: {props.superhero.powerstats.strength} </p>
    </div>);
}