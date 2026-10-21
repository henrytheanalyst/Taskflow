import { useState } from 'react';
import './Welcome.css'
function Welcome(){
    const [openForm,setOpenForm]=useState(false);
    const [title,setTitle]=useState("");
    const [description,setDesciption]=useState("");
    const [date,setDate]=useState("");
    const [status,setStatus]=useState("todo");
     function handleSubmit(e){
        e.preventDefault();
     }
    return(
        <section className="eyes">
            <div className="eyebrow">
                <h2 className='date'>{new Date().toDateString()}</h2>
                <h2 className='subtitle'>My Tasks</h2>
                <p>Stay focused and keep your work moving forward</p>
            </div>
            <button className='addtaskbtn' onClick={()=>setOpenForm(!openForm)} type='button'><i className="ri-add-line"></i>Add Task</button>
            {openForm && (
                    <div className="open-area" onClick={()=>setOpenForm(false)} >
                    <form 
                        className="form" 
                        onSubmit={handleSubmit} 
                        onClick={(e)=>e.stopPropagation()}>
                        <h2>Add a new Task</h2>
                        <div className="form-group">
                            <label>Task Title</label>
                            <input type="text" placeholder='What needs to be done?' onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea  cols="30" rows="10" placeholder='Add a few dateils about this task' onChange={(e)=>setDesciption(e.target.value)}></textarea>
                        </div>
                        <div className="date-status">
                            <div className="date-input">
                                <label>Due Date</label>
                                <input type="date" onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                           <div className="status-input">
                             <label>Status</label>
                                <select onChange={(e)=>setStatus(e.target.value)}>
                                    <option value="todo" >To Do</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="done">Done</option>
                                </select>
                        </div>
                       
                        </div>
                        <div className="btns">
                            <button className='cancel-btn' type='button' onClick={()=>setOpenForm(false)}>Cancel</button>
                             <button type='submit' className='save-btn'>Save</button>
                        </div>
                    </form>
                    
                </div>
            )}
        </section>
    );
}
export default Welcome;