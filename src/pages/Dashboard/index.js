import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, List } from './styles';

export default function Dashboard() {
  const [organizing, setOrganizing] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          date: format(parseISO(meetup.date), "d 'de' MMMM', às' HH'h'", {
            locale: pt,
          }),
        };
      });
      setOrganizing(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup">
          <button type="button">
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <strong>Novo meetup</strong>
            </div>
          </button>
        </Link>
      </header>

      <ul>
        {organizing.map(date => (
          <List key={date.title}>
            <strong>{date.title}</strong>
            <div>
              <span>{date.date}</span>
              <MdKeyboardArrowRight size={20} color="#fff" />
            </div>
          </List>
        ))}
      </ul>
    </Container>
  );
}
