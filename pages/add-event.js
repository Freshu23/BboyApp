import React from 'react';
import AddEventForm from '../components/AddEvent/AddEventForm';

const AddEvent = () => {
  return (
    <div className='container gray'>
      <h1 style={{ marginTop: 50 }}>Add New Event</h1>
      <AddEventForm />
    </div>
  );
};

export default AddEvent;
