import RequestQuote from "@/components/RequestQuote";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import SocialProof from "@/components/SocialProof";

export default function Home() {
    return (
        <div className="font-futura">
            <Navbar />
            <Hero />
            <SocialProof />
            <Features />
            <RequestQuote />
            <Footer />
        </div>
    );
}
