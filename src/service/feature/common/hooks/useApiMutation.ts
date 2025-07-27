import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface ApiMutationOptions<TParams, TBody, TResponse> {
    urlBuilder: (params: TParams) => string;
    method?: 'POST' | 'PATCH' | 'DELETE';
    queryKeyToInvalidate: string[];
}

export const useApiMutation = <TParams, TBody, TResponse>({urlBuilder, method = 'POST', queryKeyToInvalidate,}: ApiMutationOptions<TParams, TBody, TResponse>) => {
    const queryClient = useQueryClient();

    return useMutation<TResponse, unknown, { params: TParams; body: TBody }>({
        mutationFn: async ({ params, body }) => {
            const url = urlBuilder(params);

            if (method === 'POST') {
                const res = await axios.post<TResponse>(url, body); // Body 포함
                return res.data;
            } else if (method === 'PATCH') {
                const res = await axios.patch<TResponse>(url, body);
                return res.data;
            } else if (method === 'DELETE') {
                const res = await axios.delete<TResponse>(url);
                return res.data;
            }

            throw new Error(`Invalid method: ${method}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(queryKeyToInvalidate);
        },
    });
};