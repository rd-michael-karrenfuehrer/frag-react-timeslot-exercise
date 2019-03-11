import React from 'react';
import { format, differenceInMinutes } from "date-fns";
import "./Slot.css";

const Slot = ({slot}) => {
  const formatDateTime = (dateString) => {
    return format(new Date(dateString), 'HH:mm')
  };

  const calculateHeight = () => {
    return (differenceInMinutes(slot.endTime, slot.startTime)/60)*50
  };

  const slotDetails = <div className="slot-details">{formatDateTime(slot.startTime)} - {formatDateTime(slot.endTime)} <br/>
  {slot.serviceFee.cents}</div>;


  return <li className="slot" style={{height: calculateHeight()}}>
    {slot.bookable ? slotDetails : 'ausgebucht'}
    </li>;
};

export default Slot;
