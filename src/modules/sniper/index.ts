import { getClanInfo } from '../api/clan';
import { getClans } from '../api/clans';
import stringSimilarity from 'string-similarity';
import { getPlayer } from '../api/player';
import { ClanPartial } from '../../types';
import { formatLastSeen } from '../utils/date';
import { GetTrueCardLevel } from '../utils/card';

export async function snipe(
    key: string,
    playerName: string,
    clanName: string,
    output: boolean = false
) {
    let clanSearch: ClanPartial[];
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            clanSearch = await getClans(key, clanName);
            if (clanSearch && clanSearch.length > 0) {
                break;
            } else {
                if (output) console.log(`Attempt ${attempt}: No clans found.`);
            }
        } catch (error) {
            if (output) console.error(`Attempt ${attempt}: Error occurred - ${error.message}`);
        }

        await new Promise(resolve => setTimeout(resolve, 50));
    }

    if (!clanSearch || clanSearch.length === 0) {
        if (output) console.log('Unable to find clan after maximum attempts.');
        return;
    }

    const clanMatches = clanSearch.map(clan => {
        return {
            ...clan,
            similarity: stringSimilarity.compareTwoStrings(clan.name, clanName),
        };
    });

    const sortedClans = clanMatches.sort((a, b) => b.similarity - a.similarity);

    const topMatches = sortedClans.filter(clan => clan.similarity == 1);
    if (topMatches.length == 0) {
        topMatches.push(...sortedClans.slice(0, 3));
    }

    if (output) {
        console.log('Top clan matches:');
        topMatches.forEach((clan, index) => {
            console.log(`${index + 1}: ${clan.name} (${clan.tag}), Similarity: ${clan.similarity}`);
        });
    }

    const clansInfo = await Promise.all(topMatches.map(clan => getClanInfo(key, clan.tag)));

    const combinedMembers = clansInfo.flatMap(clan => clan?.memberList || []);

    const memberMatches = combinedMembers.map(member => ({
        ...member,
        similarity: stringSimilarity.compareTwoStrings(member.name, playerName),
    }));

    const bestMatch = memberMatches.sort((a, b) => b.similarity - a.similarity)[0];

    if (output) {
        console.log(
            `Best player match found: ${bestMatch.name} (${bestMatch.tag}), Similarity: ${bestMatch.similarity}`
        );
    }

    const playerInfo = await getPlayer(key, bestMatch.tag);

    if (output) {
        console.log(`Player Trophies: ${playerInfo.trophies}`);
        console.log(`Last Active: ${formatLastSeen(bestMatch.lastSeen)}`);
        console.log('Player current deck:');
        playerInfo.currentDeck.forEach(card => {
            const trueLevel = GetTrueCardLevel(card);
            console.log(
                `${card.name}: Level ${trueLevel}${
                    card.evolutionLevel ? `, Evolution Level ${card.evolutionLevel}` : ''
                }`
            );
        });
    }

    return {
        player: playerInfo,
        lastSeen: bestMatch.lastSeen,
        similarity: bestMatch.similarity,
    };
}
