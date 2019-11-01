import React from 'react';



const Dashboard = (props) => {
  let hitCount = props.stats.hits;
  let strikeCount = props.stats.strikes;
  let ballCount = props.stats.balls;
  let foulCount = props.stats.fouls;

  const handleClick = (e) => {
    e.preventDefault();
    switch(e.target.id) {
      case "hit":
        console.log("Hit", hitCount);
          hitCount++;
        break;
      case "strike":
        console.log("Strike", strikeCount);
        strikeCount++;
        break;
      case "ball":
        console.log("Ball", ++ballCount);
        break;
      case "foul":
        console.log("Foul", ++foulCount);
        break;
      case "reset":
        console.log("Reset");
        hitCount = 0;
        strikeCount = 0;
        ballCount = 0;
        foulCount = 0;
        break;
      default:
        console.error("This shouldn't happen.");
    }
      props.update(props.stats);
  }





















  return (
    <div className = "Dashboard">
      <button type="button" id="hit"    onClick={handleClick} >Hit</button>
      <button type="button" id="strike" onClick={handleClick} >Strike</button>
      <button type="button" id="ball"   onClick={handleClick} >Balls</button>
      <button type="button" id="foul"   onClick={handleClick} >Fouls</button>
      <button type="button" id="reset"  onClick={handleClick} >Reset</button>
    </div>
  );
}

export default Dashboard;