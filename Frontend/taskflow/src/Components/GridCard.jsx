import './GridCard.css'
function CardArea(){
    return(
        <section className="cards">
            <div className="card">
                <div className="card-info">
                     <h3>Total Tasks</h3>
                     <h2>3</h2>
                </div>
                <div className="card-label">
                    <i className="ri-check-line"></i>
                </div>
            
            </div>

                <div className="card">
                    <div className="card-info">
                        <h3>To Do</h3>
                        <h2>2</h2>
                    </div>
                    <div className="gray-color">
                        
                    </div>
            
                </div>

                <div className="card">
                    <div className="card-info">
                        <h3>In Progress</h3>
                        <h2>1</h2>
                    </div>
                    <div className="yellow-color">

                    </div>
            
                </div>

                <div className="card">
                    <div className="card-info">
                        <h3>Done</h3>
                        <h2>1</h2>
                    </div>
                    <div className="green-color">

                    </div>
            
                </div>
        </section>
    );
}
export default CardArea;