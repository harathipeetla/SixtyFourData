import {CiCalendar} from 'react-icons/ci'
import {FaBell, FaRegClock} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import CardSlider from '../Slider'
import './index.css'

const Header = () => (
  <div className="home-container">
    <div>
      <nav>
        <div className="nav-top">
          <div className="name-container">
            <h1>Hello, Harathi</h1>
            <p className="greet">You are subscribed to Retail Plan.</p>
          </div>
          <div className="date-time-container">
            <div className="calender-container">
              <CiCalendar className="calender-icon" />
              <p className="day">Today, 24 April</p>
            </div>
            <div className="time-container">
              <FaRegClock className="clock-icon" />
              <p className="time">12:00</p>
            </div>

            <FaBell className="bell-icon" />
          </div>
        </div>
      </nav>
      <div className="content">
        <div className="card-container">
          <div className="card">
            <MdLibraryBooks color="green" className="book" />
            <h2>My Saved Library1</h2>
            <p>dd-mm-yyyy</p>
          </div>
          <div className="card">
            <MdLibraryBooks color="darkblue" className="book" />
            <h2>My Saved Library2</h2>
            <p>dd-mm-yyyy</p>
          </div>
          <div className="card">
            <MdLibraryBooks color="yellow" className="book" />
            <h2>My Saved Library3</h2>
            <p>dd-mm-yyyy</p>
          </div>
          <div className="card">
            <MdLibraryBooks color="blue" className="book" />
            <h2>My Saved Library4</h2>
            <p>dd-mm-yyyy</p>
          </div>
          <div className="card">
            <MdLibraryBooks color="violet" className="book" />
            <h2>My Saved Library5</h2>
            <p>dd-mm-yyyy</p>
          </div>
        </div>
      </div>
    </div>
    <CardSlider />
  </div>
)

export default Header
