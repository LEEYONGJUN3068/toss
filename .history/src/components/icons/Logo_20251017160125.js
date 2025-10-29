import Image from "next/image";

function Logo() {
    return(
        <>
            <Image
                src="/logo.png"
                alt="토스 로고"
                width={76}
                height={auto}
                priority
            />
        </>
    );
}

export default Logo;