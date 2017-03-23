/*
 * Recursively flatten array
 * @param {Array} source
 * @returns {Array} - Flattened array
 **/
export const flattenArray = (source = []) =>
  source.reduce((arr, node) => Array.isArray(node) ? arr.concat(flattenArray(node)) : arr.concat(node), []);
