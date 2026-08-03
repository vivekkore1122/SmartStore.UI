import { Capitalize } from './capitalize-pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new Capitalize();
    expect(pipe).toBeTruthy();
  });
});
