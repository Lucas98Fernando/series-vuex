import {
    setBearerToken
} from "@/http";

// Método que vai receber o token e passar no header
export const setHeaderToken = token => setBearerToken(token)

// Métodos para gerenciar o token no localStorage
export const getLocalToken = () => localStorage.removeItem('token')
export const deleteLocalToken = () => localStorage.getItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)