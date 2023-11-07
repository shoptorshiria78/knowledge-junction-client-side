import Lottie from "lottie-react";
import useMyAssignment from "../Hooks/useMyAssignment";
import loadingAnimation from "../assets/loding animation.json"
import MySubmissionCard from "../Component/MySubmissionCard";

const MySubmissionPage = () => {
    const { myAssignmentSubmission, isLoading}= useMyAssignment();

    if(isLoading){
        return <Lottie animationData={loadingAnimation}></Lottie>
    }
    return (
        <div>
            <div>
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