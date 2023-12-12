import Lottie from "lottie-react";
import useMyAssignment from "../Hooks/useMyAssignment";
import loadingAnimation from "../assets/loding animation.json"
import MySubmissionCard from "../Component/MySubmissionCard";

const MySubmissionPage = () => {
    const { myAssignmentSubmission, isLoading}= useMyAssignment();
    console.log(myAssignmentSubmission);
    if(isLoading){
        return <Lottie animationData={loadingAnimation}></Lottie>
    }
    return (
        <div className="w-full max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myAssignmentSubmission.map(singleMySubmission =><MySubmissionCard
                    key={myAssignmentSubmission._id}
                    singleMySubmission={singleMySubmission}></MySubmissionCard>)
                }
            </div>
            
        </div>
    );
};

export default MySubmissionPage;