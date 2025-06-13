import createAxiosInstance from '../common/axios/axiosInstance';

const axios = createAxiosInstance();

export const postImage = async (formData: FormData): Promise<string> => {
  const res = await axios.post('/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.message;
};

export const deleteImage = async (url: string): Promise<string> => {
  const res = await axios.delete('/images', {
    params: { url },
  });

  return res.data.message;
};
