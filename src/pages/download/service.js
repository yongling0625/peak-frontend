import request from '@/utils/request';

export async function fetchDownloadFile() {
  return request('/products/category');
}
