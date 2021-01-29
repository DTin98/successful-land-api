/**
 * @api {get} /v1/utilitie/search Tìm kiếm tiện ích trong 1 khu vực
 * @apiName searchArea
 * @apiGroup utilitieRoutes
 *
 * @apiParam (Query string) {String} _limit Giới hạn tiện ích trả về.
 * @apiParam (Query string) {String} border_id ID Border.
 * @apiParam (Query string) {String} category nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.
 *
 * @apiParamExample {json} Request-Example:
 *	http://175.41.154.174:4000/v1/utilities/search?_limit=5&border_id=5f9ec4e8bfeb451c39403324&category=C%C3%A1c%20c%C3%A2y%20ATM
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"5fdb0a64bcaa773878ec899b","gps":{"type":"Point","coordinates":[106.63173676,10.80448055]},"hash":"384359014550541","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898f","gps":{"type":"Point","coordinates":[106.62998962,10.80547523]},"hash":"753956292549977","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898e","gps":{"type":"Point","coordinates":[106.62779999,10.80602455]},"hash":"3714308804559427","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a17","gps":{"type":"Point","coordinates":[106.62004852,10.80772877]},"hash":"3274362591778644","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a46","gps":{"type":"Point","coordinates":[106.61247253,10.81052971]},"hash":"597577700609799","category":"Các cây ATM"}]
 *
 */

/**
 * @api {get} /v1/utilitie/search Tìm kiếm tiện ích theo 1 border
 * @apiName searchBorder
 * @apiGroup utilitieRoutes
 *
 * @apiParam (Query string) {String} _limit Giới hạn tiện ích trả về.
 * @apiParam (Query string) {String} border tọa độ 2 điểm hình chữ nhật trên màn hình.
 * @apiParam (Query string) {String} category nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.
 *
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/utilities/search?_limit=5&border=10.797928,106.605149,10.811585,106.626574&category=C%C3%A1c%20c%C3%A2y%20ATM
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"5fdb0a64bcaa773878ec899b","gps":{"type":"Point","coordinates":[106.63173676,10.80448055]},"hash":"384359014550541","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898f","gps":{"type":"Point","coordinates":[106.62998962,10.80547523]},"hash":"753956292549977","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898e","gps":{"type":"Point","coordinates":[106.62779999,10.80602455]},"hash":"3714308804559427","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a17","gps":{"type":"Point","coordinates":[106.62004852,10.80772877]},"hash":"3274362591778644","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a46","gps":{"type":"Point","coordinates":[106.61247253,10.81052971]},"hash":"597577700609799","category":"Các cây ATM"}]
 *
 */

/**
 * @api {get} /v1/utilitie/count Đếm số tiện ích trong 1 khu vực
 * @apiName countArea
 * @apiGroup utilitieRoutes
 *
 * @apiParam (Query string) {String} border_id ID Border.
 * @apiParam (Query string) {String} category nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.
 *
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/utilities/count?border_id=5f9ec4e8bfeb451c39403324&category=C%C3%A1c%20c%C3%A2y%20ATM
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"count":5,"category":"Các cây ATM"}
 *
 */

/**
 * @api {get} /v1/utilitie/count Đếm số tiện ích trong 1 border
 * @apiName countBorder
 * @apiGroup utilitieRoutes
 *
 * @apiParam (Query string) {String} border tọa độ 2 điểm hình chữ nhật trên màn hình.
 * @apiParam (Query string) {String} category nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.
 *
 * @apiParamExample {json} Request-Example:
 *    http://175.41.154.174:4000/v1/utilities/count?border=10.797928,106.605149,10.811585,106.626574&category=C%C3%A1c%20c%C3%A2y%20ATM
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"count":5,"category":"Các cây ATM"}
 *
 */