import Image from 'next/image';
import Link from 'next/link';

const MorphMarketButton = () => {
    return (
        <div className="relative group inline-block">
            <Link href="https://www.morphmarket.com/" passHref>
                <button className="flex border-2 border-black rounded-lg py-1.5 px-2 justify-center" style={{ width: '100px', height: '35px' }}>
                    <Image
                        src="/morph-market-logo.webp"
                        alt="Morph Market Logo"
                        width={50} // Set appropriate width for the image
                        height={35} // Set appropriate height for the image
                        objectFit="contain"
                    />
                </button>
                {/* Tooltip */}
                <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-xs rounded-md py-4 px-4 shadow-lg">
                    A marketplace of trusted breeders and reptile enthusiasts.
                </div>
            </Link>
        </div>
    );
};

export default MorphMarketButton;