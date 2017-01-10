/**
 * Created by 21036 on 15/12/16.
 */

import sum from "./sum"

test('adds 1 + 2 to equal 3', () => {
    const sum = require('../sum');
expect(sum(1, 2)).toBe(3);
});