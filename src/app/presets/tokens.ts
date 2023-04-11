export interface IToken {
  size: number;
  points: number;
  id: string;
  anchor: { x: number; y: number };
  template: Array<Array<number>>;
}

export const tokens: IToken[] = [
  {
    size: 1,
    points: 1,
    id: 'token-1-1',
    anchor: { x: 0.5, y: 0.5 },
    template: [[1]],
  },
  {
    size: 2,
    points: 2,
    id: 'token-2-1',
    anchor: { x: 0, y: 0 },
    template: [
      [1, 1],
      [0, 0],
    ],
  },
  {
    size: 2,
    points: 3,
    id: 'token-2-2',
    anchor: { x: 0.5, y: 0.5 },
    template: [
      [1, 1],
      [1, 0],
    ],
  },
  {
    size: 2,
    points: 4,
    id: 'token-2-3',
    anchor: { x: 1, y: 1 },
    template: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    size: 3,
    points: 3,
    id: 'token-3-1',
    anchor: { x: 1.5, y: 0.5 },
    template: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    size: 3,
    points: 4,
    id: 'token-3-2',
    anchor: { x: 0.5, y: 1.5 },
    template: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },
  {
    size: 3,
    points: 4,
    id: 'token-3-3',
    anchor: { x: 0.5, y: 1.5 },
    template: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-4',
    anchor: { x: 0.5, y: 2.5 },
    template: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-5',
    anchor: { x: 1.5, y: 1.5 },
    template: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-6',
    anchor: { x: 1.5, y: 1.5 },
    template: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-7',
    anchor: { x: 1.5, y: 1.5 },
    template: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-8',
    anchor: { x: 1.5, y: 1.5 },
    template: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    size: 3,
    points: 5,
    id: 'token-3-9',
    anchor: { x: 1.5, y: 1.5 },
    template: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  {
    size: 3,
    points: 4,
    id: 'token-3-10',
    anchor: { x: 1, y: 1 },
    template: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },
  {
    size: 4,
    points: 4,
    id: 'token-4-1',
    anchor: { x: 0, y: 2 },
    template: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
  },
  {
    size: 4,
    points: 5,
    id: 'token-4-2',
    anchor: { x: 1, y: 2 },
    template: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
    ],
  },
  {
    size: 4,
    points: 5,
    id: 'token-4-3',
    anchor: { x: 1, y: 2 },
    template: [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
  },
  {
    size: 5,
    points: 5,
    id: 'token-5-1',
    anchor: { x: 0.5, y: 2.5 },
    template: [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ],
  },
];
