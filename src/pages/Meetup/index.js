import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import Button from '~/components/Button';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function Meetup() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" type="name" placeholder="Titulo do Meetup" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" type="name" placeholder="Localização" />
        <Button text="Salvar meetup" />
      </Form>
    </Container>
  );
}
