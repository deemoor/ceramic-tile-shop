import { Tile } from "./types";

export const tiles: Tile[] = [
  {
    id: '1',
    title: 'Forest fern',
    image: '/images/tile_1.png',
    price: 29
  },
  {
    id: '2',
    title: 'Ocean wave',
    image: '/images/tile_2.png',
    price: 34
  },
  {
    id: '3',
    title: 'Terracotta Dot',
    image: '/images/tile_3.png',
    price: 26
  },
  {
    id: '4',
    title: 'Yellow stars',
    image: '/images/tile_4.png',
    price: 31
  },
  {
    id: '5',
    title: 'Emerald geometric',
    image: '/images/tile_5.png',
    price: 33
  },
  {
    id: '6',
    title: 'Blue arcs',
    image: '/images/tile_6.png',
    price: 25
  },
  {
    id: '7',
    title: 'Blue mosaic',
    image: '/images/tile_7.png',
    price: 30
  },
  {
    id: '8',
    title: 'Terracotta flower',
    image: '/images/tile_8.png',
    price: 28
  },
  {
    id: '9',
    title: 'Mediterranean star',
    image: '/images/tile_9.png',
    price: 35
  },
  {
    id: '10',
    title: 'Yellow rings',
    image: '/images/tile_10.png',
    price: 27
  }
];

export const tilesMap = new Map<Tile["id"], Tile>(
  tiles.map((tile) => [tile.id, tile] as const)
);