import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCreateChannelMutation } from "@service/feature/channel/hook/mutation/useChannelMutation.ts";
import { useCreateCategoryMutation } from "@service/feature/channel/hook/mutation/useCategoryMutation.ts";
import {
  CategoryFormValues,
  ChannelFormValues,
  channelSchema,
} from "@service/feature/channel/schema/channelSchema.ts";

const ChannelAddDialog = ({
  teamId,
  onClose,
}: {
  teamId: string;
  onClose: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<"channel" | "category">("channel");

  const createChannelMutation = useCreateChannelMutation(teamId);
  const createCategoryMutation = useCreateCategoryMutation(teamId);

  const { register, handleSubmit, formState, reset } = useForm<ChannelFormValues | CategoryFormValues>({
    resolver: zodResolver(channelSchema),
    defaultValues: { mode: "channel" },
  });

  const { errors } = formState;

  const handleModeChange = (newMode: "channel" | "category") => {
    setMode(newMode);
    reset();
  };

  const onSubmit = async (data: ChannelFormValues | CategoryFormValues) => {
    setIsSubmitting(true);

    try {
      if (mode === "channel") {
        const channelData = data as ChannelFormValues;

        await createChannelMutation.mutateAsync({
          name: channelData.name,
          categoryId: Number(channelData.categoryId),
          channelType: channelData.channelType || "TEXT",
        });

        toast.success("채널이 성공적으로 추가되었습니다!");
      } else if (mode === "category") {
        const categoryData = data as CategoryFormValues;

        await createCategoryMutation.mutateAsync({
          name: categoryData.categoryName,
        });

        toast.success("카테고리가 성공적으로 추가되었습니다!");
      }

      onClose();
    } catch (error) {
      toast.error("추가 중 오류가 발생했습니다.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#2f3136] p-6 rounded-md shadow-lg max-w-sm w-full">
        <h2 className="text-[#f6f6f6] text-xl mb-4">
          {mode === "channel" ? "채널 추가" : "카테고리 추가"}
        </h2>
        <div className="mb-4">
          <label className="text-[#b9bbbe] font-semibold mb-2">추가 하기</label>
          <div className="flex gap-2">
            <label className="flex items-center gap-1 text-[#dcddde]">
              <input
                type="radio"
                value="channel"
                checked={mode === "channel"}
                onChange={() => handleModeChange("channel")}
              />
              채널 추가
            </label>
            <label className="flex items-center gap-1 text-[#dcddde]">
              <input
                type="radio"
                value="category"
                checked={mode === "category"}
                onChange={() => handleModeChange("category")}
              />
              카테고리 추가
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {mode === "channel" && (
            <>
              <div className="mb-4">
                <label className="block text-[#b9bbbe] mb-1" htmlFor="name">
                  채널 이름
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={`w-full p-2 rounded bg-[#202225] text-[#dcddde] border ${
                    errors.mode?.message ? "border-red-600" : "border-transparent"
                  }`}
                  placeholder="채널 이름을 입력하세요"
                />
                {errors.mode?.message && (
                  <span className="text-sm text-red-600">
                    {errors.mode.message}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-[#b9bbbe] mb-1" htmlFor="channelType">
                  채널 유형
                </label>
                <select
                  id="channelType"
                  {...register("channelType")}
                  className="w-full p-2 rounded bg-[#202225] text-[#dcddde] border border-transparent"
                >
                  <option value="TEXT">텍스트</option>
                  <option value="VOICE">음성</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[#b9bbbe] mb-1" htmlFor="categoryId">
                  카테고리 ID (선택 사항)
                </label>
                <input
                  id="categoryId"
                  {...register("categoryId")}
                  className="w-full p-2 rounded bg-[#202225] text-[#dcddde] border border-transparent"
                  placeholder="카테고리 ID를 입력하세요"
                />
                {errors.mode?.message && (
                  <span className="text-sm text-red-600">
                    {errors.mode.message}
                  </span>
                )}
              </div>
            </>
          )}

          {mode === "category" && (
            <div className="mb-4">
              <label className="block text-[#b9bbbe] mb-1" htmlFor="categoryName">
                카테고리 이름
              </label>
              <input
                id="categoryName"
                {...register("categoryName")}
                className={`w-full p-2 rounded bg-[#202225] text-[#dcddde] border ${
                  errors.mode?.message ? "border-red-600" : "border-transparent"
                }`}
                placeholder="카테고리 이름을 입력하세요"
              />
              {errors.mode?.message && (
                <span className="text-sm text-red-600">
                  {errors.mode.message}
                </span>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#4f545c] text-[#f6f6f6] rounded-md hover:bg-[#5f646c]"
              disabled={isSubmitting}
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#5865f2] text-white rounded-md hover:bg-[#6970f3]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "처리 중..." : "추가"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChannelAddDialog;