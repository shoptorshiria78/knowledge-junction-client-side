import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import swal from 'sweetalert';
import { pdfjs } from 'react-pdf';
import ShowPdfComp from './ShowPdfComp';
import pdf from "../assets/assignment_category_0001 pdf.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    

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

          axios.put(`https://knowledge-junction-server-side.vercel.app/api/v1/updateSubmittedAssignmentStatus/${singleData._id}`, updatedData)
          .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
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
        <div className="border bg-lime-100  my-10">
            <div className='flex'>
                <div className='flex-1'>
                    <img className='h-[220px] object-fill w-full' src={singleData.image} alt="Shoes" /></div>
                <div className="card-body flex-1">
                    <h2 className="card-title text-xl text-emerald-600 font-bold">{singleData.title}</h2>
                    <p className='text-lg text-lime-400'><span className='font-bold'>Name:</span>{singleData.name}</p>
                    <p className='text-lg text-lime-400'><span className='font-bold'>Marks:</span>{singleData.marks}</p>

                    {/* Modal Section */}

                    <button className="w-full py-3 bg-amber-500 text-white rounded-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Mark</button>
                    <dialog id="my_modal_5" className="modal modal-bottom  md:modal-middle">

                        <div className="modal-box  flex-col">
                            <h1>Submit Your Assignment</h1>
                            <div className="modal-action">
                                <form className='w-[350px]' method="dialog" encType="multipart/form-data">
                                    <a href={singleData.inputFile}>PDF file:{singleData.inputFile}</a>
                                    <p>Note:{singleData.inputText}</p>
                                   <ShowPdfComp>{pdf}</ShowPdfComp>
                                    <label className="label">
                                        <span className="label-text">Obtained Marks</span>
                                    </label>
                                    <input className='border-2 border-gray-400' onChange={(e)=>setOMarks(e.target.value)} name="marks" type="text"></input>
                                    <label className="label">
                                        <span className="label-text">FeedBack</span>
                                    </label>
                                    <textarea className='border-2 border-gray-400 mt-2' onChange={(e)=>setFeedback(e.target.value)}  name="feedback" id="" cols="40" rows="3"></textarea>
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