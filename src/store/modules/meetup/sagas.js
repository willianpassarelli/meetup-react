import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createMeetupSuccess, createMeetupFailure } from './actions';

export function* createMeetup({ payload }) {
  try {
    const meetup = payload.data;

    const response = yield call(api.post, 'meetups', meetup);

    toast.success('Meetup criada com sucesso!');

    yield put(createMeetupSuccess(response.data));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao salvar a Meetup, confira os dados preechidos!');
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
