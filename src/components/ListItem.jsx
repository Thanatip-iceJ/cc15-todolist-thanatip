import React from 'react'
import './ListItem.scss'
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';


function ListItem(props) {
  return (
    <li className='list__item'>
    <span className="list__item__icon">
      {props.icon}
    </span>
    <p className="list__item__text">{props.text}</p>
  </li>
  )
}

export default ListItem