import { get } from '..';
import { ClanSearch } from '../../../types';

export async function getClans(key: string, search: string, limit: number = 20) {
    const endpoint = `clans?name=${encodeURIComponent(search)}&limit=${limit}`;

    try {
        const res = (await get(key, endpoint)) as ClanSearch;

        return res.items;
    } catch {
        return;
    }
}
