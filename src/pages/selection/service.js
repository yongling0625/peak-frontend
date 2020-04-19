import request from '@/utils/request';

export async function submitSelection(payload) {
  return request.post('/email/sendDemand', {
    data: payload
  });
}
