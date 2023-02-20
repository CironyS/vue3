// 1.引入mockjs
const Mock = require('mockjs');

// 2.创建随机生成的对象
const Random = Mock.Random;

// 3.导出数据
module.exports = () => {
	let data = { news: [] };

	for (let i = 0; i < 5; i++) {
		data.news.push({
			id: i,
			title: Random.cword(10, 20),
			content: Random.cparagraph(10),
		});
	}
	return data;
};
