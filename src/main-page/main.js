import './layout.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return(
        <Fragment>
        <div>
            <h2 className="head">Welcome To App World</h2>
            <hr className='main-hr'/>
            <section className='main-section'>
                <div>
                    <h4 className='list-head'>Educational Games</h4>
                    <hr className='sub-hr'/>
                    <ul>
                        <li><Link className='link' to={'/alphabate-game'}>Alphabet Game</Link></li>
                        <li><Link className='link' to={'/tajweed-master'}>Tajweed Master</Link></li>
                        <li><Link className='link' to={'/mini-math-mind'}>Mini-Math-Mind</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='list-head'>Class Practice</h4>
                    <hr className='sub-hr'/>
                    <ul>
                        <li><Link className='link' to={'/crud-opration'}>CRUD Opration</Link></li>
                        <li><Link className='link' to={'/tajweed-master'}>Tajweed Master</Link></li>
                        <li><Link className='link' to={'/mini-math-mind'}>Mini-Math-Mind</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='list-head'>My Work</h4>
                    <hr className='sub-hr'/>
                    <ul>
                        <li><Link className='link' to={'/alphabate-game'}>Alphabet Game</Link></li>
                        <li><Link className='link' to={'/tajweed-master'}>Tajweed Master</Link></li>
                        <li><Link className='link' to={'/mini-math-mind'}>Mini-Math-Mind</Link></li>
                    </ul>
                </div>
            </section>
        </div>
        </Fragment>
    );
}

export default Head;