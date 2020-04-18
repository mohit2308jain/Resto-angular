import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]> { 
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LEADERS.filter((leader) => (leader.id == id))[0])
    }, 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0])
      }, 2000)
    });
  }

  constructor() { }
}