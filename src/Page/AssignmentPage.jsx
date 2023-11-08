import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Component/AssignmentCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



const AssignmentPage = () => {

    const { count } = useLoaderData()
   
     const [allAssignment, setAllAssignment] = useState([])
    const [presentPage, setPresentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const { refetch} = useQuery({
        queryKey:["AllAssignmentCreated"],
        queryFn:async()=>{
            const AllAssignmentCreated = await fetch (`https://knowledge-junction-server-side.vercel.app/api/v1/all/getAllAssignments?page=${presentPage}&size=${itemsPerPage}`);
            const data = await AllAssignmentCreated.json();
            setAllAssignment(data)
             return data;
        }
        
    });

   

    const handleLevel = (e) => {
        if (e.target.value === "Easy") {
            axios(`https://knowledge-junction-server-side.vercel.app/api/v1/all/getAllAssignments/Easy?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                   
                })

        }
        if (e.target.value === "Medium") {
            axios(`https://knowledge-junction-server-side.vercel.app/api/v1/all/getAllAssignments/Medium?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                    
                })
        }
        if (e.target.value === "Hard") {
            axios(`https://knowledge-junction-server-side.vercel.app/api/v1/all/getAllAssignments/Hard?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                   
                })
        }
        if (e.target.value === "All") {
            axios(`https://knowledge-junction-server-side.vercel.app/api/v1/all/getAllAssignments?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                   
                })
        }
    }

    

    console.log(count, allAssignment);
    console.log(count)
    const handleItemPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setPresentPage(0)
    }
    const handlePrevious = () => {
        if (presentPage > 0) {
            setPresentPage(presentPage - 1);
        }
    }

    const handleNext = () => {
        if (presentPage < pages.length) {
            setPresentPage(presentPage + 1);
        }
    }


    return (
        <div className="w-full max-w-[1200px] mx-auto mt-10">
              <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/tqBfcxT/study-Banner.jpg)' }}>
               

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        
                        <h1 className="text-emerald-200 text-5xl my-4 font-bold">Coursework Assignments</h1>
                        <p className="text-emerald-200 text-2xl font-medium">Streamline your academic journey with our assignment page. Easily manage, track, and submit coursework, projects, and homework online.</p>
                        
                        
                    </div>
                </div>
            </div>
            <div className="my-10 text-center">
                <h1 className="text-emerald-700 font-bold text-xl"> Difficulty Level: <select onChange={handleLevel} className=" bg-emerald-600 text-white w-28 rounded-xl px-3 py-1" name="" id="">
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>


                </select> </h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    allAssignment.map(assignment => <AssignmentCard key={assignment._id}
                        refetch={refetch}
                        assignment={assignment}></AssignmentCard>)
                }
            </div>
            <div className="my-10 space-x-3 text-center">
                <button onClick={handlePrevious} className="px-3 py-3 bg-emerald-600 text-white rounded-xl">Previous</button>
                {

                    pages.map(page => <button
                        className={presentPage === page ? "px-3 py-3 bg-amber-400 text-white rounded-xl" : "px-3 py-3 bg-lime-600 text-white rounded-xl"}
                        onClick={() => setPresentPage(page)}
                        key={page}
                    >{page}</button>)

                }
                <button onClick={handleNext} className="px-3 py-3 bg-emerald-600 text-white rounded-xl">Next</button>
                <select className="bg-orange-400 text-white w-16 h-10 rounded-xl" onChange={handleItemPerPage} value={itemsPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                </select>
            </div>
        </div>
    );
};


export default AssignmentPage;