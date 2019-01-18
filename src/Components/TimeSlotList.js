import React, { Component } from 'react';
import TimeSlot from './TimeSlot.js';

class TimeSlotList extends Component{
  render() {
    var timeSlots = this.props.slotsData.map(slot => {
      return <TimeSlot startTime={slot.startTime} endTime={slot.endTime} price={slot.serviceFee.cents}/>
    })

    return (
      <div>{timeSlots}</div>
    )
  }
}

export default TimeSlotList;