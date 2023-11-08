import axios from "axios";
import assignmentPic from "../assets/createAssignmentPic.jpg"
import  { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../AuthProvider/AuthProvider"
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

const CreateAssignment = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());

    const handleCreate =(e)=>{
          
        e.preventDefault();
        const form = e.target;
        const title = form.title.value || "Not Given";
        const description = form.description.value || "Not Given";
        const marks = form.marks.value || "Not Given";
        const image = form.image.value || "Not Given";
        const date = form.date.value || "Not Given";
        const level = form.level.value || "Not Given";
        const uEmail = user.email || "Not Given";
        console.log(title, description, marks, image, date,level);
        const assignment = {title, description, marks, image, date,level,uEmail}

        axios.post("http://localhost:5000/api/v1/createAssignment",assignment)
        .then(res=> 
            {
                console.log(res.data)
                if(res.data.insertedId){
                    swal("Congratulations", "You have Created Assignment Successfully", "success");
                }
                form.reset();
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto flex mt-10">

            <form onSubmit={handleCreate} className="w-3/5 mx-auto" action="">
                <h1 className="text-2xl text-center font-bold">Create Assignment To learn</h1>
                <div className="flex  justify-between w-full ">
                    <div className="mt-5 w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input name ="title" className=" w-full h-12 px-4" type="text" />
                    </div>
                    <div className="ml-4 mt-5 w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name="description" className=" w-full h-12 px-4 " type="text" />
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <div className=" w-1/2 mt-5">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input name="marks" className=" w-full h-12 px-4 " type="text" />
                    </div>
                    <div className="ml-4 mt-5 w-1/2">
                        <label className="label">
                            <span className="label-text">Thumbnail Image URL</span>
                        </label>
                        <input name="image" className=" w-full h-12 px-4" type="text" />
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="mt-5 w-1/2">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <select name="level" className=" w-full h-12 px-4">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="ml-4  mt-5 w-1/2">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <DatePicker name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <input className="w-full  h-12 mt-5" type="submit" value="Create Assignment" />
            </form>
            <div className="ml-5 w-2/5">
                <img src={assignmentPic} alt="" />
            </div>
        </div>
    );
};

export default CreateAssignment;