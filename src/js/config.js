angular.module("Uelives").constant("config", {
	url: "http://",
	imageUrl: "http://",
	request: {
		"SUCCESS": "200",
		"TOKEN_INVALID": "405"
	},
	response: {
		"SUCCESS": 1
	},
	common_params: {},
	interceptor: [
		"index",
		"booking_date",
		"choice_city",
		"choice_language",
		"choice_time",
		"edit_basic_info",
		"edit_edu_exprience",
		"edit_work_exprience",
		"interpreter_detail",
		"interpreter_level",
		"interpreter_list",
		"interpreter_evaluate",
		"interpreter_settled",
		"online_booking",
		"online_preview",
		"order_management_interpreter",
		"order_management_user",
		"order_cancel",
		"order_confirm",
		"order_finish",
		"order_wait",
		"related_industry",
	]
});