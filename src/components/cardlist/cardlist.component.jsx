// Card List Component
import React from "react";
import { Card } from "../card/card.component";
import '../../index.css';

export const CardList = (props) => {
    if (props.filtered === true) {
        if (props.search === "") {
            return <></>;
        }

        else {
            return(
                <div> {
                    <Card css_style={"search-card-container"} superhero={props.superheroes} />
                }
                </div>);
        }
    }

    else {
        return(
        <div className="cardlist">{
            props.superheroes?.map(superhero => (
            <Card css_style={"card-container"} key={superhero.id} superhero={superhero} />
            ))
        }
        </div>);
    }
}
