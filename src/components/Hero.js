import Image from "next/image";
import Gradient from "./Gradient";

const Hero = () => {
    return (
        <div className="flex justify-between">
            <Gradient />
            <div className="flex justify-between pt-60 ml-8">
                <div className="flex-1">
                    <div className="font-futura-bold text-5xl md:text-7xl font-bold">
                        We supply all your needs
                    </div>
                    <div className="font-futura-bold text-5xl md:text-7xl font-bold mt-2"></div>
                    <div className="mt-8 mr-8">
                        We are committed to delivering superior welding
                        solutions, where each weld reflects our expertise and
                        quality dedication.
                    </div>
                    <div className="flex mt-10">
                        <div>
                            <button
                                type="submit"
                                className="bg-primary text-white font-bold py-2 px-4 border-primary rounded-full">
                                Request a quote
                            </button>
                        </div>
                        <a
                            className="font-bold py-2 px-4 rounded-full border border-gray-300 ml-4"
                            href="/PDF/PRODUCTCATALOG.pdf"
                            target="_blank">
                            Discover our products
                        </a>
                    </div>
                </div>
                <div className="hidden sm:flex flex-1 justify-center items-center">
                    <Image
                        src="/images/nice.png"
                        alt="Logo"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
