import { getAxiosClient } from '../../utils/index'

const axiosForUser = getAxiosClient({ baseURL: 'http://116.196.89.224:8083/' })
const axiosClient = getAxiosClient({ baseURL: 'http://116.196.89.224:8082' })
// mp.minecraft.education.jdcloud.com/catalog
// mp.minecraft.education.jdcloud.com/usercenter
// 登陆
export function login () {
  return axiosForUser.post('user/login', {
    params: { userName: 'zhangsan1', password: '123' },
  })
}
