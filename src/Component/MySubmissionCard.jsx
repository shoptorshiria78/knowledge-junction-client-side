import PropTypes from 'prop-types';

const MySubmissionCard = ({ singleMySubmission }) => {
    return (
        <div className="border border-gray-400  bg-base-100  my-10">
            <div className='flex'>
                <div className='flex-1'>
                    <img className='h-[220px] object-fill w-full' src={singleMySubmission.image} alt="Shoes" /></div>
                <div className="card-body flex-1">
                    <h2 className="card-title">{singleMySubmission.title}</h2>
                    <p>Name:{singleMySubmission.name}</p>
                    <p>Marks:{singleMySubmission.marks}</p>

                   
                   
                </div>
            </div>
        </div>
    );
};

MySubmissionCard.propTypes = {
    singleMySubmission: PropTypes.object
}

export default MySubmissionCard;