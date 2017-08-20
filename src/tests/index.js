import expect from 'indexof-limited/tests/expect';
import indexOf from 'indexof-limited';

describe('index', () => {
  it('returns indexOf as default', () => {
    expect(indexOf).to.be.a('function');
  });
});
