import Image from "next/image";
import styles from "../main/HeroSection.module.scss";

function HeroSection(){
    return(
        <>
            <Image 
                src="/new_main.png"
                alt="메인 배너" 
                width={1920}
                height={1080}
                className={styles.banner}
                priority
            />
        </>
    )
}

export default HeroSection;