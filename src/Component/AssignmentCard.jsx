import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const AssignmentCard = ({ assignment }) => {

    const navigate = useNavigate();
    const handleUpdate=()=>{
       navigate(`/updateAssignment/${assignment._id}`)
    }
    const handleView = ()=>{
        navigate(`/viewAssignment/${assignment._id}`)
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
                </div>
            </div>
        </div>
    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object
}
export default AssignmentCard;