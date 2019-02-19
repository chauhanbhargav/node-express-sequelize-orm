var responseHandler = {
	response: function (status, message, data) {
		return {
			meta: {
				status : status,
				message : message
			},
			data: data
		};
	}
};
module.exports = responseHandler;