import Image from "next/image";

function HeroSection(){
    return(
        <>
            <Image 
                src="/new_main.png"
                alt="메인 배너" 
                width={1920}
                height={1080}
                priority
            />
        </>
    )
}

export default HeroSection;