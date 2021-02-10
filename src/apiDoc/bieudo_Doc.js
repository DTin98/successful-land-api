/**
 * @api {get} v1/price/getBieuDo Lấy dữ liệu biểu đồ giá
 * @apiName getBieuDo
 * @apiGroup chartRoutes
 *
 * @apiParam (Query string) {String} time Khoảng thời gian năm người dùng chọn.
 * @apiParam (Query string) {String} provinceCode thành phố.
 * @apiParam (Query string) {String} districtCode Quận.
 * @apiParam (Query string) {String} villageCode Phường.
 * @apiParam (Query string) {String} category Thể loại đăng tin rao bán.

 * @apiParamExample {json} Request-Example:
 *     http://175.41.154.174:4000/v1/price/getBieuDo?time=2019&provinceCode=ho-chi-minh&districtCode=quan-1&villageCode=phuong-da-kao&category=Bán căn hộ chung cư
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{"_id":"600ff7e4110a4816609eef62","time":"1/2019","price":8666666.667000001,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef63","time":"2/2019","price":40384057.970000006,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef64","time":"3/2019","price":135661822.85290325,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef65","time":"4/2019","price":137320058.90471265,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef66","time":"5/2019","price":119886312.19000001,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef67","time":"6/2019","price":108585427.73789473,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef68","time":"7/2019","price":110422582.39730771,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef69","time":"8/2019","price":89200627.3746154,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef6a","time":"9/2019","price":139239077.91279998,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef6b","time":"10/2019","price":123043834.19000001,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef6c","time":"11/2019","price":147683379.83166668,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019},{"_id":"600ff7e4110a4816609eef6d","time":"12/2019","price":107301587.3,"provinceCode":"ho-chi-minh","districtCode":"quan-1","villageCode":"phuong-da-kao","category":"Bán căn hộ chung cư","unit":"vnđ/m^2","year":2019}]
 *
 */