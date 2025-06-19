export const pickRandom = <T>(arg: T[]): T =>
  arg[Math.floor(Math.random() * arg.length)];
