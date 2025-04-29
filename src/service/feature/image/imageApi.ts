import createAxiosInstance from '../common/axios/axiosInstance';

const axios = createAxiosInstance('team');

export const postImage = async (formData: FormData): Promise<string> => {
  const res = await axios.post('/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.message;
};
