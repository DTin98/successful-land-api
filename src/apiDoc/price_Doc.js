/**
 * @api {get} price Tìm giá trung bình của khu vực
 * @apiName priceAVSeach
 * @apiGroup priceRoutes
 *
 * @apiParam (Query string) {String} type 1,2,3 là tỉnh, huyện, hoặc xã (type của areas)
 * @apiParam (Query string) {String} provinceCode mã Tỉnh
- VD: ho-chi-minh, tien-giang,… 
 * @apiParam (Query string) {String} districtCode mã quận/huyện
- VD: quan-1, huyen-binh-chanh,…
 * @apiParam (Query string) {String} villageCode mã xã/phường
- VD: phuong-7, xa-tan-phu,… 
 * @apiParam (Query string) {String} category_id loại bất động sản (từ 0 -> 15)
- VD: id của mấy cái loại như "Bán căn hộ chung cư" 
có thể bằng "all" nghĩa là tất cả các loại bất động sản
 * @apiParam (Query string) {String} year năm cần thống kê về giá (hiện tại year nằm trong khoản 2015 - 2019)
- VD: year = "all", thì giá sẽ được xuất theo trung bình của các năm: 2015,2016,2017,2018,2019 
  nếu 2015 <= year <= 2019, thì giá sẽ được xuất theo trung bình tháng của năm đó: (12 cột tương ứng 12 tháng) 

 * @apiParamExample {json} Request-Example:
 *     http://47.241.7.27:5000/price?type=3&provinceCode=ho-chi-minh&districtCode=quan-3&villageCode=phuong-06&year=2019&category_id=1&fbclid=IwAR1BGxCyjsLz9-u5EbCrneoMy8Hspns1v7GFLGvv8ARpvJU1weoenSNwDXY
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
    {
        "province": "Hồ Chí Minh",
        "district": "Quận 3",
        "village": "Phường 06",
        "provinceCode": "ho-chi-minh",
        "districtCode": "quan-3",
        "villageCode": "phuong-06",
        "category": [
            {
                "name": "Bán nhà biệt thự, liền kề",
                "unit": "vnđ/m^2",
                "average_price_year": [
                    {
                        "year": 2019,
                        "price": 200114537.54376927,
                        "average_price_month": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": 192640362.14598328,
                            "6": 103357673.30948731,
                            "7": 239377192.98245612,
                            "8": 183955033.2141032,
                            "9": 318819858.49054945,
                            "10": 185000000,
                            "11": 0,
                            "12": 0
                        }
                    }
                ]
            }
        ]
    }
]
 *
 */

/**
 * @api {get} price_category Tìm kiếm thể loại bất động sản
 * @apiName price_category
 * @apiGroup priceRoutes
 *
 * @apiParamExample {json} Request-Example:
 *     http://47.241.7.27:5000/price_category
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
    {
        "id": 8,
        "name": "Cho thuê căn hộ chung cư"
    },
    {
        "id": 0,
        "name": "Bán căn hộ chung cư"
    },
    {
        "id": 5,
        "name": "Bán đất"
    },
    {
        "id": 9,
        "name": "Cho thuê cửa hàng, ki ốt"
    },
    {
        "id": 12,
        "name": "Cho thuê nhà riêng"
    },
    {
        "id": 11,
        "name": "Cho thuê nhà mặt phố"
    },
    {
        "id": 7,
        "name": "Bán loại bất động sản khác"
    },
    {
        "id": 2,
        "name": "Bán nhà mặt phố"
    },
    {
        "id": 15,
        "name": "Cho thuê loại bất động sản khác"
    },
    {
        "id": 3,
        "name": "Bán nhà riêng"
    },
    {
        "id": 4,
        "name": "Bán trang trại, khu nghỉ dưỡng"
    },
    {
        "id": 10,
        "name": "Cho thuê kho, nhà xưởng, đất"
    },
    {
        "id": 6,
        "name": "Bán đất nền dự án"
    },
    {
        "id": 13,
        "name": "Cho thuê nhà trọ, phòng trọ"
    },
    {
        "id": 1,
        "name": "Bán nhà biệt thự, liền kề"
    },
    {
        "id": 14,
        "name": "Cho thuê văn phòng"
    }
]
 *
 */