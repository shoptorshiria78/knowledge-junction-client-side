import Lottie from "lottie-react";

import animationLoading from "../assets/loding animation.json"
import PendingSubmitCard from "../Component/PendingSubmitCard";
import usePendingSubmission from "../Hooks/usePendingSubmission";

const SubmittedPage = () => {
   
   const{ pendingSubmission, isLoading, refetch} = usePendingSubmission()

    if(isLoading){
        return <Lottie animationData={animationLoading}></Lottie>
    }
    console.log(pendingSubmission)
    return (
        <div className="w-full max-w-[1200px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                pendingSubmission.map(singleData=><PendingSubmitCard
                key={singleData._id}
                singleData={singleData}
                refetch={refetch}></PendingSubmitCard>)
            }
           </div>
        </div>
    );
};

export default SubmittedPage;