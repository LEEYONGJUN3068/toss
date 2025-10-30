import Image from "next/image";

function HeroSection(){
    return(
        <>
            <Img src="../../../public/new_main.png" alt="메인 배너" width={100} height={100}/>
        </>
    )
}

export default HeroSection;



import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

function TextFadeIn() {
  // 1. 애니메이션을 적용할 DOM 요소를 참조하기 위해 useRef 생성
  const textRef = useRef(null);

  // 2. 마운트 시 애니메이션 실행 (useLayoutEffect 사용)
  useLayoutEffect(() => {
    // 3. GSAP 애니메이션 적용
    // textRef.current가 바로 <h1 /> 요소를 가리킵니다.
    gsap.fromTo(
      textRef.current, // 타겟
      { 
        // 시작 상태 (애니메이션 전)
        opacity: 0,  // 투명하게
        y: 20        // 20px 아래에서
      }, 
      { 
        // 끝 상태 (애니메이션 후)
        opacity: 1,  // 불투명하게
        y: 0,        // 제자리로
        duration: 1, // 1초 동안
        ease: 'power3.out' // 부드러운 이징 효과
      }
    );

    // 4. 의존성 배열에 빈 배열([])을 넣어 마운트 시 1회만 실행
  }, []); 

  return (
    <div>
      {/* 5. h1 태그에 ref를 연결 */}
      <h1 ref={textRef}>
        안녕하세요! GSAP로 나타납니다.
      </h1>
    </div>
  );
}

export default TextFadeIn;