import { Card } from '../../types';

export const GetTrueCardLevel = (card: Card): number => 14 - card.maxLevel + card.level;
