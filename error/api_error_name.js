let errorName = {
	NOT_FOUND: {
		code: 404,
		msg: "请求的路径不对"
	},
	UN_KNOW_ERROR: {
		code: -1,
		msg: "未知错误"
	},
	ABORT: {
		code: 500,
		msg: "服务器崩溃"
	}
}

module.exports = errorName;