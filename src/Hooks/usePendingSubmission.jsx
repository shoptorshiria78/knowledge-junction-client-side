import { useQuery } from "@tanstack/react-query";


const usePendingSubmission = () => {
    const {data:pendingSubmission, isLoading, isFetching, refetch} = useQuery({
        queryKey:["pendingSubmission"],
        queryFn:async()=>{
            const pendingSubmission = await fetch ('http://localhost:5000/api/v1/allSubmittedAssignment?status=pending');
            return await pendingSubmission.json();
        }
    });
 return { pendingSubmission, isLoading, isFetching, refetch};
};

export default usePendingSubmission;