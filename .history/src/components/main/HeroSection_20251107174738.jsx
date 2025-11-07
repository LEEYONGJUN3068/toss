"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import Image from "next/image";
import styles from "../main/HeroSection.module.scss";

function HeroSection(){

    const wrapperRef = useRef(null);

    useEffect(() => {
    
        // 4. GSAP 애니메이션 실행
        // .to( [타겟], {애니메이션 속성} )
        gsap.to(
          wrapperRef.current, // 타겟: ref로 참조한 div 요소
          {
            // ----- 이것이 3초 딜레이 -----
            delay: 1, 
            // ---------------------------
            
            // 애니메이션 최종 상태
            opacity: 1,
            y: 0, // (선택) 아래에서 위로 올라오는 효과 (y: 0이 최종 위치)
            
            // 애니메이션 설정
            duration: 1, // 1초 동안 애니메이션 실행
            ease: 'power3.out', // 부드러운 시작과 느려지는 끝
          }
        );
        
        // Next.js 13+ 또는 React 18+ (Strict Mode) 환경에서는
        // GSAP Context를 사용한 정리(cleanup)를 권장하지만,
        // 이 간단한 .to() 애니메이션은 위 코드만으로도 잘 작동합니다.
    
      }, []); // 빈 배열[]: 마운트 시 1회만 실행

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
                    <a href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328" className={styles.iosLink} target="_blank">
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
                    <a href="https://play.google.com/store/apps/details?id=viva.republica.toss" className={styles.aosLink} target="_blank">
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