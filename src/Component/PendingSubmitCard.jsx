import PropTypes from 'prop-types';

const PendingSubmitCard = ({ refetch, singleData }) => {


    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className='flex'>
                <figure className='flex-1'><img className='h-[200px] w-full' src={singleData.image} alt="Shoes" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{singleData.title}</h2>
                    <p>Name:{singleData.name}</p>
                    <p>Marks:{singleData.marks}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Give Mark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
PendingSubmitCard.propTypes = {
    singleData: PropTypes.object,
    refetch: PropTypes.func,

}
export default PendingSubmitCard;