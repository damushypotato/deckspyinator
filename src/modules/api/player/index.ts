import { get } from '..';
import { Player } from '../../../types';

export async function getPlayer(key: string, tag: string) {
    const endpoint = `players/${encodeURIComponent(tag)}`;

    try {
        const res = await get(key, endpoint);

        return res as Player;
    } catch {
        return;
    }
}
