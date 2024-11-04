export * from './modules/sniper';
export * from './modules/api';
export * from './modules/utils';
export * from './types';
export * from './types';

// import { readFileSync } from 'fs';
// import { join } from 'path';
// import { snipe } from './modules/sniper';
// import { GetTrueCardLevel } from './modules/utils/card';
// import { formatLastSeen } from './modules/utils/date';

// (async () => {
//     const key = readFileSync(join(__dirname, '../dev/key.txt')).toString();

//     const data = await snipe(key, 'mushy', 'Hated');

//     if (!data) return console.log('Failed');

//     console.log(
//         `${data.player.name} (${data.player.tag}) { Clan - ${
//             data.player.clan.name
//         } } - ${Math.round(data.similarity * 100)}% Match`
//     );
//     console.log(
//         `(${formatLastSeen(data.lastSeen)}) | ${data.player.trophies} Trophies - ${
//             data.player.currentFavouriteCard.name
//         } 💖 - ${Math.round((data.player.wins / data.player.battleCount) * 100)}% WR ${Math.round(
//             (data.player.threeCrownWins / data.player.wins) * 100
//         )}% 3CR`
//     );

//     console.log(
//         data.player.currentDeck.map(
//             card =>
//                 `${card.name} - (Lvl ${GetTrueCardLevel(card)})${
//                     card.evolutionLevel ? ` {EVO}` : ''
//                 }`
//         )
//     );
// })();
