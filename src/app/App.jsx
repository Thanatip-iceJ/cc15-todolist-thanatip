import './App.scss';
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Header from '../components/Header'
import ListItem from '../components/ListItem';
import List from '../components/List';

function App() {

  const generalLists = [
    {id:1, text:'Inbox', icon: <FaInbox />, active: true},
    {id:2, text:'Today', icon: <FaCalendar />, active: false},
    {id:3, text:'Next 7 days', icon: <FaCalendarAlt />, active: false}
  ]

  const projectLists = [
    {id:1, text: 'Project-A', icon: <FaInbox />, active: true},
    {id:2, text: 'Project-B', icon: <FaInbox />, active: false}
  ]
  
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <List data={generalLists}/>
          </section>
          <section className='sidebar__category'>
          <div className="accordion">
              <div className="accordion__toggle">
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon accordion__item__active'/>
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
            </div>
            <List data={projectLists}/>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  )
}

export default App;

/* Challenge : Refactor
-ให้ 2 section render UI ที่...
  -Option A (2/5): ต่างกัน <Lists/> กับ <Accordion/> : Difficulty
  -Option B (4/5): render UI เดียวกัน เช่น <Lists />
  -OptionC (5/5): render <Lists/> ภายใต้ <Accordion> <Lists/> </Accordion>

*/
