"use client";

import Logo from '../Logo';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';

function Header(){

  // 헤더가 'active' 상태인지 관리하는 state
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트를 감지하는 함수
    const handleScroll = () => {
      // window.scrollY (세로 스크롤 위치)가 0보다 크면 true, 아니면 false
      // 50px 이상 스크롤했을 때만 변경하고 싶다면 (window.scrollY > 50)
      setIsActive(window.scrollY > 50);
    };

    // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 1회만 실행되도록 함

    return(
        <header>
            <div className={`${styles.nav} ${isActive ? 'active' : ''}`}>
                <Logo className={styles.logoImage} />
                <ul className={styles.nav_menu}>
                    <li><a href="">회사 소개</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">고객센터</a></li>
                    <li><a href="">자주 묻는 질문</a></li>
                    <li><a href="">토스인증서</a></li>
                    <li><a href="">채용</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;