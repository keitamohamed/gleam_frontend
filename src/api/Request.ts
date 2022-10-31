import axios from "axios";

import {getHeader} from "./config";

export const POST_REQUEST = (
    token: string,
    url: string,
    data: object,
    action: (response: object) => void,
    setError: (error: object) => void
    ) => {
    return async () => {
        const send = async () => {
            return axios({
                method: 'POST',
                url: `/gleam/${url}`,
                data: data,
                headers: getHeader(token)
            });
        }

        try {
            const response = await send()
            action(response.data)
        }catch (error) {
            setError(error.response?.data)
        }
    }
}

export const GET_REQUEST = (
    token: string,
    url: string,
    action: (data: object) => void,
    setError: (error: any) => void) => {
    return async () => {
        const fetch = async () => {
            return axios({
                method: "GET",
                url: `/gleam/${url}`,
                withCredentials: true,
                headers: getHeader(token)
            })
        }

        try {
            const response = await fetch();
            action(response.data)
        } catch (error) {

            setError(error.response.data)
        }
    }
}

export const PUT_REQUEST = (
    token: string,
    url: string,
    data: object,
    action: (data: object) => void,
    setError: (error: object) => void) => {

    return async () => {
        const send = async () => {
            return axios({
                method: "PUT",
                url: `/gleam/${url}`,
                data: data,
                withCredentials: true,
                headers: getHeader(token)
            })
        }
        try {
            const response = await send();
            action(response.data)
        } catch (error) {
            setError(error.response.data)
        }
    }
}

export const DELETE_REQUEST = (
    token: string,
    url: string,
    deleteAction: (data: object) => void,
    setError: (error: any) => void,
) => {

    return async () => {
        const sendRequest = async () => {
            return axios({
                method: "DELETE",
                url: `/gleam/${url}`,
                withCredentials: true,
                headers: getHeader(token)
            })
        }

        try {
            const response = await sendRequest();
            deleteAction(response.data)
        } catch (error) {
            setError(error.response.data)
        }
    }
}