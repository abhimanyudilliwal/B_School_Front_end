import React,{useState,useEffect} from 'react'
import './card.css'
import {Link} from 'react-router-dom'

function Card() {
  const[teacherid,setTeacherid] =useState('')
  const getuserdata = async () => {
    const user= await localStorage.getItem("teacherid")
    setTeacherid(user)
  }

 useEffect(() => {
    getuserdata()
  }, [])

    return (
        <div class="container">
         
  <main class="grid">
    <article>
      <img src="https://picsum.photos/g/600/400?image=1063" alt="Sample photo" />
      <i class="fa fa-html5"></i>
      <div class="text">
        <h3>HTML5</h3>
        <p>HTML 5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
     { teacherid ?<Link to='/teacher/viewrequest' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>:   <Link to='/teacher/login' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>}
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/g/600/400?image=1063" alt="Sample photo" />
      <i class="fa fa-css3"></i>
      <div class="text">
        <h3>CSS3</h3>
        <p>CSS helps Web developers create a uniform look across several pages of a Web site. Instead of defining the style of each table and each block of text within a page's HTML.</p>
        { teacherid ?<Link to='/teacher/viewrequest' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>:   <Link to='/teacher/login' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>}
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/g/600/400?image=1056" alt="Sample photo" />
      <i class="fa fa-code"></i>
      <div class="text">
        <h3>Source code</h3>
        <p>In computing, source code is any collection of code, possibly with comments, written using a human-readable programming language.</p>
        { teacherid ?<Link to='/teacher/viewrequest' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>:   <Link to='/teacher/login' /* href="https://codepen.io/collection/XdWJOQ/"  */ class="btn btn-primary btn-block">Here's why</Link>}
      </div>
    </article>
  </main>
</div>
    )
}

export default Card
