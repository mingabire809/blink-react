import React from "react";
import { useCountdown } from "../../hooks/CountDown";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please Wait for the deals to resume</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        marginTop: 100
      }}>
        
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={days <= 3} />
          
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={days <= 3} />
          
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={days <= 3} />
        
      </div>
    );
  };

const CountdownTimer = ({targetDate}) => {

    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
      } else {
        return (
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        );
      }
    };
    export default CountdownTimer;