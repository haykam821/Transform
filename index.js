function createTransformer(func) {
	/**
	 * Transforms something.
	 * @param {*} thing The thing to transform.
	 */
	/**
	 * Tranforms an index of something.
	 * @param {*} The thing to transform an index of.
	 * @param {number} index The index to transform.
	 */
	/**
	 * Transforms a portion of something.
	 * @param {*} thing The thing to transform. If it is the only parameter provided, transforms the entire string.
	 * @param {number} index The starting index of the portion to transform.
	 * @param {number} endIndex The ending index of the portion to transform.
	 */
	return (thing, index, endIndex) => {

	};
}
module.exports.createTransformer = createTransformer;

// Transformers for built-in things
module.exports.toUpperCase = createTransformer(String().toUpperCase);
module.exports.toLowerCase = createTransformer(String().toLowerCase);
