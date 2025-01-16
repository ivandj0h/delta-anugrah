import Image from "next/image";

const SocialProof = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 mx-4 my-20">
            <div className="flex justify-center">
                <Image src="/images/astra.jpeg" width={100} height={100} />
            </div>
            <div className="flex justify-center">
                <Image src="/images/hyundai.png" width={100} height={100} />
            </div>
            <div className="flex justify-center">
                <Image src="/images/isuzu.png" width={100} height={100} />
            </div>
            <div className="flex justify-center">
                <Image src="/images/suzuki.jpeg" width={100} height={100} />
            </div>
        </div>
    );
};

export default SocialProof;
