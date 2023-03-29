import { Link } from "react-router-dom";
import Add from "./add";

const Math = () => {
    return(
        <>
        <div className='games-head'>
            <h4><Link className='back-link' to={'/'}><span><i class='fas fa-arrow-left'></i></span>    Go Back To Home</Link></h4>
            <h1 className='header'>Mini-Math-Mind</h1>
        </div>
        <div><Add /></div>
        
        </>
        
    )
}
export default Math;