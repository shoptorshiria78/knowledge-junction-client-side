import { useQuery } from "@tanstack/react-query";


const useAllAssignment = () => {
    const {data:allAssignment, isLoading, isFetching, refetch} = useQuery({
        queryKey:["allAssignment"],
        queryFn:async()=>{
            const allAssignment = await fetch ('http://localhost:5000/api/v1/all/getAllAssignments');
            return await allAssignment.json();
        }
    });
 return { allAssignment, isLoading, isFetching, refetch};
};

export default useAllAssignment;