const products = {
  "code": 200,
  "message": "ok",
  "data": [
    {
      "id": "1",
      "title": "AP/APK系列",
      "img": "http://www.apexdyna.com/zh/images/DM-AP.png",
    },
    {
      "id": "2",
      "title": "AH/AHK系列",
      "img": "http://www.apexdyna.com/zh/images/DM-AH.png",
    },
    {
      "id": "3",
      "title": "AFH / AFHK 系列",
      "img": "http://www.apexdyna.com/zh/images/DM-AFH.png",
    },
    {
      "id": "4",
      "title": "K系列",
      "img": "http://www.apexdyna.com/zh/images/dm-kcal.png",
    },
    {
      "id": "5",
      "title": "AB/ABR系列",
      "img": "http://www.apexdyna.com/zh/images/dm-ABcal.png",
    },
    {
      "id": "6",
      "title": "AF/AFR系列",
      "img": "http://www.apexdyna.com/zh/images/dm-AFcal.png",
    },
  ]
};

const product = {
  "code": 200,
  "message": "ok",
  "data":
    {
      "id": "1",
      "title": "AP/APK系列",
      "img": "http://www.apexdyna.com/zh/images/DM-AP.png",
      "pdf": "http://www.apexdyna.com/download/catalog/AP-CH.pdf"
    }
};

export default {
  // 支持值为 Object 和 Array
  'GET /api/products': products,
  'GET /api/products/:id': product,
};
