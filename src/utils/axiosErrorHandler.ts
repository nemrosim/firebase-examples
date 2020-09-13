/**
 * Method was copied from official site of "axios" package for error handlers
 * @param error
 */
export const axiosErrorHandler = (error: any) => {
    if (error.response) {
        const { data, status, headers } = error.response;
        /*
            The request was made and the server responded with a status code
            that falls out of the range of 2xx
            */
        return {
            code: data.code,
            message: data.message,
            status,
            headers,
        };
    }

    if (error.request) {
        /*
            The request was made but no response was received
             `error.request` is an instance of XMLHttpRequest in the browser and an instance of
             http.ClientRequest in node.js
             */
        const { request } = error;
        console.log('error.request:', { request });
        return request;
    }

    if (error.message) {
        // Something happened in setting up the request that triggered an Error
        const { message } = error;
        console.log('error.message:', { message });
        return { message: error.message };
    }

    console.log('Request error (error.config)', { config: error.config });
    return error.config;
};
