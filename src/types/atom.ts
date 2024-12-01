export interface ElementConfig {
  atomicNumber: number;
  symbol: string;
  name: string;
  protons: number;
  neutrons: number;
  electrons: number[];  // Array of electrons per shell
  color: string;
}

export const ELEMENTS: Record<string, ElementConfig> = {
  hydrogen: {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Hydrogen',
    protons: 1,
    neutrons: 0,
    electrons: [1],
    color: '#FF5722'
  },
  helium: {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Helium',
    protons: 2,
    neutrons: 2,
    electrons: [2],
    color: '#E91E63'
  },
  lithium: {
    atomicNumber: 3,
    symbol: 'Li',
    name: 'Lithium',
    protons: 3,
    neutrons: 4,
    electrons: [2, 1],
    color: '#9C27B0'
  },
  beryllium: {
    atomicNumber: 4,
    symbol: 'Be',
    name: 'Beryllium',
    protons: 4,
    neutrons: 5,
    electrons: [2, 2],
    color: '#673AB7'
  }
};