import expect from 'indexof-limited/tests/expect';
import indexOf from 'indexof-limited/indexOf';

/* eslint-disable max-len */

describe('indexOf', () => {
  describe('without limits', () => {
    it('returns -1 when not found', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'foo';

      expect(indexOf(longtext, substring)).to.equal(-1);
    });

    it('returns -1 when not found - only one letter mismatches', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'dolor si amet';

      expect(indexOf(longtext, substring)).to.equal(-1);
    });

    it('finds at the begin', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'Lorem';

      expect(indexOf(longtext, substring)).to.equal(0);
    });

    it('finds at the end', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'aliqua';

      expect(indexOf(longtext, substring)).to.equal(116);
    });

    it('finds at the middle', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring)).to.equal(6);
    });
  });

  describe('with only initial limit', () => {
    it('returns -1 when not found', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'foo';

      expect(indexOf(longtext, substring, 10)).to.equal(-1);
    });

    it('returns -1 when the substring is before the initial limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 40)).to.equal(-1);
    });

    it('returns -1 when initial limit is inside the substring', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 7)).to.equal(-1);
    });

    it('finds at the begin of limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 6)).to.equal(6);
    });

    it('finds at the middle', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'dolore';

      expect(indexOf(longtext, substring, 40)).to.equal(103);
    });
  });

  describe('with both limits', () => {
    it('returns -1 when not found', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'foo';

      expect(indexOf(longtext, substring, 10, 30)).to.equal(-1);
    });

    it('returns -1 when the substring is before the initial limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 40, 80)).to.equal(-1);
    });

    it('returns -1 when initial limit is inside the substring', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 7, 80)).to.equal(-1);
    });

    it('finds at the begin of limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'ipsum';

      expect(indexOf(longtext, substring, 6, 40)).to.equal(6);
    });

    it('finds at the middle', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'consectetur';

      expect(indexOf(longtext, substring, 10, 80)).to.equal(28);
    });

    it('finds at the end of limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'consectetur';

      expect(indexOf(longtext, substring, 10, 38)).to.equal(28);
    });

    it('returns -1 when end limit is inside the substring', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'consectetur';

      expect(indexOf(longtext, substring, 10, 37)).to.equal(-1);
    });

    it('returns -1 when the substring is after the end limit', () => {
      const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const substring = 'consectetur';

      expect(indexOf(longtext, substring, 10, 15)).to.equal(-1);
    });
  });
});
