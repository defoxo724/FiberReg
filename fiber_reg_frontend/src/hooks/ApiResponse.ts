export interface ApiResponse<T> {
    data: T | undefined,
    isLoading: boolean,
    isError: boolean
}   