import Image from "next/image";
import styles from "../main/HeroSection.module.scss";

function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <div className={styles.gradient}></div>
            <Image 
                src="/new_main.png"
                alt="메인 배너" 
                width={1920}
                height={1080}
                className={styles.banner}
                priority
            />
            <div>
                <p>
                    금융의 모든 것<br/>
                    토스에서 쉽고 간편하게
                </p>
                <div>
                    <Image 
                        src="/images/home/applekorea.png" 
                        alt="애플스토어"
                        width={24}
                        height={24}
                        className={styles.appleKorea}
                        priority
                    />
                    <Image 
                        src="/images/home/googleplay.png" 
                        alt="구글플레이"
                        width={24}
                        height={24}
                        className={styles.googlePlay}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;