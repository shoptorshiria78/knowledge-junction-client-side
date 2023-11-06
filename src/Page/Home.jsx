import { useLoaderData, useNavigation } from "react-router-dom";
import loading from "../assets/loding animation.json";
import Lottie from "lottie-react";
import FeatureCard from "../Component/FeatureCard";


const Home = () => {
    const features = useLoaderData();
    const navigation = useNavigation();
    if(navigation.loading === "loading"){
        return <Lottie className="max-h-screen" animationData={loading}></Lottie>
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                features.map(feature=><FeatureCard key={feature._id} feature={feature}></FeatureCard>)
            }
        </div>
    );
};

export default Home;