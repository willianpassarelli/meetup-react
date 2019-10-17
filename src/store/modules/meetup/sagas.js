import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  deleteMeetupSuccess,
  editMeetupSuccess,
} from './actions';

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

export function* deleteMeetup({ payload }) {
  try {
    yield call(api.delete, `meetups/${payload.id}`);

    toast.success('Meetup cancelada com sucesso!');

    history.push('/dashboard');

    yield put(deleteMeetupSuccess());
  } catch (err) {
    toast.error('Não foi possivel cancelar esta Meetup');
  }
}

export function* editMeetup({ payload }) {
  try {
    yield call(api.put, `meetups/${payload.id}`, payload.data);

    toast.success('Meetup atualizada com sucesso!');

    history.push('/dashboard');

    yield put(editMeetupSuccess());
  } catch (err) {
    toast.success('Erro ao atualizar Meetup');
    console.tron.log('error', err);
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
]);
