/**
 * @api {post} v1/review/addReviewPoint Thêm điểm user review
 * @apiName addReviewPoint
 * @apiGroup reviewRoutes
 *
 * @apiParam {Number} point Điểm người dùng nhập.
 * @apiParam {String} khongkhi_text Chất lượng không khí người dùng chọn.
 * @apiParam {String} khongkhi_point Điểm chất lượng không khí người dùng chọn.
 * @apiParam {String} giaothong_text Chất lượng giao thông người dùng chọn.
 * @apiParam {String} giaothong_point Điểm giao thông người dùng chọn.
 * @apiParam {String} ngap_text Chất lượng ngập người dùng chọn.
 * @apiParam {String} ngap_point Điểm chất lượng ngập người dùng chọn.
 * @apiParam {String} anninh_text Chất lượng an ninh người dùng chọn.
 * @apiParam {String} anninh_point Điểm chất lượng an ninh người dùng chọn.
*
 * @apiHeader {String} Authorization Token người dùng.
 * @apiHeaderExample {json} Header-Example:
      {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'
      }

 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/addReviewPoint
 *Post
*{
    "point": 1,
    "khongkhi_text": "Tốt",
    "khongkhi_point": 4,
    "giaothong_text": "Tốt",
    "giaothong_point": 2,
    "ngap_text": "Tốt",
    "ngap_point": 4,
    "anninh_text": "Tốt",
    "anninh_point": 4,
    "area_id": "5f9eb794bfeb451c39400633"
}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
  "ketqua": "add thanh cong"
}
 *
 */

/**
 * @api {get} /v1/review/getReviewPointByArea Lấy điểm đánh giá bằng AreaID
 * @apiName getReviewPointByArea
 * @apiGroup reviewRoutes
 *
 * @apiParam (Query string) {String} area_id Area ID.
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/getReviewPointByArea?area_id=5f9eb794bfeb451c39400633
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
  {
    "_id": "6012e4ba36dcdb2d9592c1e3",
    "point": 4,
    "khongkhi_text": "tốt",
    "khongkhi_point": 5,
    "giaothong_text": "Trung bình",
    "giaothong_point": 2,
    "ngap_text": "kém",
    "ngap_point": 8,
    "anninh_text": "Giỏi",
    "anninh_point": 4,
    "area_id": "5f9eb794bfeb451c39400633",
    "user_id": "5fffd0ad144fb71c25d993f5",
    "__v": 0
  }
]
 *
 */

 /**

/**
 * @api {get} /v1/review/getReviewPointByUser Lấy điểm đánh giá bằng UserID
 * @apiName getReviewPointByUser
 * @apiGroup reviewRoutes
 *
 * @apiParam (Query string) {String} user_id User ID.
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/getReviewPointByUser?user_id=5fffd0ad144fb71c25d993f5
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
  {
    "_id": "6012e4ba36dcdb2d9592c1e3",
    "point": 4,
    "khongkhi_text": "tốt",
    "khongkhi_point": 5,
    "giaothong_text": "Trung bình",
    "giaothong_point": 2,
    "ngap_text": "kém",
    "ngap_point": 8,
    "anninh_text": "Giỏi",
    "anninh_point": 4,
    "area_id": "5f9eb794bfeb451c39400633",
    "user_id": "5fffd0ad144fb71c25d993f5",
    "__v": 0
  }
]
 *
 */

 /**

/**
 * @api {post} v1/review/deleteReviewPoint Xóa điểm user review
 * @apiName deleteReviewPoint
 * @apiGroup reviewRoutes
 *
 * @apiParam {String} area_id Area ID.
*
 * @apiHeader {String} Authorization Token người dùng.
 * @apiHeaderExample {json} Header-Example:
      {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'
      }

 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/deleteReviewPoint
 *Post
*{
    "area_id": "5f9eb794bfeb451c39400633"
}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
  "kq": "xoa thanh cong"
}
 *
 */

/**
 * @api {post} v1/review/addReviewText Thêm bình luận user
 * @apiName addReviewText
 * @apiGroup reviewRoutes
 *
 * @apiParam {String} review_text Bình luận người dùng
 * @apiParam {String} area_id AreaID
*
 * @apiHeader {String} Authorization Token người dùng.
 * @apiHeaderExample {json} Header-Example:
      {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'
      }

 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/addReviewText
 *Post
*{
    "review_text": "mon ngon",
    "area_id": "5f9eb794bfeb451c39400633"
}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
  "ketqua": "add thanh cong"
}
 *
 */

/**
 * @api {get} /v1/review/getReviewTextByArea Lấy bình luận đánh giá bằng AreaID
 * @apiName getReviewTextByArea
 * @apiGroup reviewRoutes
 *
 * @apiParam (Query string) {String} area_id Area ID.
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/getReviewTextByArea?area_id=5f9eb794bfeb451c39400633
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
    {
        "_id": "60139850c5344009104f8860",
        "review_text": "mon ngon",
        "area_id": "5f9eb794bfeb451c39400633",
        "user_id": "5fffd0ad144fb71c25d993f5",
        "__v": 0
    },
]
 *
 */

/**
 * @api {get} /v1/review/getReviewTextByUser Lấy bình luận đánh giá bằng UserID
 * @apiName getReviewTextByUser
 * @apiGroup reviewRoutes
 *
 * @apiParam (Query string) {String} user_id User ID.
 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/getReviewTextByUser?user_id=5fffd0ad144fb71c25d993f5
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
    {
        "_id": "60139850c5344009104f8860",
        "review_text": "mon ngon",
        "area_id": "5f9eb794bfeb451c39400633",
        "user_id": "5fffd0ad144fb71c25d993f5",
        "__v": 0
    },
]
 *
 */

/**
 * @api {post} v1/review/deleteReviewText Xóa bình luận user review
 * @apiName deleteReviewText
 * @apiGroup reviewRoutes
 *
 * @apiParam {String} area_id Area ID.
*
 * @apiHeader {String} Authorization Token người dùng.
 * @apiHeaderExample {json} Header-Example:
      {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'
      }

 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/review/deleteReviewText
 *Post
*{
    "area_id": "5f9eb794bfeb451c39400633"
}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
  "kq": "xoa thanh cong"
}
 *
 */