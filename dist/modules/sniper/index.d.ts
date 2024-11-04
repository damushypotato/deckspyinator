export declare function snipe(key: string, playerName: string, clanName: string, output?: boolean): Promise<{
    player: import("../../types").Player;
    lastSeen: string;
    similarity: number;
}>;
