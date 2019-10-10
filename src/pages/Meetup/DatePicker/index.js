import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        placeholderText={placeholder}
        selected={selected}
        minDate={new Date()}
        showTimeSelect
        withPortal
        locale={pt}
        timeFormat="HH:mm"
        dateFormat="d 'de' MMMM', às' HH'h'"
        onChange={date => setSelected(date)}
        ref={ref}
      />
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
