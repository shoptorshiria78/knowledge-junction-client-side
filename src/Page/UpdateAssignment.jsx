import { useState } from "react";
import DatePicker from "react-datepicker";
import updatePic from "../assets/updatePic.jpg"
import animationLoading from "../assets/loding animation.json"
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Lottie from "lottie-react";


const UpdateAssignment = () => {
    const navigation = useNavigation();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const assignmentData = useLoaderData()

    if (navigation.loading === "loading") {
        return <Lottie className="h-screen" animationData={animationLoading}></Lottie>
    }
    console.log(assignmentData);

    

    const handleUpdate = (e) => {

        e.preventDefault();
        const form = e.target;
        const img = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const difficulty = form.level.value;
        const dueDate = form.date.value;
        const uEmail = assignmentData.uEmail;

        console.log(title, description, marks, img, dueDate, difficulty, uEmail);
        const assignment = { img, title, description, marks, difficulty,dueDate, uEmail}

        axios.put(`https://knowledge-junction-server-side.vercel.app/api/v1/updateAssignment/${assignmentData._id}?uEmail=${assignmentData.uEmail}`, assignment, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    swal("Congratulations", "You have updated Assignment Successfully", "success");
                }
                navigate('/allAssignment')

            }
            )
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row mt-10">
            <div className="mr-5 w-full flex-1">
                <img src={updatePic} alt="" />
            </div>
            <div className="w-full flex-1 ">
            <h1 className="text-center text-3xl font-bold text-amber-500 ">Update Assignment </h1>
                <form onSubmit={handleUpdate} className="w-full my-4 bg-emerald-100 px-5 py-4 " action="">
                       <div className="flex  justify-between w-full ">
                        <div className="mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Title</span>
                            </label>
                            <input defaultValue={assignmentData.title} name="title" className=" w-full h-12 px-4" type="text" />
                        </div>
                        <div className="ml-4 mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Description</span>
                            </label>
                            <input defaultValue={assignmentData.description}
                                name="description" className=" w-full h-12 px-4 " type="text" />
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className=" w-1/2 mt-5">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Marks</span>
                            </label>
                            <input defaultValue={assignmentData.marks} name="marks" className=" w-full h-12 px-4 " type="text" />
                        </div>
                        <div className="ml-4 mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Thumbnail Image URL</span>
                            </label>
                            <input defaultValue={assignmentData.img} name="image" className=" w-full h-12 px-4" type="text" />
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Difficulty Level</span>
                            </label>
                            <select defaultValue={assignmentData.difficulty} name="level" className=" w-full h-12 px-4">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-base lg:text-xl">Due Date</span>
                            </label>
                            <DatePicker defaultValue={assignmentData.dueDate} name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <input className="w-full bg-amber-500 text-white rounded-xl font-bold text-xl h-12 mt-5" type="submit" value="Update Assignment" />
                </form>
            </div>

        </div>
    );
};

export default UpdateAssignment;