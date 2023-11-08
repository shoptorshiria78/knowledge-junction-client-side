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
            const AllAssignmentCreated = await fetch (`http://localhost:5000/api/v1/all/getAllAssignments?page=${presentPage}&size=${itemsPerPage}`);
            const data = await AllAssignmentCreated.json();
            setAllAssignment(data)
             return data;
        }
        
    });

   

    const handleLevel = (e) => {
        if (e.target.value === "Easy") {
            axios(`http://localhost:5000/api/v1/all/getAllAssignments/Easy?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                   
                })

        }
        if (e.target.value === "Medium") {
            axios(`http://localhost:5000/api/v1/all/getAllAssignments/Medium?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                    
                })
        }
        if (e.target.value === "Hard") {
            axios(`http://localhost:5000/api/v1/all/getAllAssignments/Hard?page=${presentPage}&size=${itemsPerPage}`)
                .then(res => {
                    setAllAssignment(res.data)
                   
                })
        }
        if (e.target.value === "All") {
            axios(`http://localhost:5000/api/v1/all/getAllAssignments?page=${presentPage}&size=${itemsPerPage}`)
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
        <div >

            <div className="my-10 text-center">
                <h1> Difficulty Level: <select onChange={handleLevel} className=" bg-cyan-600 text-white w-28 rounded-xl px-3 py-1" name="" id="">
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>


                </select> </h1>
            </div>
            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    allAssignment.map(assignment => <AssignmentCard key={assignment._id}
                        refetch={refetch}
                        assignment={assignment}></AssignmentCard>)
                }
            </div>
            <div className="my-10 space-x-3 text-center">
                <button onClick={handlePrevious} className="btn btn-primary">Previous</button>
                {

                    pages.map(page => <button
                        className={presentPage === page ? "btn-primary w-10 rounded-xl" : "btn-accent w-10 rounded-xl"}
                        onClick={() => setPresentPage(page)}
                        key={page}
                    >{page}</button>)

                }
                <button onClick={handleNext} className="btn btn-primary">Next</button>
                <select className="bg-blue-500 text-white w-10 h-6 rounded-xl" onChange={handleItemPerPage} value={itemsPerPage} name="" id="">
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