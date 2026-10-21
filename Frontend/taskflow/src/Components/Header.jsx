import './Header.css'
function Header(){
    return(
        <header>
            <div className="left-side-header">
                <div className="logo">
                    <i className="ri-check-line"></i>
                </div>
                <h1>TaskFlow</h1>
            </div>
            <div className="right-side-header">
                <div className="avatar">
                    HM
                </div>
                <div className="name-email">
                    <h2>Henry Maina</h2>
                    <p>henry@gmail.com</p>
                </div>
            </div>
        </header>
    );
}
export default Header;