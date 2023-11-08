import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
                <img  src={feature.img} alt="Shoes" className="rounded-xl h-[300px] w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl text-green-600">{feature.title}</h2>
                <p className='text-green-500'>{feature.description}</p>
                <div className="card-actions">
                    <button className="btn bg-green-700 px-4 py-2 rounded-xl text-white">See Details</button>
                </div>
            </div>
        </div>
    );
};
FeatureCard.propTypes = {
    feature: PropTypes.object
}
export default FeatureCard;