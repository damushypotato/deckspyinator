import { get } from '..';
export async function getClanInfo(key, tag) {
    const endpoint = `clans/${encodeURIComponent(tag)}`;
    try {
        const res = await get(key, endpoint);
        return res;
    }
    catch {
        return;
    }
}
