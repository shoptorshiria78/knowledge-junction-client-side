
import PropTypes from 'prop-types';


const Member = ({ member }) => {
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/Cs4LwGJ/team-background.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <img className="w-20 h-20 rounded-full" src={member.pic} alt="" />
                <h2 className="card-title text-xl text-center text-emerald-300">{member.name}</h2>
                <p className="card-title text-sm  text-green-400">{member.post}</p>
                
            </div>
        </div>
    );
};

Member.propTypes = {
    member: PropTypes.object,
}


export default Member;