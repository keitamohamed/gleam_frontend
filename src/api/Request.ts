import axios from "axios";

import {getHeader} from "./config";

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