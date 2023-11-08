import PropTypes from 'prop-types';

const MySubmissionCard = ({ singleMySubmission }) => {
    return (
        <div className=" bg-lime-200 my-10">
            <div className=''>
                <div className="">
                    <img className='h-[220px] object-fill w-full' src={singleMySubmission.image} alt="Shoes" /></div>
                <div className="card-body ">
                    <h2 className="card-title text-2xl text-emerald-600 font-bold">{singleMySubmission.title}</h2>
                    <p className='text-lg font-medium text-emerald-400'><span className='font-bold text-emerald-600'>Name:</span>{singleMySubmission.name}</p>
                    <p className='text-lg font-medium text-emerald-400'><span className='font-bold text-emerald-600'>Marks:</span>{singleMySubmission.marks}</p>
                    <p className='text-lg font-medium text-emerald-400'><span className='font-bold text-emerald-600'>Obtained Marks:</span>{singleMySubmission.oMarks}</p>

                   
                   
                </div>
            </div>
        </div>
    );
};

MySubmissionCard.propTypes = {
    singleMySubmission: PropTypes.object
}

export default MySubmissionCard;