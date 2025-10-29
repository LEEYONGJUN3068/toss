import Image from "next/image";

function Logo() {
    return(
        <>
            <Image
                src="/../../../public/logo.png"
                alt="토스 로고"
                width={68}
                height={20}
                priority
            />
        </>
    );
}

export default Logo;