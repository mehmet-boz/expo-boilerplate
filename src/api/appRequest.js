import axios from 'axios';

export default class appRequest {
    static get({endpoint, baseUrl}) {
        const headersList = {
            Accept: '*/*',
        };

        const reqOptions = {
            url: `${baseUrl}${endpoint}`,
            method: 'GET',
            headers: headersList,
        };

        return axios.request(reqOptions);
    }

    static post({endpoint, baseUrl, body}) {
        const headersList = {
            Accept: '*/*',
            'Content-Type': 'application/json',
        };

        const bodyContent = JSON.stringify(body);

        const reqOptions = {
            url: `${baseUrl}${endpoint}`,
            method: 'POST',
            headers: headersList,
            data: bodyContent,
        };

        return axios.request(reqOptions);
    }

    static delete({endpoint, baseUrl, body}) {
        const headersList = {
            Accept: '*/*',
        };

        const bodyContent = JSON.stringify(body);

        const reqOptions = {
            url: `${baseUrl}${endpoint}`,
            method: 'DELETE',
            headers: headersList,
            data: bodyContent,
        };

        return axios.request(reqOptions);
    }

    static put({endpoint, baseUrl, body}) {
        const headersList = {
            Accept: '*/*',
            'Content-Type': 'application/json',
        };

        const bodyContent = JSON.stringify(body);

        const reqOptions = {
            url: `${baseUrl}${endpoint}`,
            method: 'PUT',
            headers: headersList,
            data: bodyContent,
        };

        return axios.request(reqOptions);
    }
}
