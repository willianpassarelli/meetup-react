import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {
  IoMdCalendar,
  MdEdit,
  MdDeleteForever,
  MdLocationOn,
} from 'react-icons/all';

import { useDispatch } from 'react-redux';

import history from '~/services/history';
import api from '~/services/api';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, Header, Infos } from './styles';

export default function Details({ match }) {
  const [item, setItem] = useState({});
  const { id } = match.params;

  const dispatch = useDispatch();

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

        const data = Object.assign(rest, {
          formattedDate,
          date: parseISO(date),
          url,
          path,
        });

        setItem(data);
      } catch (err) {
        history.push('/error');
      }
    }
    loadMeetup();
  }, [id]);

  function handleCancelMeetup() {
    dispatch(deleteMeetupRequest(item.id));
  }

  function handleEditMeetup(data) {
    history.push('/meetup', { ...data });
  }

  return (
    <Container>
      <Header>
        <strong>{item.title}</strong>
        <div>
          <button
            type="submit"
            disabled={item.past}
            onClick={() => handleEditMeetup(item)}
          >
            <div>
              <MdEdit size={20} color="#fff" />
              <strong>Editar</strong>
            </div>
          </button>
          <span>
            <button
              type="submit"
              disabled={item.past}
              onClick={handleCancelMeetup}
            >
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

Details.propTypes = {
  match: PropTypes.instanceOf(Object),
};

Details.defaultProps = {
  match: PropTypes.object,
};
