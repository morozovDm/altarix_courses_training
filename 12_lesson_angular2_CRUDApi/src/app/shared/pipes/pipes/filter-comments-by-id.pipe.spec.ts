import { FilterCommentsByIdPipe } from './filter-comments-by-id.pipe';

describe('FilterCommentsByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCommentsByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
