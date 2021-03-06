const products = {
  'code': 200,
  'message': 'OK',
  'data': {
    'records': [{
      'id': 1,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AB/ABR 系列',
      'img': 'http://gy-peak.cn/images/dm-ABcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/ABABR-Ch.pdf',
      'products': null,
    }, {
      'id': 2,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AD 系列',
      'img': 'http://gy-peak.cn/images/dm-ADcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AD-ADR-Ch.pdf',
      'products': null,
    }, {
      'id': 3,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AE 系列',
      'img': 'http://gy-peak.cn/images/dm-AEcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AEAER-Ch.pdf',
      'products': null,
    }, {
      'id': 4,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AF/AFR 系列',
      'img': 'http://gy-peak.cn/images/dm-AFcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AFAFR-Ch.pdf',
      'products': null,
    }, {
      'id': 5,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AFH / AFHK 系列',
      'img': 'http://gy-peak.cn/images/DM-AFH.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AFH-CH.pdf',
      'products': null,
    }, {
      'id': 6,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AFX / AFXR 系列',
      'img': 'http://gy-peak.cn/images/DM-AFX.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AFX-CH.pdf',
      'products': null,
    }, {
      'id': 7,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AH / AHK 系列',
      'img': 'http://gy-peak.cn/images/DM-AH.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AH-CH.pdf',
      'products': null,
    }, {
      'id': 8,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AP / APK 系列',
      'img': 'http://gy-peak.cn/images/DM-AP.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AP-CH.pdf',
      'products': null,
    }, {
      'id': 9,
      'category': 1,
      'categoryName': '减速机',
      'title': 'AT / ATB 系列',
      'img': 'http://gy-peak.cn/images/dm-AT-ATBcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/AT-ATB-Ch.pdf',
      'products': null,
    }, {
      'id': 10,
      'category': 1,
      'categoryName': '减速机',
      'title': 'K 系列',
      'img': 'http://gy-peak.cn/images/dm-kcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/K-series.pdf',
      'products': null,
    }], 'total': 11, 'size': 10, 'current': 1, 'orders': [], 'hitCount': false, 'searchCount': true, 'pages': 2,
  },
};

const product = {
  'code': 200,
  'message': 'ok',
  'data':
    {
      'id': '1',
      'title': 'APEX台湾精锐减速机AB',
      'img': 'http://gy-peak.cn/images/dm-ABcal.jpg',
      'pdf': 'http://gy-peak.cn/pdf/ABABR-Ch.pdf',
      'categoryImgList': ['http://gy-peak.cn/images/AB/AB.jpg', 'http://gy-peak.cn/images/AB/ABR.jpg', 'http://gy-peak.cn/images/AB/ABR_Dissection.jpg'],
      'featuresImgList': ['http://gy-peak.cn/images/AB/features/AB_00.jpg', 'http://gy-peak.cn/images/AB/features/AB_01.jpg'],
      'specificationsImgList': ['http://gy-peak.cn/images/AB/specifications/AB_00.jpg', 'http://gy-peak.cn/images/AB/specifications/AB_01.jpg'],
      'depict': 'APEX台湾精锐减速机AB',
      'synopsis': '螺旋齿轮设计；筒夹式的锁紧机构；马达连接板的模块化设计；一体式的齿轮箱本体；NyoGel 792D 合成润滑油脂；一体式的臂架；先进的离子氮化技术；3D拓蹼的设计分析技术；满针的滚针轴承设计。',
      'number': '10417075363',
      'model': 'AB042 单节 3-10',
      'brand': 'APEX产品(台湾精锐)',
      'deliveryType': '现货',
      'afterSaleService': '由广用发货并提供售后服务',
    },
};

export default {
  // 支持值为 Object 和 Array
  'GET /api/products': products,
  'GET /api/products/1': product,
};
