module.exports = {
	mysql: {
		host: '47.102.128.95', 
		user: 'root',
		password: 'buzd198794',
		database:'mercyShop', // 前面建的user表位于这个数据库中
        port: 3306,
		multipleStatements: true, //允许执行多条语句,
		secretOrKey: 'secret'
	}
};