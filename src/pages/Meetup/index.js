import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import Button from '~/components/Button';

import { Container } from './styles';

export default function Meetup() {
  return (
    <Container>
      <Form>
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
