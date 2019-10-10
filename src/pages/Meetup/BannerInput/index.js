import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: 'file_id',
      ref: ref.current,
      path: 'dataset.file',
    });
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    try {
      const data = new FormData();

      data.append('file', e.target.files[0]);

      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error('Erro ao carregar imagem');
    }
  }

  return (
    <Container>
      <label htmlFor="banner">
        {!preview && (
          <div>
            <MdCameraAlt size={65} />
            <strong>Selecionar imagem</strong>
          </div>
        )}
        {preview && <img src={preview} alt="Banner meetup" />}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
