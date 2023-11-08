

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/1qNJLB2/cosmetic-banner.webp)' }}>
                <div className=""></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <h1 className="mb-5 mt-32 md:mt-28 text-5xl font-bold text-fuchsia-500">Your Path to Academic Success Starts Here</h1>
                        
                        <p className="mb-5 text-fuchsia-400">Join the Study Revolution: Elevate your learning, connect with like-minded peers, and empower your academic journey. Discover excellence today.</p>
                        <button className="px-4 py-2 bg-fuchsia-700 text-white rounded">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;