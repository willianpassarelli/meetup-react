import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdKeyboardArrowRight } from 'react-icons/md';

import Button from '~/components/Button';
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
          <Button text="Novo meetup" />
        </Link>
      </header>

      <ul>
        {organizing.map(date => (
          <Link to={`/details/${date.id}`} key={date.title}>
            <List past={date.past}>
              <strong>{date.title}</strong>
              <div>
                <span>{date.date}</span>
                <MdKeyboardArrowRight size={20} color="#fff" />
              </div>
            </List>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
