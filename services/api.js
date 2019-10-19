
import axios from 'axios'
import message from 'element-ui/lib/message'

export function getUserInfo(user) {
  return axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => response.data)
    .catch(error => message.error(error))
}

export function getRepos(user) {
  return axios
    .get(`https://api.github.com/users/${user}/repos?per_page=1000`)
    .then(response => response.data)
    .catch(error => message.error(error))
}

export function getOrgs(user) {
  return axios
    .get(`https://api.github.com/users/${user}/orgs`)
    .then(response => response.data)
    .catch(error => message.error(error))
}