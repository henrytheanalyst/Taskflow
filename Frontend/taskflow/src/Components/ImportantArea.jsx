import './ImportantArea.css'
function ImportantArea(){
return(
    <section className="important">
       <div className="important-header">
        <div className="left">
            <i className="ri-search-line"></i>
            <input  
                type="text" 
                placeholder='Search tasks'
            />
        </div>
        <div className="right">
            <button type="button">All <span>3</span></button>
            <button type="button">To Do <span>7</span></button>
            <button type="button">In Progress <span>7</span></button>
            <button type="button">Done <span>9</span></button>
            
        </div>
       </div>
    </section>
);
}
export default ImportantArea;