export interface ClanSearch {
    items: ClanPartial[];
}

export interface ClanPartial {
    name: string;
    tag: string;
    badgeId: number;
}

export interface ClanInfo extends ClanPartial {
    memberList: Member[];
}

export interface Member {
    tag: string;
    name: string;
    lastSeen: string;
    expLevel: number;
    trophies: number;
}

export interface Player {
    tag: string;
    name: string;
    expLevel: number;
    trophies: number;
    bestTrophies: number;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    clan: ClanPartial;
    currentDeck: Card[];
    currentFavouriteCard: CardPartial;
}

export interface CardPartial {
    name: string;
    id: number;
    maxLevel: number;
    maxEvolutionLevel?: number;
    elixirCost: number;
    iconUrls: IconUrls;
    rarity: Rarity;
}

export interface Card extends CardPartial {
    level: number;
    evolutionLevel?: number;
}

export interface IconUrls {
    medium: string;
    evolutionMedium?: string;
}

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'champion';
