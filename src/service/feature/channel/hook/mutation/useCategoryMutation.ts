import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";
import {createCategory} from "@service/feature/channel/api/categorieAPI.ts";

export const useCreateCategoryMutation = (teamId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name }: { name: string }) => createCategory(teamId, name),
    onSuccess: () => {
      toast.success("카테고리 생성 완료!");
      queryClient.invalidateQueries({ queryKey: ["teamStructure", teamId] });
    },
  });
};