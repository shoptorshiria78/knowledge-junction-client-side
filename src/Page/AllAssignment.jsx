import Lottie from "lottie-react";
import AssignmentCard from "../Component/AssignmentCard";
import useAllAssignment from "../Hooks/useAllAssignment";
import loadingAnimation from "../assets/loding animation.json"


const AllAssignment = () => {

    const { allAssignment, isLoading } = useAllAssignment()
     console.log(allAssignment)
     if(isLoading){
        return <Lottie className="max-h-screen" animationData={loadingAnimation}></Lottie>
     }
    return (
        <div>
            <div>
                
            </div>
            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    allAssignment.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;