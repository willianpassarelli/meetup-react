export function editMeetupRequest(id, data) {
  return {
    type: '@meetup/EDIT_MEETUP_REQUEST',
    payload: { id, data },
  };
}

export function editMeetupSuccess() {
  return {
    type: '@meetup/EDIT_MEETUP_SUCCESS',
  };
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    payload: { id },
  };
}

export function deleteMeetupSuccess() {
  return {
    type: '@meetup/DELETE_MEETUP_SUCCESS',
  };
}

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}
