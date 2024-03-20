const db=uniCloud.database();
const dbCmd=db.command;
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * 自定义增减
	 * @param {Object} tab		数据表
	 * @param {Object} attr		属性
	 * @param {Object} id
	 * @param {Object} num		1自增	-1自减
	 */
	async operation(tab,attr,id,num){
		let obj={}
		obj[attr]=dbCmd.inc(num)
		return await db.collection(tab).doc(id).update(obj)
	}
}
