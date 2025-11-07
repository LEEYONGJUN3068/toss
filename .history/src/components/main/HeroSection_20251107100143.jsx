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
            <p>
                금융의 모든 것<br/>
                토스에서 쉽고 간편하게
            </p>
        </>
    )
}

export default HeroSection;