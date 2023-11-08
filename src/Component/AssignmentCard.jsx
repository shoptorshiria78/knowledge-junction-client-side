
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import axios from 'axios';


const AssignmentCard = ({ assignment, refetch }) => {
    
   
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
                axios.delete(`http://localhost:5000/api/v1/deleteAssignment/${id}`)
                .then(res=>{
                    if(res.deletedCount>0){
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
        <div className="card  shadow-xl">
            <figure><img className='w-full h-[300px] object-cover' src={assignment.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {assignment.title}
                    <div className="badge badge-secondary">Marks:{assignment.marks}</div>
                </h2>
                <p>{assignment.description}</p>
                <p>Due Date:{assignment.dueDate}</p>
                <p>Difficulty Level:{assignment.difficulty}</p>
                <div className="card-actions justify-end">
                    <div onClick={handleUpdate} className="btn btn-primary">update</div>
                    <div onClick={handleView} className="btn btn-secondary">view</div>
                    <div onClick={()=>handleDelete(assignment._id)} className="btn btn-accent">Delete</div>
                </div>
            </div>
        </div>
    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    refetch: PropTypes.func
}
export default AssignmentCard;