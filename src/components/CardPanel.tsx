'use client'

import { useReducer } from "react";
import Card from "./Card";

type RatingMap = Map<string, number>;
const initialRatings: RatingMap = new Map([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0]
])
    
type Action = { type: 'UPDATE_RATING'; venueName: string; rating: number }
            | {type: 'REMOVE_VENUE'; venueName: string }

function ratingReducer(state: RatingMap, action: Action): RatingMap {
    switch(action.type) {
        case 'UPDATE_RATING': {
            const newMap = new Map(state);
            newMap.set(action.venueName, action.rating);
            return newMap;
        }
        case 'REMOVE_VENUE': {
            const newMap = new Map(state);
            newMap.delete(action.venueName);
            return newMap;
        }
        default: return state;
    }
}

export default function CardPanel() {
    const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

    return(
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-auto flex-row flex-wrap justify-around align-around m-5 w-full">
                <Card venueName="The Bloom Pavilion" imgSrc="bloom.jpg" 
                onRatingChange={(rating) => dispatch({ type: 'UPDATE_RATING', venueName: 'The Bloom Pavilion', rating: rating ?? 0})}/>
                <Card venueName="Spark Space" imgSrc="sparkspace.jpg"
                onRatingChange={(rating) => dispatch({ type: 'UPDATE_RATING', venueName: "Spark Space", rating: rating ?? 0 })}/>
                <Card venueName="The Grand Table" imgSrc="grandtable.jpg"
                onRatingChange={(rating) => dispatch({ type: 'UPDATE_RATING', venueName: 'The Grand Table', rating: rating ?? 0})}/>
            </div>
            
            <div className="m-5 ">
                <div className="text-lg font-bold">
                    {`Venue List with Ratings: ${ratingMap.size} `}
                </div>
                { Array.from(ratingMap.entries()).map(([venueName, rating]) => (
                        <div
                            key={venueName}
                            data-testid={venueName}
                            onClick={() => dispatch({ type: 'REMOVE_VENUE', venueName })}
                        >
                            {`${venueName} Rating: ${rating}`}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}