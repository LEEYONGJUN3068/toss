import Image from "next/image";

function Logo({ logoImage }) {
    return(
        <>
            <Image
                src="/logo.png"
                alt="토스 로고"
                width={76}
                height={20}
                className="logoImage"
                priority
            />
        </>
    );
}

export default Logo;