import { apiClient } from './apiClient';
import { ApiResponse, User } from '../types';

export const userService = {
    getUsers: async (): Promise<ApiResponse<User[]>> => {
        const response = await apiClient.get('/users');
        return response.data;
    },

    getUserById: async (id: string): Promise<ApiResponse<User>> => {
        const response = await apiClient.get(`/users/${id}`);
        return response.data;
    },

    createUser: async (userData: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
        const response = await apiClient.post('/users', userData);
        return response.data;
    },

    updateUser: async (id: string, userData: Partial<User>): Promise<ApiResponse<User>> => {
        const response = await apiClient.put(`/users/${id}`, userData);
        return response.data;
    },

    deleteUser: async (id: string): Promise<ApiResponse<void>> => {
        const response = await apiClient.delete(`/users/${id}`);
        return response.data;
    },
};
