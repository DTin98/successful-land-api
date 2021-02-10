/**
 * @api {get} /v1/utilities/search Tìm kiếm tiện ích trong 1 khu vực
 * @apiName searchArea
 * @apiGroup utilitiesRoutes
 *
 * @apiParam (Query string) {String} _limit Giới hạn tiện ích trả về.
 * @apiParam (Query string) {String} border_id ID Border.
 * @apiParam (Query string) {String} page Phân trang.
 * @apiParam (Query string) {String} category 
- restaurant : category=1<br>
- coffee: category=2<br>
- entertaiment: category=3<br>
- atm_bank: category=4<br>
- hospital: category=5<br>
- hotel_travel: category=6<br>
- store_supermarket: category=7<br>
- services: category=8<br>
- place: category=9<br>
- education: category=10<br>
Giả sử muốn tìm tiện ích nhà hàng thì:
- http://175.41.154.174:4000/v1/utilities/search?_limit=5&border_id=5ff7f56a15b2b03644824b4e&category=1&page=1
 *
 * @apiParamExample {json} Request-Example:
 *	http://175.41.154.174:4000/v1/utilities/search?_limit=5&border_id=5ff7f56a15b2b03644824b4e&category=1&page=1
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"5fdb0a64bcaa773878ec899b","gps":{"type":"Point","coordinates":[106.63173676,10.80448055]},"hash":"384359014550541","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898f","gps":{"type":"Point","coordinates":[106.62998962,10.80547523]},"hash":"753956292549977","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898e","gps":{"type":"Point","coordinates":[106.62779999,10.80602455]},"hash":"3714308804559427","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a17","gps":{"type":"Point","coordinates":[106.62004852,10.80772877]},"hash":"3274362591778644","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a46","gps":{"type":"Point","coordinates":[106.61247253,10.81052971]},"hash":"597577700609799","category":"Các cây ATM"}]
 *
 */

/**
 * @api {get} /v1/utilities/search Tìm kiếm tiện ích theo 1 border
 * @apiName searchBorder
 * @apiGroup utilitiesRoutes
 *
 * @apiParam (Query string) {String} _limit Giới hạn tiện ích trả về.
 * @apiParam (Query string) {String} border tọa độ 2 điểm hình chữ nhật trên màn hình.
 * @apiParam (Query string) {String} page Phân trang.
 * @apiParam (Query string) {String} category 
- restaurant : category=1<br>
- coffee: category=2<br>
- entertaiment: category=3<br>
- atm_bank: category=4<br>
- hospital: category=5<br>
- hotel_travel: category=6<br>
- store_supermarket: category=7<br>
- services: category=8<br>
- place: category=9<br>
- education: category=10<br>
Giả sử muốn tìm tiện ích nhà hàng thì chạy:
- http://175.41.154.174:4000/v1/utilities/search?_limit=5&borders=10.797928,106.605149,10.811585,106.626574&category=1&page=1
 *
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/utilities/search?_limit=5&borders=10.797928,106.605149,10.811585,106.626574&category=1&page=1
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"5fdb0a64bcaa773878ec899b","gps":{"type":"Point","coordinates":[106.63173676,10.80448055]},"hash":"384359014550541","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898f","gps":{"type":"Point","coordinates":[106.62998962,10.80547523]},"hash":"753956292549977","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec898e","gps":{"type":"Point","coordinates":[106.62779999,10.80602455]},"hash":"3714308804559427","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a17","gps":{"type":"Point","coordinates":[106.62004852,10.80772877]},"hash":"3274362591778644","category":"Các cây ATM"},{"_id":"5fdb0a64bcaa773878ec8a46","gps":{"type":"Point","coordinates":[106.61247253,10.81052971]},"hash":"597577700609799","category":"Các cây ATM"}]
 *
 */

/**
 * @api {get} /v1/utilities/count Đếm số tiện ích trong 1 khu vực
 * @apiName countArea
 * @apiGroup utilitiesRoutes
 *
 * @apiParam (Query string) {String} border_id ID Border.
 * @apiParam (Query string) {String} category 
- restaurant : category=1<br>
- coffee: category=2<br>
- entertaiment: category=3<br>
- atm_bank: category=4<br>
- hospital: category=5<br>
- hotel_travel: category=6<br>
- store_supermarket: category=7<br>
- services: category=8<br>
- place: category=9<br>
- education: category=10<br>
Giả sử muốn tìm tiện ích nhà hàng thì chạy:
- http://175.41.154.174:4000/v1/utilities/count?border_id=5ff7f56a15b2b03644824b4e&category=1

 *
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/utilities/count?border_id=5ff7f56a15b2b03644824b4e&category=1
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"count":5,"category":"Các cây ATM"}
 *
 */

/**
 * @api {get} /v1/utilities/count Đếm số tiện ích trong 1 border
 * @apiName countBorder
 * @apiGroup utilitiesRoutes
 *
 * @apiParam (Query string) {String} border tọa độ 2 điểm hình chữ nhật trên màn hình.
 * @apiParam (Query string) {String} category 
- restaurant : category=1<br>
- coffee: category=2<br>
- entertaiment: category=3<br>
- atm_bank: category=4<br>
- hospital: category=5<br>
- hotel_travel: category=6<br>
- store_supermarket: category=7<br>
- services: category=8<br>
- place: category=9<br>
- education: category=10<br>
Giả sử muốn tìm tiện ích nhà hàng thì chạy:
- http://175.41.154.174:4000/v1/utilities/count?borders=10.797928,106.605149,10.811585,106.626574&category=1

 *
 * @apiParamExample {json} Request-Example:
 *    http://175.41.154.174:4000/v1/utilities/count?borders=10.797928,106.605149,10.811585,106.626574&category=1
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"count":5,"category":"Các cây ATM"}
 *
 */