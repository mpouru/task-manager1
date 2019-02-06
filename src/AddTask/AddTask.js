import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import './AddTask.css'
//import Container from '../Container/Container.js'
//import Stopwatch from './Stopwatch';



//Tämä luokka luo tasklistin ja tehtävät sinne käyttäjän syötteestä
    class AddTask extends React.Component {
    
        render() {
         
          return (
            <div>
           
              <h3>TASK LIST</h3>
             <ListTask tasks={this.props.tasks}/>
              <div className="AddTask">
              <form  onSubmit={this.props.handleSubmit}>
                <label htmlFor="new-todo">
                  What needs to be done?
                </label>
                <input
                  id="new-todo"
                  onChange={this.props.handleChange}
                  value={this.props.text}
                />
                <button>
                  Add #{this.props.tasks.length + 1}
                </button>
              </form>
            </div>
           </div>
          
          );
        }
    
        
      }

      class ListTask extends React.Component{
        render(){
          
          return(
           <ButtonGroup vertical>
                {this.props.tasks.map(task => (
                <Button className="list-group" onClick={this.props.handleTaskClick} key={task.id}>{task.text} time </Button> 
                ))}
              </ButtonGroup>
              );
        }
      }


export default AddTask;