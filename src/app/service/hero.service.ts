import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      id: 1,
      name: 'Iron Man',
      superPower: 'Superstrength',
      address: 'California'
    },
    {
      id: 2,
      name: 'Spider-Man',
      superPower: 'Wall-crawling',
      address: 'New York'
    },
    {
      id: 3,
      name: 'Captain America',
      superPower: 'Super-intelligence',
      address: 'Brooklyn'
    },
    {
      id: 4,
      name: 'Doctor Strange',
      superPower: 'Teleportation',
      address: 'New York'
    },
    {
      id: 5,
      name: 'Hulk',
      superPower: 'Breathing underwater',
      address: 'Ohio'
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.list;
  }
}
