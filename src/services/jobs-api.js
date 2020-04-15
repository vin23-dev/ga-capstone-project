import tokenService from '../utils/tokenService';
const BASE_URL = '/api/jobs';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }
  return fetch(BASE_URL, options).then(res => res.json())
}
  
export function create(job) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}, 
    body: JSON.stringify(job)
  }).then(res => res.json());
}
  
export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}
  
export function update(job) {
  return fetch(`${BASE_URL}/${job.id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(job)
  }).then(res => res.json());
}