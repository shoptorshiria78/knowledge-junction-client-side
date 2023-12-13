import { useQuery } from "@tanstack/react-query";


const useAllquiz = () => {
    const {data:allQuiz, isLoading, isFetching, refetch} = useQuery({
        queryKey:["allQuiz"],
        queryFn:async()=>{
            const allQuiz = await fetch (`https://knowledge-junction-server-side.vercel.app/api/v1/getQuiz`, {credentials:"include"});
            return await allQuiz.json();
        }
    });
 return { allQuiz, isLoading, isFetching, refetch};
};

export default useAllquiz;