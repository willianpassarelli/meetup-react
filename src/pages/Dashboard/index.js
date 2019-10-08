import React, { useState, useEffect } from 'react';

import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, List } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadOrganizing() {
      const response = await api.get('organizing');

      const data = response.data.map(list => list);

      setMeetup(data);
    }

    loadOrganizing();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">
          <div>
            <MdAddCircleOutline size={20} color="#fff" />
            Novo meetup
          </div>
        </button>
      </header>

      <ul>
        {meetup.map(list => (
          <List key={list.title}>
            <strong>{list.title}</strong>
            <div>
              <span>{list.date}</span>
              <MdKeyboardArrowRight size={20} color="#fff" />
            </div>
          </List>
        ))}
      </ul>
    </Container>
  );
}
