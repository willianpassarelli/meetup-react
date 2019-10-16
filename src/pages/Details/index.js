import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdEdit, MdDeleteForever, MdLocationOn } from 'react-icons/md';
import { IoMdCalendar } from 'react-icons/all';

import { useDispatch } from 'react-redux';

import api from '~/services/api';

import { Container, Header, Infos } from './styles';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details({ match }) {
  const [item, setItem] = useState({});
  const { id } = match.params;

  const dispatch = useDispatch();

  // verificar se o meetup pertence ao usuário caso contrário não poderá ser listado e retornar um erro
  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${id}`);

        const {
          date,
          banner: { url, path },
          ...rest
        } = response.data;

        const formattedDate = format(
          parseISO(date),
          "d 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        );

        const data = Object.assign({ formattedDate, url, path }, rest);

        setItem(data);
      } catch (err) {
        console.tron.log('erro');
      }
    }
    loadMeetup();
  }, []);

  function cancelMeetup() {
    dispatch(deleteMeetupRequest(item.id));
  }

  return (
    <Container>
      <Header>
        <strong>{item.title}</strong>
        <div>
          <button type="submit">
            <div>
              <MdEdit size={20} color="#fff" />
              <strong>Editar</strong>
            </div>
          </button>
          <span>
            <button type="submit" onClick={cancelMeetup}>
              <div>
                <MdDeleteForever size={20} color="#fff" />
                <strong>Cancelar</strong>
              </div>
            </button>
          </span>
        </div>
      </Header>
      <Infos>
        <img src={item.url} alt={item.path} />
        <p>{item.description}</p>

        <span>
          <div>
            <IoMdCalendar size={20} />
            <strong>{item.formattedDate}</strong>
          </div>
          <div>
            <MdLocationOn size={20} />
            <strong>{item.location}</strong>
          </div>
        </span>
      </Infos>
    </Container>
  );
}
