import { useQuery } from "@tanstack/react-query";


const useAllAssignment = () => {
    const {data:AllAssignmentCreated, isLoading, isFetching, refetch} = useQuery({
        queryKey:["AllAssignmentCreated"],
        queryFn:async()=>{
            const AllAssignmentCreated = await fetch (`http://localhost:5000/api/v1/mySubmittedAssignment?uEmail=${user?.email}`, {credentials:"include"});
            return await AllAssignmentCreated.json();
        }
    });
 return { AllAssignmentCreated, isLoading, isFetching, refetch};
};

export default useAllAssignment;