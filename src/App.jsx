import { useState, useEffect } from 'react'
import Abouts from './components/About/Mainabout.js'
import Contacts from './components/Contacts/Contacts.js'
import Service  from './components/Services/Service.js'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import User from './components/User/User'
import Teacher from './components/Teacher/Teacher.js'
import Registration from './components/Registration/Registration.js'
import Teacherlogin from './components/Login/Teacher/TeacherLogin.js'
import ServiceLogin from './components/Login/ServiceProvider/Serviceelogin.js'
import TeacherRegis from './components/Registration/TeacherRegistration/Registration.js'
import ServicesRegis from './components/Registration/ServiceProvider/Registration.js'
import Nav from './components/Navigation/Mainnav'
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forget from './components/Forget/Forget.js'
import Newpass from './components/Newpassword/Newpass.js'
import Teacherlist from './components/Teacherlist/Teacherlist'
import Logout from './components/Logout/Logout'
import Profile from './Profile/Profile'
import ViewRequest from './components/Teacher/Teacherview/Teacherview'
import ServiceRegistration from './components/Registration/ServiceProvider/Registration'
import {NotificationContainer, NotificationManager} from 'react-notifications';
/* export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
}) */

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div >
      <NotificationContainer />
     <Nav />
      <div>
      {/* <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
       <Switch>
          <Route exact path="/" component={Home}  />
           
          <Route exact path="/about" component={Abouts} />
          
          <Route exact path="/services"   component={Service}  />
          <Route exact path="/contact" component={Contacts}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path="/registration" component={Registration}  />
          <Route exact path="/user" component={User}  />
          <Route exact path="/teacher" component={Teacher}  />
          <Route exact path="/teacher/login" component={Teacherlogin}  />
          <Route exact path="/service/login" component={ServiceLogin}  />
          <Route exact path="/service/registration" component={ServiceRegistration}  />
          <Route exact path="/teacher/registration" component={TeacherRegis}  />
          <Route exact path="/user/forget" component={Forget}  />
          <Route exact path="/set-password/:id" component={Newpass}  />
          <Route exact path="/teacherlist" component={Teacherlist}  />
          <Route exact path="/Userprofile" component={Profile}  />
          <Route exact path="/teacher/viewrequest" component={ViewRequest}  />
          <Route exact path="/logout" component={Logout}  />
        </Switch>
        </div>
    </div>
  )
}

export default App
