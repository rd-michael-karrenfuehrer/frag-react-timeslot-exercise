import React from 'react';
import { format } from "date-fns";

const Slot = ({slot}) => {
  const formatDateTime = (dateString) => {
    return format(new Date(dateString), 'DD.MM.YYYY HH:mm')
  };

  return <li>{formatDateTime(slot.startTime)} - {formatDateTime(slot.endTime)} {slot.zipCode} {slot.serviceFee.cents} {slot.bookable ? 'buchbar' : 'ausgebucht'}</li>;
};

export default Slot;
