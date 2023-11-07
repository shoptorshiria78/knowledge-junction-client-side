import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import swal from 'sweetalert';

const PendingSubmitCard = ({ refetch, singleData }) => {

    const [oMarks, setOMarks] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const handleSubmit = () => {
          const status = "completed";
          const inputFile = singleData.inputFile;
          const inputText = singleData.inputText;
          const uEmail = singleData.uEmail;
          const image = singleData.image;
          const title = singleData.title;
          const marks = singleData.marks;
          const name = singleData.name; 
          const updatedData ={ oMarks, feedback, status,inputFile,inputText,uEmail,image,title,marks,name};
          console.log(updatedData)

          axios.patch('http://localhost:5000/api/v1/updateSubmittedAssignmentStatus', updatedData)
          .then(res=>{
            console.log(res.data)
            if(res.data.upsertedId){
                swal("Congratulations", "You have updated Assignment Successfully", "success");
                refetch();
            }
           
            
        }
            )
         .catch(error=>{
            console.log(error)
         })  
    }

    return (
        <div className="border border-gray-400  bg-base-100  my-10">
            <div className='flex'>
                <div className='flex-1'>
                    <img className='h-[220px] object-fill w-full' src={singleData.image} alt="Shoes" /></div>
                <div className="card-body flex-1">
                    <h2 className="card-title">{singleData.title}</h2>
                    <p>Name:{singleData.name}</p>
                    <p>Marks:{singleData.marks}</p>

                    {/* Modal Section */}

                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Mark</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                        <div className="modal-box flex-col">
                            <h1>Submit Your Assignment</h1>
                            <div className="modal-action">
                                <form method="dialog" encType="multipart/form-data">
                                    <a href={singleData.inputFile}>PDF file:{singleData.inputFile}</a>
                                    <p>Note:{singleData.inputText}</p>
                                    <label className="label">
                                        <span className="label-text">Obtained Marks</span>
                                    </label>
                                    <input onChange={(e)=>setOMarks(e.target.value)} name="marks" type="text"></input>
                                    <label className="label">
                                        <span className="label-text">FeedBack</span>
                                    </label>
                                    <textarea onChange={(e)=>setFeedback(e.target.value)} className="mt-2" name="feedback" id="" cols="40" rows="3"></textarea>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={handleSubmit} className="btn">Submit</button>
                                </form>
                            </div>

                        </div>

                    </dialog>
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