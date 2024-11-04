import { get } from '..';
export async function getPlayer(key, tag) {
    const endpoint = `players/${encodeURIComponent(tag)}`;
    try {
        const res = await get(key, endpoint);
        return res;
    }
    catch {
        return;
    }
}
