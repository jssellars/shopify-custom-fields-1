import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncates text', () => {
    expect(pipe.transform('hello world', 5)).toBe('hello...');
  });

  it('doesn\'t truncate when text length is less than the limit', () => {
    expect(pipe.transform('hello world', 15)).toBe('hello world');
  });
});
