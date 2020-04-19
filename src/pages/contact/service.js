import request from '@/utils/request';

export async function submitContact(payload) {
  return request.post('/email/sendProblem', {
    data: payload
  });
}
