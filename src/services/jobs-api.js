const BASE_URL = '/api/jobs';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}
  
export function create(job) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(job)
  }).then(res => res.json());
}
  
export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
  
export function update(job) {
  console.log(job);
  return fetch(`${BASE_URL}/${job.id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(job)
  }).then(res => res.json());
}