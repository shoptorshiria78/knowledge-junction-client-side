
import PropTypes from 'prop-types';

const Title = ({children}) => {
    return (
        <div className=" ">
            <h2 className="text-5xl font-bold text-center my-4 text-green-600">{children}</h2>
            
        </div>
    );
};
Title.propTypes = {
    children: PropTypes.node,
   
}
export default Title;