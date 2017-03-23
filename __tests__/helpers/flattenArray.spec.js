import { flattenArray } from '../../src/helpers';

describe('helpers', () => {
  describe('#flattenArray', () => {
    it('should flatten an array of arrays', () => {
      const arrayToFlatten = [[1], [2], [3]]
      expect(flattenArray(arrayToFlatten)).toMatchSnapshot();
    });

    it('should flatten nested arrays', () => {
      const arrayToFlatten = [[1, ['bob']], [{ hello: 'world'}, [4]], [5, [false, [7]]]];
      expect(flattenArray(arrayToFlatten)).toMatchSnapshot();
    });
  });
});
