import Repository from '@/repositories'

const resource = '/posts'

export default {
  get () {
    return Repository.get(`${resource}`)
  }
}
