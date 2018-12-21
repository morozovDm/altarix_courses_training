import { FilterUsersByIdPipe } from './filter-users-by-id.pipe';

describe('FilterUsersByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterUsersByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
