import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
                <img  src={feature.img} alt="Shoes" className="rounded-xl h-[300px] w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{feature.title}</h2>
                <p>{feature.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};
FeatureCard.propTypes = {
    feature: PropTypes.object
}
export default FeatureCard;