import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { useState } from "react";
import { Rating } from "@mui/material";

interface CardProps {
    venueName: string;
    imgSrc: string;
    onClick?: () => void;
    onRatingChange?: (newRating: number | null) => void; 
}

export default function Card({ venueName, imgSrc, onClick, onRatingChange } : CardProps) {
    const ratingName:string = venueName + " Rating";
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative bg-white hover:cursor-pointer" onClick={onClick}>
                <Image
                    src={imgSrc}
                    alt="placeholder"
                    fill={true}
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute top-[145px] m-[5px]">
                    <h3 className="text-white break-all text-xl m-0 [text-shadow:0_0_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6),0_0_30px_rgba(0,0,0,0.4)]">
                        {venueName}
                    </h3>
                </div>
            </div>
            
            <div className="w-full h-[40%] p-[10px] flex justify-center"> 
                <Rating id={ratingName} name={ratingName} data-testid={ratingName}
                onChange={(event, newValue) => {if (onRatingChange) onRatingChange(newValue);}}
                />
            </div>
            
        </InteractiveCard>
    );
}