import PropTypes from 'prop-types';


const AssignmentCard = ({ assignment }) => {
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
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">update</div>
                    <div className="badge badge-outline">view</div>
                </div>
            </div>
        </div>
    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object
}
export default AssignmentCard;