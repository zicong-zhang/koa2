const apiErrorName = require('./api_error_name');

class ApiError extends Error {

	constructor (errorName) {
		super();

		const info = this.getErrorInfo(errorName);
		
		this.errorName = errorName;
		this.errorCode = info.code;
		this.errorMsg = info.msg;
	}

	getErrorInfo(name) {
		let info = null;
		console.log('name:_____', name);
		if (name) {
			info = apiErrorName[name];
		} else {
			info = apiErrorName['UN_KNOW_ERROR'];
		}
		console.log('info:_____', info);

		return info;
	}
}

module.exports = ApiError;