import Image from "next/image";

function Logo({className}) {
    return(
        <>
            <Image
                src="/logo.png"
                alt="토스 로고"
                width={96}
                height={29}
                className={className}
                priority
            />
        </>
    );
}

export default Logo;