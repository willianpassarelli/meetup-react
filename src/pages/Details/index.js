import React from 'react';

import { MdEdit, MdDeleteForever, MdLocationOn } from 'react-icons/md';
import { IoMdCalendar } from 'react-icons/all';

import { Container, Header, Infos } from './styles';

export default function Details() {
  return (
    <Container>
      <Header>
        <strong>Meetup de React Native</strong>
        <div>
          <button type="submit">
            <div>
              <MdEdit size={20} color="#fff" />
              <strong>Editar</strong>
            </div>
          </button>
          <span>
            <button type="submit">
              <div>
                <MdDeleteForever size={20} color="#fff" />
                <strong>Cancelar</strong>
              </div>
            </button>
          </span>
        </div>
      </Header>
      <Infos>
        <img src="https://camunda.com/img/events/meetup-example.jpg" alt="" />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.
          <br />
          <br />
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>

        <span>
          <div>
            <IoMdCalendar size={20} />
            <strong>24 de Junho, ás 20h</strong>
          </div>
          <div>
            <MdLocationOn size={20} />
            <strong>Rua Guilherme Gembala, 260</strong>
          </div>
        </span>
      </Infos>
    </Container>
  );
}
