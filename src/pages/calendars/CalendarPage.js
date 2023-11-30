import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import styles from '../../styles/Calendar.module.css'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { categoryColors } from "../../components/CategoryColors";


const localizer = momentLocalizer(moment)

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const handleEventSelect = (event) => {
    history.push(`/events/${event.id}`);
  };
  

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events/");
        const formattedEvents = response.data.results.map(event => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start_time),
          end: new Date(event.start_time),
          allDay: false,
          category: event.category,

        }));
        if (isMounted) {
        setEvents(formattedEvents);
        }
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);


  const getEventStyle = (event) => {
    let backgroundColor = categoryColors[event.category] || categoryColors.other;
    let style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: 'none',
      display: 'block',
    };
    return { style };
  };

  return (
    <div className={styles.Padding}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ 
          height: 500 
        }}
        eventPropGetter={getEventStyle}
        onSelectEvent={handleEventSelect}
      />
    </div>
  );
};



export default CalendarPage;