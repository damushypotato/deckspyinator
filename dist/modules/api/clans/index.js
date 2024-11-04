import { get } from '..';
export async function getClans(key, search, limit = 20) {
    const endpoint = `clans?name=${encodeURIComponent(search)}&limit=${limit}`;
    try {
        const res = (await get(key, endpoint));
        return res.items;
    }
    catch {
        return;
    }
}
