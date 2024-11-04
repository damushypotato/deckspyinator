import { get } from '..';
import { ClanInfo } from '../../../types';

export async function getClanInfo(key: string, tag: string) {
    const endpoint = `clans/${encodeURIComponent(tag)}`;

    try {
        const res = await get(key, endpoint);

        return res as ClanInfo;
    } catch {
        return;
    }
}
