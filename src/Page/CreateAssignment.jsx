import assignmentPic from "../assets/createAssignmentPic.jpg"
import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleCreate =(e)=>{
          
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const date = form.date.value;
        const level = form.level.value;
        
        console.log(title, description, marks, image, date,level);
        // const assignment = {title, description, marks, image, date,level}
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