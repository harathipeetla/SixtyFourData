import {useState} from 'react'

import {
  FaSearch,
  FaRegQuestionCircle,
  FaRegCalendarCheck,
  FaBuilding,
} from 'react-icons/fa'

import {
  PiTelevisionSimpleBold,
  PiCurrencyCircleDollarFill,
} from 'react-icons/pi'

import {IoMdSettings} from 'react-icons/io'

import {NavLink} from 'react-router-dom'

import './index.css'

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      id: 1,
      path: '/',
      name: 'television',
      icon: <PiTelevisionSimpleBold />,
    },
    {
      id: 2,
      path: '/doubt',
      name: 'doubt?',
      icon: <FaRegQuestionCircle />,
    },
    {
      id: 3,
      path: '/analytics',
      name: 'Schedulers',
      icon: <FaRegCalendarCheck />,
    },
    {
      id: 4,
      path: '/comment',
      name: 'Events',
      icon: <FaBuilding />,
    },
    {
      id: 5,
      path: '/product',
      name: 'Earnings',
      icon: <PiCurrencyCircleDollarFill />,
    },
    {
      id: 6,
      path: '/productList',
      name: 'Settings',
      icon: <IoMdSettings />,
    },
  ]
  return (
    <div className="container">
      <div style={{width: isOpen ? '200px' : '50px'}} className="sidebar">
        <div className="top_section">
          <div style={{marginLeft: isOpen ? '50px' : '0px'}} className="bars">
            <FaSearch onClick={toggle} />
          </div>
        </div>
        {menuItem.map(item => (
          <NavLink
            to={item.path}
            key={item.id}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{display: isOpen ? 'block' : 'none'}}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
