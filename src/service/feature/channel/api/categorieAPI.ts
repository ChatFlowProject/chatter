import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const axios = createAxiosInstance();

export const createCategory = async (teamId: string, name: string) => {
  const res = await axios.post(`/teams/${teamId}/categories`, { name });
  return res.data;
};

export const deleteCategory = async (teamId: string, categoryId: number) => {
  const res = await axios.delete(`/teams/${teamId}/categories/${categoryId}`);
  return res.data;
};

export const moveCategory = async (teamId: string, body: {
  prevCategoryId: number;
  nextCategoryId: number;
}) => {
  const res = await axios.patch(`/teams/${teamId}/categories/${body.prevCategoryId}`, body);
  return res.data;
};


export const useCreateCategoryMutation = (teamId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => createCategory(teamId, name),
    onSuccess: () => {
      toast.success('카테고리 생성 완료!');
      queryClient.invalidateQueries({ queryKey: ['teamStructure', teamId] });
    },
  });
};