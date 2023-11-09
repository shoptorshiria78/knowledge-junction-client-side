import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";
import Title from "../SharedComponent/Title";
import Paragraph from "../SharedComponent/Paragraph";


const ViewAssignment = () => {

    const { user } = useContext(AuthContext);
    const assignmentData = useLoaderData()
    const navigate = useNavigate()
    console.log(assignmentData);

    const [file, setFile] = useState();
    const [text, setText] = useState();

    const handleFileInput = (e) => {
        const file = e.target.value;
        setFile(file);

    }
    const handleTextArea = (e) => {
        const textArea = e.target.value;
        setText(textArea);

    }
    const handleSubmit = () => {

        const inputFile = file || "Not Given";
        const inputText = text || "Not Given";
        const uEmail = user?.email || "Not Given";
        const status = "pending";
        const image = assignmentData.img;
        const title = assignmentData.title;
        const marks = assignmentData.marks;
        const name = user?.displayName
        const oMarks = "Not Given";
        const feedback = "Not Given";
        console.log(inputFile, inputText, uEmail, status);
        const submittedData = {
            inputFile,
            inputText,
            uEmail,
            status,
            image,
            title,
            marks,
            name,
            oMarks,
            feedback
        }

        axios.post('https://knowledge-junction-server-side.vercel.app/api/v1/submittedAssignment', submittedData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    swal("Congratulations", "You have Submitted Assignment Successfully", "success");
                }
                navigate('/allAssignment')

            })
            .then(error => {
                console.log(error)
            })

    }

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full max-w-[1200px] mx-auto">
            <div className="flex-1 my-5">
                <Title>{assignmentData.title}</Title>
                <Paragraph>{assignmentData.description}</Paragraph>
                <Paragraph>{assignmentData.difficulty}</Paragraph>
                <h1 className="text-2xl text-center  font-bold text-amber-700">Some Instructions For the Assignment</h1>
                <ul className="text-base font-normal text-amber-400 ml-5 mt-4">
                    <li>1.Assignment Should be Submitted within due Date mentioned here.If anyone missed the deadline will get 5 marks less for late Submission. </li>
                    <li>2.The Assignment should be submitted in pdf form with in the given field. </li>
                    <li>
                        3.If  a person take the assignment , he or she has to complete their assignment alone. Any one cannot take help from others. If we can detect that it has been copied the assignment taker will get 0 marks for his or her this types of attempt.
                    </li>
                </ul>

                <Paragraph>Marks: {assignmentData.marks}</Paragraph>
                <Paragraph> Due Date: {assignmentData.dueDate}</Paragraph>

                {/* MODAL SECTION */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="px-4 py-3 bg-amber-500 text-white rounded-xl w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                    <div className="modal-box flex-col">
                        <h1>Submit Your Assignment</h1>
                        <div className="modal-action">
                            <form method="dialog" encType="multipart/form-data">
                                <label className="label">
                                    <span className="label-text">Submit PDF link</span>
                                </label>
                                <input className="border-2 border-gray-400" onChange={handleFileInput} type="url" name="url" id="" />
                                {file &&
                                    <p className="text-green-500 mt-2">Selected file: {file}</p>
                                }
                                <label className="label">
                                    <span className="label-text">Write Note</span>
                                </label>
                                <textarea className="mt-2 px-3 border-2 border-gray-400" onChange={handleTextArea} name="" id="" cols="40" rows="3"></textarea>
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handleSubmit} className="btn">Submitted</button>
                            </form>
                        </div>

                    </div>

                </dialog>
            </div>
            <div className="flex-1  mt-10 mb-5" >
                <img className="h-screen object-cover" src={assignmentData.img} alt="" />
            </div>

        </div>
    );
};

export default ViewAssignment;