"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import Logo from '../icons/Logo';
import styles from './Header.module.scss';

function Header() {
  const headerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 활성 상태 전환
      if (scrollY > 50 && !isActive) {
        setIsActive(true);
        gsap.to(headerRef.current, {
          duration: 0.6,
          y: 0,
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          ease: "power2.out",
        });
      } else if (scrollY <= 50 && isActive) {
        setIsActive(false);
        gsap.to(headerRef.current, {
          duration: 0.6,
          y: -20,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          ease: "power2.inOut",
        });
      }
    };

    // 초기 상태 반영
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

    return(
      <header>
        <div ref={headerRef} className={styles.nav}>
          <Logo className={styles.logoImage} />
          <ul className={styles.nav_menu}>
            <li><a href="">회사 소개</a></li>
            <li><a href="">공지사항</a></li>
            <li><a href="">고객센터</a></li>
            <li><a href="">자주 묻는 질문</a></li>
            <li><a href="">토스인증서</a></li>
            <li><a href="">채용</a></li>
          </ul>
          <ul className={styles.nation}>
            <li>KR</li>
            <li>US</li>
          </ul>
        </div>
      </header>
    )
}

export default Header;