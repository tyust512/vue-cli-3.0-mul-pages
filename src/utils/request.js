import axios from 'axios'
import { isObject, isFile } from './index'

// 添加拦截器
function addInterceptors (client, type, actionAndErrorFuncs = []) {
  const typeList = ['request', 'response']
  if (!typeList.includes(type)) {
    throw new Error('类型必须为 request 或 response')
  }

  if (!Array.isArray(actionAndErrorFuncs) || actionAndErrorFuncs.length !== 2) {
    throw new Error('actionAndErrorFuncs参数数组需2个长度')
  }

  return client.interceptors[type].use(...actionAndErrorFuncs)
}

// 是否断网
function checkIfOnline (config) {
  if (navigator && navigator.onLine === false) {
    const tip = '网络走丢了，请稍后再试'
    console.error(tip)
    return Promise.reject(tip)
  } else {
    return config
  }
}
// 添加头, 以表单形式提交
function addHeads (config) {
  const { headers } = config
  return config
}

// 改变参数
function changeParams (config) {
  const { method, data } = config

  if (method === 'get') {
    config.params = {
      params: config.params,
    }
  } else {
    if (data !== null && typeof data === 'object') {
      const formData = new FormData()
      for (let key in data) {
        if (isFile(data[key])) {
          formData.append(key, data[key])
        } else {
          formData.append(key, JSON.stringify(data[key]))
        }
      }
      config.data = formData
    }
  }

  return config
}

// 添加loading模态框
function addLoadingModal () {}
// 取消loading模态框
function cancelLoadingModal () {}

// 构造响应头
function resolveResponse (response) {
  const { status, data, headers, config } = response
  if (status === 200) {
    const { code, msg } = data

    // 成功的判断条件
    if (data.code === 0) {
      return data.data
    } else { // 出错的情况下
      console.error(msg)
      return Promise.reject(msg)
    }
  }
}

// 处理请求错误
function handleRequestError (error) {
  throw new Error({
    type: 'request',
    error: JSON.stringify(error),
  })
}
// 处理响应错误
function handleResponseError (error) {
  throw new Error({
    type: 'resposne',
    error: JSON.stringify(error),
  })
}

// 创建实例
function createAxios (config) {
  const client = axios.create(config)
  client.defaults.withCredentials = true

  // 请求过滤器执行顺序从下到上
  addInterceptors(client, 'request', [changeParams, handleRequestError])
  // addInterceptors(client, 'request', [addHeads, handleRequestError])
  addInterceptors(client, 'request', [checkIfOnline, handleRequestError])
  addInterceptors(client, 'response', [resolveResponse, handleResponseError])
  return client
}

export function getAxiosClient (userConfig = {}) {
  if (!isObject(userConfig)) {
    throw new Error('配置必须是对象格式')
  }
  const config = {
    baseURL: 'http://116.196.89.224:8082/', // 门户里的都是8082; 获取个人信息都是8083端口
    timeout: 6000, // 超时：毫秒
    withCredentials: true, // 跨域时， 允许cookie传输
  }

  return createAxios(Object.assign(config, userConfig))
}
