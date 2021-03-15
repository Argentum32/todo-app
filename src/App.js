import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import cross from './images/icon-cross.svg';


function App() {
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState()
  const [filter, setFilter] = useState('all')

  class ToDo {
    constructor(info){
      this.action = info.todo
      this.id = info.id
      this.status = false
    }
    complete(){
      this.status = !this.status
      setCompleted(Math.random())
    }
    deletion(){
      setTodos(prev => prev.filter(i => i.id!==this.id))
    }
    get markup(){
      return (
        <div className='todo' key={this.id}>
          <img onClick={() => this.complete()} className={`check ${this.status ? 'checkDone' : ''}`}></img>
          <div className={`action ${this.status && style ? 'actionDone' : '' }`}>{this.action}</div>
          <img onClick={() => this.deletion()} className='delete' src={cross}></img>
        </div>
      )
    }
  }

  const submit = (e) => {
    e.preventDefault()
    setTodos(prev => [
      new ToDo ({
        id: Date.now(),
        todo: document.getElementById("todo").value
      }), ...prev
    ])
  }
  useEffect(() => document.querySelector("form").reset(), [submit])

  const counter = todos.filter(i => i.status === false).length
  const rendered =  filter === 'active' ? todos.filter(i => i.status === false).map(i => i.markup) :
    filter === 'completed' ? todos.filter(i => i.status === true).map(i => i.markup) :
    todos.map(i => i.markup)
  
  function filtering(filter){
    setFilter(filter)

    const filters = ['all', 'active', 'completed']
    document.querySelector(`.${filter}`).classList.add('activeFilter')
    document.querySelector(`.${filters.filter(i => i!==filter)[0]}`).classList.remove('activeFilter')
    document.querySelector(`.${filters.filter(i => i!==filter)[1]}`).classList.remove('activeFilter')
  }
  const clear = () => setTodos(prev => prev.filter(i => i.status !== true))
  const [style, setStyle] = useState(true)
  function toggleStyles(){
    document.body.classList.toggle('bodyLight')
    document.querySelector('.styleToggler').classList.toggle('moon')
    document.querySelector('.form').classList.toggle('todoLight')
    document.querySelector('.field').classList.toggle('todoLight')
    document.querySelector('.listOfTodos').classList.toggle('todoLight')
    document.querySelector('.all').classList.toggle('footerLight')
    document.querySelector('.active').classList.toggle('footerLight')
    document.querySelector('.completed').classList.toggle('footerLight')
    document.querySelector('.clear').classList.toggle('footerLight')
    if (!style) {
      document.querySelectorAll('.action').forEach(i=> i.classList.remove('actionLight'))
      document.querySelectorAll('.actionDone').forEach(i=> i.classList.remove('doneLight'))
    } if (style) {
      document.querySelectorAll('.action').forEach(i=> i.classList.add('actionLight'))
      document.querySelectorAll('.actionDone').forEach(i=> i.classList.add('doneLight'))  
    } 
  }

  return (
    <div className="App">
      <header>
        <h1>todo</h1>
        <img onClick={() => setStyle(prev => !prev, toggleStyles())} className='styleToggler'></img>
      </header>
      <form className="form" onSubmit={submit}>
      <img className='check'></img>
        <input className="field" type="text" minlength="5" id="todo" placeholder="Create your to do action"></input>
      </form>
      <div className='listOfTodos'>
        {rendered}
        <div className='footer'>
          <div className='counter'>{counter} items left</div>
          <div className='filters'>
            <div className='all' onClick={() => filtering('all')}>All</div>
            <div className='active' onClick={() => filtering('active')}>Active</div>
            <div className='completed' onClick={() => filtering('completed')}>Completed</div>
          </div>
          <div className='clear' onClick={() => clear()}>
            Clear Completed
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
