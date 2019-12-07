export const add = (a: number, b: number): number => a + b;

describe('add', () => {
	it('should add two number', () => {
		expect(add(1,1)).toBe(2);
	});
});
