import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {CreateCategoryResponse} from "@service/feature/channel/types/category.ts";

const axios = createAxiosInstance();

export const createCategory = async (teamId: string, name: string): Promise<CreateCategoryResponse>  => {
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