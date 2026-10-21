import './Welcome.css'
function Welcome(){
    return(
        <section className="eyes">
            <div className="eyebrow">
                <h2 className='date'>{new Date().toDateString()}</h2>
                <h2 className='subtitle'>My Tasks</h2>
                <p>Stay focused and keep your work moving forward</p>
            </div>
            <button className='addtaskbtn'><i className="ri-add-line"></i>Add Task</button>

        </section>
    );
}
export default Welcome;