import Image from 'next/image';
import styles from './banner.module.css'

const reqText:string = "where every event finds its venue";
const announceText:string = "Find the one that suits you";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
            src='/img/banner.jpg'
            alt='placeholder'
            fill={true}
            objectFit='cover'
            priority
            />
            <div className={styles.bannerText}>
                <h1>{reqText}</h1>
                <h3 className='text-2xl'>{announceText}</h3>
            </div>
        </div>
    );
}