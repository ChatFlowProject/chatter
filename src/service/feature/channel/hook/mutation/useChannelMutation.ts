import {useApiMutation} from "@service/feature/common/hooks/useApiMutation.ts";
import {CreateChannelRequest} from "@service/feature/channel/types/channel.ts";
import {endpoints} from "@service/feature/channel/api/channelAPI.ts";

export const useCreateChannelMutation = () => {
    return useApiMutation<{ teamId: string; categoryId: number }, CreateChannelRequest, void>({
        urlBuilder: ({ teamId, categoryId }) => endpoints.categories(teamId, categoryId),
        method: 'POST',
        queryKeyToInvalidate: (params) => ['serverChannels', params.teamId],
    });
};


export const useDeleteChannelMutation = (teamId: string) => {
    return useApiMutation({
        urlBuilder: (params: { categoryId: number; channelId: number }) =>
            `${endpoints.categories(teamId, params.categoryId)}/${params.channelId}`,
        method: 'DELETE',
        queryKeyToInvalidate: ['serverChannels', teamId],
    });
};

export const useMoveChannelMutation = (teamId: string, categoryId: number) => {
    return useApiMutation({
        urlBuilder: (params: { channelId: number }) =>
            `${endpoints.categories(teamId, categoryId)}/${params.channelId}`,
        method: 'PATCH',
        queryKeyToInvalidate: ['teamStructure', teamId],
    });
};
