/**
 * @api {get} price Tìm giá trung bình của khu vực
 * @apiName priceAVSeach
 * @apiGroup priceRoutes
 *
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
 *     http://47.241.7.27:5000/price?type=3&provinceCode=ho-chi-minh&districtCode=quan-3&villageCode=phuong-06&year=2019&category_id=1
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

/**
 * @api {get} structure API cơ cấu theo thể loại bất động sản của khu vực
 * @apiName structureSeach
 * @apiGroup priceRoutes
 *
 * @apiParam (Query string) {String} provinceCode mã Tỉnh
- VD: ho-chi-minh, tien-giang,… 
 * @apiParam (Query string) {String} districtCode mã quận/huyện
- VD: quan-1, huyen-binh-chanh,…
 * @apiParam (Query string) {String} villageCode mã xã/phường
- VD: phuong-7, xa-tan-phu,… 
 * @apiParam (Query string) {String} yyear: năm cần thống kê về cơ cấu theo thể loại (hiện tại year nằm trong khoản 2015 - 2019) 
- year = "all", thì cơ cấu được thống kê theo tất cả các năm: 2015,2016,2017,2018,2019 
- nếu 2015 <= year <= 2019, thì cơ cấu theo từng năm: (12 cột tương ứng 12 tháng) 

 * @apiParamExample {json} Request-Example:
 *     http://47.241.7.27:5000/structure?provinceCode=ho-chi-minh&year=2019&districtCode=quan-3&villageCode=phuong-06
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [
    {
        "province": "Hồ Chí Minh",
        "district": "Quận 3",
        "village": "Phường 06",
        "provinceCode": "ho-chi-minh",
        "districtCode": "quan-3",
        "villageCode": "phuong-06",
        "structure_by_year": [
            {
                "year": 2019,
                "title": "Biểu đồ cơ cấu mua bán bất động sản theo thể loại năm 2019",
                "data": [
                    {
                        "x": "Bán căn hộ chung cư",
                        "y": 4
                    },
                    {
                        "x": "Bán nhà biệt thự, liền kề",
                        "y": 4
                    },
                    {
                        "x": "Bán nhà mặt phố",
                        "y": 1178
                    },
                    {
                        "x": "Bán nhà riêng",
                        "y": 278
                    },
                    {
                        "x": "Bán trang trại, khu nghỉ dưỡng",
                        "y": 0
                    },
                    {
                        "x": "Bán đất",
                        "y": 47
                    },
                    {
                        "x": "Bán đất nền dự án",
                        "y": 0
                    },
                    {
                        "x": "Bán loại bất động sản khác",
                        "y": 2
                    },
                    {
                        "x": "Cho thuê căn hộ chung cư",
                        "y": 13
                    },
                    {
                        "x": "Cho thuê cửa hàng, ki ốt",
                        "y": 21
                    },
                    {
                        "x": "Cho thuê kho, nhà xưởng, đất",
                        "y": 6
                    },
                    {
                        "x": "Cho thuê nhà mặt phố",
                        "y": 416
                    },
                    {
                        "x": "Cho thuê nhà riêng",
                        "y": 77
                    },
                    {
                        "x": "Cho thuê nhà trọ, phòng trọ",
                        "y": 10
                    },
                    {
                        "x": "Cho thuê văn phòng",
                        "y": 50
                    },
                    {
                        "x": "Cho thuê loại bất động sản khác",
                        "y": 0
                    }
                ]
            }
        ]
    }
]
 *
 */
