import React from 'react'
import ListItem from './ListItem'

function List(props) {
  return (
    <ul className='list'>
        {props.data.map(x => 
            <ListItem 
            key={x.id}
            text={x.text}
            icon={x.icon}
            active={x.active}
            />
            )}
    </ul>
  )
}

export default List