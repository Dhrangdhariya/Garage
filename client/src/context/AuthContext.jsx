import React, { createContext, useEffect, useState } from "react";
import api from "../utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const { data } = await api.get("/auth/me");
            setUser(data);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const { data } = await api.post("/auth/login", {
                email,
                password,
            });
            setUser(data);
            return data;
        } catch (error) {
            if (error.response?.data?.needsVerification) {
                throw error.response.data;
            }

            throw error.response?.data?.message || "Login failed";
        }
    };

    const register = async (name, email, password) => {
        try {
            const { data } = await api.post("/auth/register", {
                name,
                email,
                password,
            });

            return data;
        } catch (error) {
            throw error.response?.data?.message || "Registration failed";
        }
    };

    const verifyOTP = async (email, otp) => {
        try {
            const { data } = await api.post("/auth/verify-otp", {
                email,
                otp,
            });

            setUser(data);

            return data;
        } catch (error) {
            throw error.response?.data?.message || "OTP verification failed";
        }
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
        } catch (err) { }

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                register,
                verifyOTP
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};