import './navdrop.css'


function Navdrop(props) {
    return (
        <div onClick={props.hideNav} className="navdrop"></div>
    )
}


export default Navdrop