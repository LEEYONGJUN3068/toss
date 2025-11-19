"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import Image from "next/image";
import styles from "../main/HeroSection.module.scss";

function HeroSection(){

    const wrapperRef = useRef(null);

    useEffect(() => {
        gsap.to(
          wrapperRef.current,
          {
            delay: 0.1, 
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power3.out',
          }
        );
    
      }, []);

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
            <div className={styles.container} ref={wrapperRef}>
                <p className={styles.title}>
                    금융의 모든 것<br/>
                    토스에서 쉽고 간편하게
                </p>
                <div className={styles.appDownload}>
                    <button 
                        type='button' 
                        onClick={() => window.open('https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328', '_blank')}
                        className={styles.iosLink} 
                    >
                        <Image 
                            src="/images/home/applekorea.png" 
                            alt="애플스토어"
                            width={24}
                            height={24}
                            className={styles.appleKorea}
                            priority
                        />
                        <p>App Store</p>
                    </button>
                    <button 
                        type='button' 
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=viva.republica.toss')}
                        className={styles.aosLink} 
                    >
                        <Image 
                            src="/images/home/googleplay.png" 
                            alt="구글플레이"
                            width={24}
                            height={24}
                            className={styles.googlePlay}
                            priority
                        />
                        <p>Google Play</p>
                    </button>
                </div>
            </div>
            <div className={styles.arrow}></div>
        </div>
    )
}

export default HeroSection;