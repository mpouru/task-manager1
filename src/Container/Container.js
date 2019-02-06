import React from 'react'
import './Container.css'
import AddTask from '../AddTask/AddTask.js'
import Stopwatch from '../AddTask/Stopwatch.js'

import Button from 'react-bootstrap/Button'



//Tämä kerää root-containeriin kaikki muut palikat
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks:[], text: '',activities:[]
     };
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
//ensin addtask-luokan funktiot
//input laatikosta tekstinmuutos kiinni ja talteen
handleChange(e) {
  this.setState({ text: e.target.value });
}
//add-nappula lisää uuden tehtävän stateen. 
handleSubmit(e) {
  e.preventDefault();
  if (!this.state.text.length) {
    return;
  }
  const newTask = {
    text: this.state.text,
    id: Date.now()
  };
  this.setState(state => ({
    tasks: state.tasks.concat(newTask),
    text: ''
  }));
}

 

//stopwatch-funktiot. paitsi että ei, kun en saa toimimaan niitä täältä

/* handleStartClick(i) {
  this.incrementer = setInterval( () =>
    this.setState({
      startTime:this.state.tasks.length.secondsElapsed,
      secondsElapsed: this.state.lenght.secondsElapsed + 1
    })
  , 1000);
}

handleStopClick(i) {
  clearInterval(this.incrementer);
  
  

  const newActivity={
    activity: this.tasks.length.secondsElapsed,
    id: Date.now()
  }
  this.setState({
      
      lastClearedIncrementer: this.incrementer,
      stopTime:this.state.tasks.length.secondsElapsed,
      activities: this.state.tasks[i].activities.concat([newActivity])
  });
  
} */


  render() {
    return (
      <div className="container Container-marginTop Container-color">
         <div className= "tasklist">
        <AddTask
        tasks={this.state.tasks}
        activities={this.state.activities}
        handleChange= {this.handleChange}
        handleSubmit= {this.handleSubmit}
        
        />
        </div>
        <div className="activitylist">
        <Stopwatch
        

        />
        
        </div>
            
      </div>
      
    );
  }
}


export default Container;