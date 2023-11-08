import Paragraph from "./Paragraph";
import Title from "./Title";


const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/MZC8Jjg/study-Banner3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        
                        <Title>Your Path to Academic Success Starts Here</Title>
                        <Paragraph>Join the Study Revolution: Elevate your learning, connect with like-minded peers, and empower your academic journey. Discover excellence today.</Paragraph>
                        
                        <button className="px-4 py-2 bg-green-600 text-white rounded">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;