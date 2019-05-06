import { getAxiosClient } from '../../utils/index'

const axiosForUser = getAxiosClient({ baseURL: 'http://116.196.89.224:8083/' })

// 登陆
export function getUserInfo () {
  return axiosForUser.get('user/getUserDetail', {
    params: { id: '1' },
  })
}
