'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	let {detail,pictures}=event;
	return await db.collection("feedback").add({
		posttime:Date.now(),
		pictures,
		...detail
	})
};
