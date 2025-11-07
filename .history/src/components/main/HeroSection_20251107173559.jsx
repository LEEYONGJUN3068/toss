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
            <div className={styles.container}>
                <p className={styles.title}>
                    금융의 모든 것<br/>
                    토스에서 쉽고 간편하게
                </p>
                <div className={styles.appDownload}>
                    <a href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328" className={styles.iosLink}>
                        <Image 
                            src="/images/home/applekorea.png" 
                            alt="애플스토어"
                            width={24}
                            height={24}
                            className={styles.appleKorea}
                            priority
                        />
                        <p>App Store</p>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=viva.republica.toss" className={styles.aosLink}>
                        <Image 
                            src="/images/home/googleplay.png" 
                            alt="구글플레이"
                            width={24}
                            height={24}
                            className={styles.googlePlay}
                            priority
                        />
                        <p>Google Play</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;