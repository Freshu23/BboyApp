import { useSelector } from 'react-redux';
import EventInfo from '../components/EventDetails/EventInfo';
import RegisterEventForm from '../components/shared/RegisterEventForm/RegisterEventForm';
import { Modal } from '@mantine/core';
import { useState } from 'react';

const EventDetails = () => {
  const [opened, setOpened] = useState(false);
  const event = useSelector(state => state.event.currentEvent);
  return (
    <div className='container'>
      {event ? (
        <EventInfo event={event} handleModal={setOpened} />
      ) : (
        <h1>No event selected</h1>
      )}
      <Modal size={900} opened={opened} onClose={() => setOpened(false)}>
        <RegisterEventForm event={event} />
      </Modal>
    </div>
  );
};

export default EventDetails;
