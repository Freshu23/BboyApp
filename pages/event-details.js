import React from 'react';
import { useSelector } from 'react-redux';
import EventInfo from '../components/EventDetails/EventInfo';

const EventDetails = () => {
  const event = useSelector(state => state.event.currentEvent);
  console.log(event);
  return (
    <div className='container'>
      <EventInfo event={event} />
    </div>
  );
};

export default EventDetails;
