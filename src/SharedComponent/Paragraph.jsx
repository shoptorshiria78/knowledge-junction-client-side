import PropTypes from 'prop-types';

const Paragraph = ({children}) => {
    return (
        <div className=" ">
            <h2 className="text-xl font-medium text-center my-4 text-green-500">{children}</h2>
            
        </div>
    );
};
Paragraph.propTypes = {
    children: PropTypes.node,
   
}
export default Paragraph;