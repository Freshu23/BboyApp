import React, { useEffect } from 'react';
import styles from './EventsList.module.css';
import EventBlock from '../EventsDashboard/EventBlock';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { MultiSelect } from '@mantine/core';
import { Loader } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setEvents } from '../../redux/reducer/counterSlice';
import { categories } from '../../utils/categories';

const EventsList = () => {
  const events = useSelector(state => state.event.events);
  const [activeEvents, setActiveEvents] = useState('upcoming');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    events.length === 0 ? setIsLoading(true) : setIsLoading(false);
    setFilteredEvents(events);
  }, [events]);

  useEffect(() => {
    let filteredEventsArr = [];
    events.map(event =>
      selectedCategories.every(category => event.categories.includes(category))
        ? filteredEventsArr.push(event)
        : null
    );
    selectedCategories.length > 0
      ? setFilteredEvents(filteredEventsArr)
      : setFilteredEvents(events);
  }, [selectedCategories]);
  console.log(events);

  return (
    <div className={styles.listContainer}>
      <div className={styles.categoriesContainer}>
        <MultiSelect
          transitionDuration={150}
          transition='pop-top-left'
          transitionTimingFunction='ease'
          data={categories}
          placeholder='Select categories...'
          className={styles.categories}
          onChange={setSelectedCategories}
        />
      </div>

      <div className={styles.switcherContainer}>
        <div
          onClick={() => setActiveEvents('upcoming')}
          className={clsx(styles.switcher, {
            [styles.active]: activeEvents === 'upcoming',
          })}>
          ⌛ <span> Upcoming Events</span>
        </div>
        <div
          onClick={() => setActiveEvents('hot')}
          className={clsx(styles.switcher, {
            [styles.active]: activeEvents === 'hot',
          })}>
          🔥 <span> Hot Events</span>
        </div>
      </div>
      <div className={styles.eventsList}>
        {isLoading ? <Loader /> : null}
        {activeEvents === 'hot' ? (
          filteredEvents.length === 0 && isLoading === false ? (
            <h1>No results found :(</h1>
          ) : (
            filteredEvents
              .filter(event => event.hot === true)
              .map(event => <EventBlock key={event.id} event={event} />)
          )
        ) : filteredEvents.length === 0 && isLoading === false ? (
          <h1>No results found :(</h1>
        ) : (
          filteredEvents
            .filter(event => event.hot !== true)
            .map(event => <EventBlock key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
};

export default EventsList;
