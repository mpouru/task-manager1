
import React from 'react'
import './Stopwatch.css'
import Button from 'react-bootstrap/Button'


// muuttaa sekunnit sekunneiksi ja minuuteiksi
const formattedSeconds = (sec) =>
Math.floor(sec / 60) +
  ':' +
('0' + sec % 60).slice(-2)


class Stopwatch extends React.Component {
  constructor(props){
  super(props);
  this.state = { 
    activities:[],
    secondsElapsed:0, 
    startTime:0,
    stopTime:0,
    lastClearedIncrementer: null}
    this.incrementer = null; 
    this.handleStartClick =this.handleStartClick.bind(this);
    this.handleStopClick =this.handleStopClick.bind(this);   
} 
renderTaskList(){

}

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        startTime:this.state.stopTime,
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
    console.log('start time clicked', this.state.startTime);
  }
  
  handleStopClick() {
    clearInterval(this.incrementer);

    const newActivity={
      startTime: this.state.startTime,
      stopTime:this.state.secondsElapsed,
      id: Date.now()
      
    }
    this.setState({
        
        lastClearedIncrementer: this.incrementer,
        stopTime:this.incrementer,
        activities: this.state.activities.concat([newActivity])
    });
    console.log('stoptime clicked ',this.state.activities);
    
  }
  
  
 /*  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }
  // "kierros"-aika, eli tätä voi käyttää yhden activityn ajan mittaamiseen samalla kun stopwatch pyörii kokonaisaikaa
  handleLabClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    })
  } */
  render() {

  
    return (
      <div className="stopwatch">
      <h3>ACTIVITY LIST</h3>

      <ul className="stopwatch-activities">
          { this.state.activities.map((activity, i) =>
              <li className="stopwatch-activity" key={activity.id}><strong>{i + 1}</strong> start{formattedSeconds(this.state.activities[i].startTime)} stop {formattedSeconds(this.state.activities[i].stopTime)}</li>)
          }
        </ul>
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
   
        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
        )}
       {/*  turhaa höttöä pois stopwatchista
        {(this.state.secondsElapsed !== 0 &&
          this.incrementer !== this.state.lastClearedIncrementer
          ? <Button onClick={this.handleLabClick.bind(this)}>lap</Button>
          : null
        )}


        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
          : null
        )} */}


      </div>
    );
  }
}
  // React.render(<Stopwatch />, document.body);
  export default Stopwatch; 
  
  