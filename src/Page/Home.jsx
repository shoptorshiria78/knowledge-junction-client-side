import { useLoaderData, useNavigation } from "react-router-dom";
import loading from "../assets/loding animation.json";
import Lottie from "lottie-react";
import FeatureCard from "../Component/FeatureCard";
import Banner from "../SharedComponent/Banner";
import FAQ from "../SharedComponent/FAQ";


const Home = () => {
    const features = useLoaderData();
    const navigation = useNavigation();
    if (navigation.loading === "loading") {
        return <Lottie className="max-h-screen" animationData={loading}></Lottie>
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto mt-10">
            <Banner ></Banner>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
            <FAQ></FAQ>
        </div>

    );
};

export default Home;