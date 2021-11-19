import React from 'react'
import { useSelector } from 'react-redux';
import EventInfo from '../components/EventDetails/EventInfo';

const EventDetails= () => {
    const event = useSelector(state=>state.event.currentEvent)
    console.log(event)
    return (
        <div>
           <EventInfo event={event}/>
        </div>
    )
}

export default EventDetails;