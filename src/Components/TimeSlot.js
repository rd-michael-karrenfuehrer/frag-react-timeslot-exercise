import React, { Component } from 'react';
import '../App.css';
import format from 'date-fns/format';

function TimeSlot(props) {
  return (<div className='TimeSlot'>
    <div>{format(
      new Date(props.startTime),
      'HH:mm')}</div>
    <div>{format(
      new Date(props.endTime),
      'HH:mm')}</div>
    <div>
      {props.price}
    </div>
  </div>)
}

export default TimeSlot;