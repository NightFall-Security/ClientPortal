import { checkSession, loginUser, logoutUser, registerUser } from "@/api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { IServiceResponse } from "@/interfaces/IHttp";
import type { IAuth, ISession } from "@/interfaces/IPayloads";

/**
 * Hook pour vérifier la session (à utiliser dans les composants, pas dans AuthProvider)
 * @returns 
 */
export const useCheckSession = () => {
    return useQuery({
        queryKey: ['user-session'],
        queryFn: async () => await checkSession(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnMount: true, // Pour les vérifications manuelles
        refetchOnReconnect: false,
        enabled: true,
    });
};


/**
 * Use login request
 * @returns 
 */
export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey:['login'],
        mutationFn: async (payload:IAuth) => {
            const response:IServiceResponse<ISession> = await loginUser(payload);

            if (!response.data)
                throw new Error(response.message || "Erreur lors de la connexion");

            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['login'] });
        },
    })
}

/**
 * Use register request
 * @returns 
 */
export const useRegister = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey:['register'],
        mutationFn: async (payload:IAuth) => {
            const response:IServiceResponse<ISession> = await registerUser(payload);

            if (!response.data)
                throw new Error(response.message || "Erreur lors de la création d'un compte");

            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['register'] });
        },
    })
}

/**
 * Use logout request
 * @returns 
 */
export const useLogout = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey:['logout'],
        mutationFn: async () => {
            return await logoutUser();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['logout'] });
            window.location.href = "/login";
        },
    })
}