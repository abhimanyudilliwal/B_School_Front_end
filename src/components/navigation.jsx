import { Link } from "react-router-dom"
import './navigation.css'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default '>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Blind School
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse' id='nava'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/' /* href='#features' */ className='page-scroll'>
                Features
              </Link>
            </li>
            <li>
              <Link to='/about' /* href='#about' */ className='page-scroll'>
                About
              </Link>
            </li>
            <li>
              
              <Link to='/about' /* href='#about' *//*  className='page-scroll dropbtn'  */class="dropbtn">
             Service<i class="fa fa-caret-down"></i>
                </Link>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
          
            </li>
              <li>
                <Link to='/login' /* href='#portfolio' */ className='page-scroll'>
                  login
              </Link>
              </li>
              <li>
                <Link to='/regis' /* href='#testimonials' */ className='page-scroll'>
                  Registration
              </Link>
              </li>
              <li>
                <Link to='/user' /* href='#team'  */className='page-scroll'>
                User
              </Link>
              </li>
              <li>
                <Link to='/teacher' /* href='#team' */ className='page-scroll'>
         Teacher
              </Link>
              </li>
              <li>
                <Link to='/contact' /* href='#contact' */ className='page-scroll'>
                  Contact
              </Link>
              </li>
          </ul>
        </div>
        </div>
    </nav>
  )
}
