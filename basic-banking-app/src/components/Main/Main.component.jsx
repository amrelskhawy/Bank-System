import React from 'react'
import Photo from '../../assets/imgs/photo.jpg'
import { Link } from 'react-router-dom'
import './Main.component.scss'

const Main = () => {
    return (
        <main>
            <div className='content'>
                <h2 className='title'>
                    Make your transactions<br /><span>easier.</span>
                </h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatum, distinctio facilis ducimus neque expedita repellendus ab nisi porro maxime nostrum praesentium beatae molestiae iure ipsam quos ipsum quasi sunt.</p>

                {/*<div className='btns'>
                    <button>
                        <Link to='customers'>
                        customers
                        </Link>
                    </button>
                    <button>
                        <Link to='transactions'>
                        Transactions
                        </Link>
                    </button>
                </div>*/}
            </div>
            <div className='image'>
                <div className='img-container'>
                    <img src={Photo} alt='' className='img' />
                </div>
                <div className='circle'></div>
            </div>
        </main>
    )
}

export default Main
