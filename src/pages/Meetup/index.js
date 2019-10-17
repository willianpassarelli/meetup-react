import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import Button from '~/components/Button';

import {
  createMeetupRequest,
  editMeetupRequest,
} from '~/store/modules/meetup/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.string().required(),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string().required(),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function Meetup({ history }) {
  const meetup = history.location.state;
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  function handleEdit(data) {
    dispatch(editMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form
        schema={!meetup && schema}
        onSubmit={meetup ? handleEdit : handleSubmit}
        initialData={meetup}
      >
        <BannerInput name="file_id" value={meetup} />
        <Input name="title" type="name" placeholder="Titulo do Meetup" />
        <Input
          name="description"
          multiline
          placeholder="Descrição completa"
          maxLength="1000"
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" type="name" placeholder="Localização" />
        <Button text="Salvar meetup" />
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  history: PropTypes.instanceOf(Object),
};

Meetup.defaultProps = {
  history: PropTypes.object,
};
