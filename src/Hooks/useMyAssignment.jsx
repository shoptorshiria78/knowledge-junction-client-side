import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useMyAssignment = () => {
    const {user} = useContext(AuthContext)
    const {data:myAssignmentSubmission, isLoading, isFetching, refetch} = useQuery({
        queryKey:["myAssignmentSubmission"],
        queryFn:async()=>{
            const myAssignmentSubmission = await fetch (`https://knowledge-junction-server-side.vercel.app/api/v1/mySubmittedAssignment?uEmail=${user?.email}`);
            return await myAssignmentSubmission.json();
        }
    });
 return { myAssignmentSubmission, isLoading, isFetching, refetch};
};

export default useMyAssignment;