export * from './clan';
export * from './clans';
export * from './player';

import axios from 'axios';

const baseURL = 'https://proxy.royaleapi.dev/v1/';

export async function get(key: string, url: string) {
    const res = await axios.get(url, {
        baseURL,
        headers: {
            Authorization: `Bearer ${key}`,
        },
    });

    return res.data;
}
