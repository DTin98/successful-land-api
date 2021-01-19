/**
 * @api {get} /v1/areas/search Tìm kiếm khu vực
 * @apiName search
 * @apiGroup areaRoutes
 *
 * @apiParam (Query string) {String} _q Tên khu vực người dùng nhập.
 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/areas/search?_q=hồ
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"5f9eb7a1bfeb451c39400665","fullAddress":"Hồ Chí Minh","type":1,"provinceCode":"ho-chi-minh","districtCode":"","villageCode":""},{"_id":"5f9eb7acbfeb451c39400691","fullAddress":"Huyện Hồng Dân, Bạc Liêu","type":2,"provinceCode":"bac-lieu","districtCode":"huyen-hong-dan","villageCode":""},{"_id":"5f9eb7e5bfeb451c39400772","fullAddress":"Thị xã Hồng Lĩnh, Hà Tĩnh","type":2,"provinceCode":"ha-tinh","districtCode":"thi-xa-hong-linh","villageCode":""},{"_id":"5f9eb7ffbfeb451c394007dc","fullAddress":"Huyện Sìn Hồ, Lai Châu","type":2,"provinceCode":"lai-chau","districtCode":"huyen-sin-ho","villageCode":""},{"_id":"5f9eb7fcbfeb451c394007d0","fullAddress":"Huyện Ngọc Hồi, Kon Tum","type":2,"provinceCode":"kon-tum","districtCode":"huyen-ngoc-hoi","villageCode":""}]
 *
 */

 /**
 * @api {get} /v1/areas/getByBorder Lấy thông tin Border
 * @apiName getByBorder
 * @apiGroup areaRoutes
 *
 * @apiParam (Query string) {String} border_id Truyền ID Border.
 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/areas/getByBorder?border_id=5ff7f56a15b2b03644824b5a
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"_id":"5f9eb795bfeb451c39400637","fullAddress":"Cà Mau","type":1,"provinceCode":"ca-mau","districtCode":"","villageCode":"","createdAt":"2020-09-05T06:52:28.458Z","updatedAt":"2020-09-05T06:52:28.458Z","__v":0}
 *
 */

/**
 * @api {post} /v1/areas/addFavorite Thêm khu vực yêu thích
 * @apiName addFavorite
 * @apiGroup areaRoutes
 *
 * @apiParam {String} username Truyền username.
 * @apiParam {String} areaId Truyền AreaID.

 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/areas/addFavorite
 *Post
	username: hien
	areaId: 5f9eb794bfeb451c39400633
	
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "ok": true
}
 *
 */

/**
 * @api {post} /v1/areas/deleteFavorite Xóa khu vực yêu thích
 * @apiName deleteFavorite
 * @apiGroup areaRoutes
 *
 * @apiParam {String} username Truyền username.
 * @apiParam {String} areaId Truyền AreaID.

 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/areas/deleteFavorite
 *Post
	username: hien
	areaId: 5f9eb794bfeb451c39400633
	
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "ok": true
}
 *
 */

 /**
 * @api {post} /v1/local/register Đăng ký User
 * @apiName register
 * @apiGroup authRoutes
 *
 * @apiParam {String} username Truyền username.
 * @apiParam {String} password Truyền password.
 * @apiParam {String} email Truyền email.

 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/local/register
 *Post
	username: hien
	password: hien123
	email: hien123@gmail.com
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTA5NTU3OTksImV4cCI6MTYxMDk5MTc5OX0.gTojKAh9f0yBEnuxu-f5oN2F28kwTVtMdwgdqRXFvaA",
    "user": {
        "block": false,
        "provider": "local",
        "favoriteAreas": [],
        "_id": "60053c1760752524341f0107",
        "username": "hien",
        "email": "hien@gmail.com",
        "createdAt": "2021-01-18T07:43:19.873Z",
        "updatedAt": "2021-01-18T07:43:19.873Z",
        "__v": 0
    }
}
 *
 */

 /**
 * @api {post} /v1/local/login Đăng Nhập User
 * @apiName login
 * @apiGroup authRoutes
 *
 * @apiParam {String} username Truyền username.
 * @apiParam {String} password Truyền password.


 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/local/login
 *Post
	username: hien
	password: hien123
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTA5NTY1OTksImV4cCI6MTYxMDk5MjU5OX0.wasA_Ga2fwRUp8YLtfg-T4lt3dJVQfIBhNr76psTZ5E",
    "user": {
        "_id": "60053c1760752524341f0107",
        "block": false,
        "provider": "local",
        "username": "hien",
        "email": "hien@gmail.com",
        "createdAt": "2021-01-18T07:43:19.873Z",
        "updatedAt": "2021-01-18T07:43:19.873Z",
        "__v": 0
    }
}
 *
 */

/**
 * @api {get} /v1/borders/getByArea Lấy Border khu vực bằng ID khu vực
 * @apiName getBorder
 * @apiGroup borderRoutes
 *
 * @apiParam (Query string) {String} area_id ID Area.
 * @apiParamExample {json} Request-Example:
 *     http://localhost:4000/v1/borders/getByArea?area_id=5f9ec4e8bfeb451c39403324
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"_id":"5ff87d1f86d0fc1cd486b1e4","type":"Feature","properties":{"GID_0":"VNM","NAME_0":"Vietnam","GID_1":"VNM.25_1","NAME_1":"Hồ Chí Minh","NL_NAME_1":null,"GID_2":"VNM.25.23_1","NAME_2":"Tân Phú","NL_NAME_2":null,"GID_3":"VNM.25.23.6_1","NAME_3":"Sơn Kỳ","VARNAME_3":"Son Ky","NL_NAME_3":null,"TYPE_3":"Phường","ENGTYPE_3":"Ward","CC_3":null,"HASC_3":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[106.62462615966808,10.801467895507812],[106.61368560791021,10.796729087829647],[106.60842895507824,10.80585861206066],[106.60676574707031,10.806114196777457],[106.60774230957031,10.813019752502555],[106.61489868164074,10.809328079223633],[106.63108062744146,10.805447578430233],[106.63278198242193,10.803494453430176],[106.62462615966808,10.801467895507812]]]]},"provinceCode":"ho-chi-minh","districtCode":"quan-tan-phu","villageCode":"phuong-son-ky"}
 *
 */

