import Image from "next/image";

function Logo() {
    return(
        <>
            <Image
                src="/logo.png"
                alt="토스 로고"
                className="logoImage"
                priority
            />
        </>
    );
}

export default Logo;