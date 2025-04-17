import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponse } from "../api/types";

// 데이터 조회용 훅 (GET 요청)
export function useQueryData<T>(
    queryKey: string | string[],
    queryFn: () => Promise<ApiResponse<T>>,
    options = {}
) {
    return useQuery({
        queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
        queryFn,
        ...options,
    });
}

// 데이터 변경용 훅 (POST, PUT, DELETE 요청)
export function useMutationData<T, V>(
    mutationFn: (variables: V) => Promise<ApiResponse<T>>,
    options = {}
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,
        ...options,
    });
}
