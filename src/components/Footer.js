import Link from "next/link";
import InstagramLogo from "../../public/svg/instagram";
import LinkedInLogo from "../../public/svg/linkedin";
import Whatsapp from "../../public/svg/whatsapp";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-100 py-4">
            <div className="mx-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <a href="tel:+62216670889">+62216670889</a>
                        </div>
                        <a href="mailto:admin@deltaanugrah.com">
                            admin@deltaanugrah.com
                        </a>
                        <div className="text-sm text-gray-500">
                            © 2023 Delta Anugrah.
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link href="https://www.linkedin.com/">
                            <div className="ml-4">
                                <LinkedInLogo />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
