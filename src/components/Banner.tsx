'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const reqText: string = "where every event finds its venue";
const announceText: string = "Find the one that suits you";

const covers = ['/img/cover0.jpg', '/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg'];

export default function Banner() {
    const [index, setIndex] = useState(0);

    return (
        <div 
            className="block p-[5px] m-0 w-screen h-[80vh] relative cursor-pointer" 
            onClick={() => setIndex(index + 1)}
        >
            <Image
                src={covers[index % 4]}
                alt='placeholder'
                fill={true}
                className="object-cover"
                priority
            />
            <div className="relative top-[100px] z-20 text-center text-white text-3xl [text-shadow:_0_0_10px_rgba(0,0,0,0.8),_0_0_20px_rgba(0,0,0,0.6),_0_0_30px_rgba(0,0,0,0.4)]">
                <h1>{reqText}</h1>
                <h3 className="text-2xl">{announceText}</h3>
            </div>
            <div className='relative top-[500px] z-20 text-right text-white text-3xl text-shadow-lg p-10 '>
                <Link href='/venue' onClick={(e) => e.stopPropagation()}>
                    Select Venue
                </Link>    
            </div>
        </div>
    );
}