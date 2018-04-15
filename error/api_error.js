const apiErrorName = require('./api_error_name');

class ApiError extends Error {

	constructor (errorName) {
		super();

		const info = this.getErrorInfo(errorName);
		
		this.errorName = errorName;
		this.errorCode = info.code;
		this.errorMsg = info.msg;

		// 统一判断传入的所有参数不能为空 或 限制只能传入多少参数
	}

	getErrorInfo(name) {
		let info = null;

		if (name) {
			info = apiErrorName[name];
		} else {
			info = apiErrorName.UN_KNOW_ERROR;
		}

		return info;
	}
}

module.exports = ApiError;