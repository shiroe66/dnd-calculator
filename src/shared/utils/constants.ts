import { Button } from '../interfaces';

export const values: Record<string, Button[]> = {
  actions: [
    { content: '/', size: 's' },
    { content: '*', size: 's' },
    { content: '-', size: 's' },
    { content: '+', size: 's' },
  ],
  nubmers: [
    { content: '7', size: 'm' },
    { content: '8', size: 'm' },
    { content: '9', size: 'm' },
    { content: '4', size: 'm' },
    { content: '5', size: 'm' },
    { content: '6', size: 'm' },
    { content: '1', size: 'm' },
    { content: '2', size: 'm' },
    { content: '3', size: 'm' },
    { content: '0', size: 'l' },
    { content: ',', size: 'm' },
  ],
  eval: [{ content: '=', size: 'xl', appearance: 'secondary' }],
};
