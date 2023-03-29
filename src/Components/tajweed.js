import { Link, Routes, Route } from 'react-router-dom';
import './tajweed.css';


import Basic from './Basic';
import { BasicTest } from './Basic';


function Articulator() {
    function Button() {
        return(
            <div className='tm-main-body'>
                <Link to={'/tajweed-master/basic-articulation'}><button className='tm-main-button'>Basic Articulation</button></Link>
                <Link to={'/tajweed-master/advance-articulation'}><button className='tm-main-button'>Advance Articulation</button></Link> 
            </div>
        );
    }
    return (
        <section>
            <div className='games-head'>
                <h4><Link className='back-link' to={'/'}><span><i class='fas fa-arrow-left'></i></span>    Go Back To Home</Link></h4>
                <h1 className='header'>Tajweed Master</h1>
            </div>
            <p className='tm-main-subhead'>Points of Articulation (مخرج) is the place the letter is emitted, meaning a sound that comes out of the mouth relying on a specific place of Articulation or an approximate one.</p>
            <p className='txt-centre'>__________________________________</p>
            <Routes>
                <Route path='/' element={<Button />}></Route>
                <Route path='/basic-articulation' element={<Basic />}></Route>
                <Route path='/advance-articulation' element={<Advance />}></Route>
                <Route path='/b-test' element={<BasicTest />}></Route>
            </Routes>
        </section>
    );
}
export default Articulator;


function Advance(){
    return(
        <h1>Advance</h1>
    )
}