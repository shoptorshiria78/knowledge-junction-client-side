import axios from "axios";
import assignmentPic from "../assets/createAssignmentPic.jpg"
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../AuthProvider/AuthProvider"
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";


const CreateAssignment = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());

    const handleCreate = (e) => {

        e.preventDefault();
        const form = e.target;
        const title = form.title.value || "Not Given";
        const description = form.description.value || "Not Given";
        const marks = form.marks.value || "Not Given";
        const img = form.image.value || "Not Given";
        const duDate = form.date.value || "Not Given";
        const difficulty = form.level.value || "Not Given";
        const uEmail = user.email || "Not Given";
        console.log(title, description, marks, img, duDate, difficulty);
        const assignment = { title, description, marks, img, duDate, difficulty, uEmail }

        axios.post("https://knowledge-junction-server-side.vercel.app/api/v1/createAssignment", assignment)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    swal("Congratulations", "You have Created Assignment Successfully", "success");
                }
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row mt-10">

            <div className="flex-1">
                <h1 className="text-center text-3xl font-bold text-emerald-500 ">Create Assignment To learn</h1>
            
                <form onSubmit={handleCreate} className="w-full my-4 bg-amber-100 px-5 py-4 " action="">
                    
                    <div className="flex  justify-between w-full ">
                        <div className="mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Title</span>
                            </label>
                            <input name="title" className=" w-full h-12 px-4" type="text" />
                        </div>
                        <div className="ml-4 mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Description</span>
                            </label>
                            <input name="description" className=" w-full h-12 px-4 " type="text" />
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className=" w-1/2 mt-5">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Marks</span>
                            </label>
                            <input name="marks" className=" w-full h-12 px-4 " type="text" />
                        </div>
                        <div className="ml-4 mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Thumbnail Image URL</span>
                            </label>
                            <input name="image" className=" w-full h-12 px-4" type="text" />
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Difficulty Level</span>
                            </label>
                            <select name="level" className=" w-full h-12 px-4">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Due Date</span>
                            </label>
                            <DatePicker name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <input className="w-full bg-emerald-500 text-white rounded-xl font-bold text-xl h-12 mt-5" type="submit" value="Create Assignment" />
                </form>
            </div>
            <div className="ml-5 flex-1">
                <img className="w-full object-cover" src={assignmentPic} alt="" />
            </div>
        </div>
    );
};

export default CreateAssignment;