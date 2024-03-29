
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

const AssignmentCard = ({ assignment, refetch }) => {
    
    const [rotate, setRotate] = useState(false)
    const navigate = useNavigate();
    const handleUpdate=()=>{
       navigate(`/updateAssignment/${assignment._id}`)
    }
    const handleView = ()=>{
        navigate(`/viewAssignment/${assignment._id}`)
    }
    const handleDelete =async(id)=>{
      try{
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://knowledge-junction-server-side.vercel.app/api/v1/deleteAssignment/${id}?uEmail=${assignment.uEmail}`, {withCredentials: true})
                .then(res=>{
                    if(res.data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          refetch()
                    }
                })
                
                        
            }
          })
      }catch(error){
            console.log(error)
      }
      
    }
    return (
        <motion.div animate={{rotate: rotate ? 360 : 0}} onClick={()=>setRotate(!rotate)}   className="card  shadow-xl">
            <figure><img className='w-full h-[300px] object-cover' src={assignment.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-emerald-600 font-bold text-2xl">
                    {assignment.title}
                    <div className="badge badge-secondary bg-emerald-700">Marks:{assignment.marks}</div>
                </h2>
                <p className='text-xl text-emerald-400 font-medium'>{assignment.description}</p>
                <p className='text-base text-emerald-400 font-normal'><span className='font-bold  text-emerald-600'>Due Date:</span>{assignment.dueDate}</p>
                <p className='text-base text-emerald-400 font-normal'><span className='font-bold text-emerald-600'>Difficulty Level:</span>{assignment.difficulty}</p>
                <div className="card-actions justify-end">
                    <div onClick={handleUpdate} className="px-3 py-3 bg-lime-600 text-white rounded-xl">update</div>
                    <div className="px-3 py-3 bg-emerald-600 text-white rounded-xl" onClick={handleView} >view</div>
                    <div onClick={()=>handleDelete(assignment._id)} className="px-3 py-3 bg-amber-400 text-white rounded-xl">Delete</div>
                </div>
            </div>
        </motion.div>
    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    refetch: PropTypes.func
}
export default AssignmentCard;