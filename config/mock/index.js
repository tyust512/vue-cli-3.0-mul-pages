const Mock = require('mockjs')

Mock.mock('/api/data', (req, res) => {
  return {
    code: 0,
    msg: '',
    data: [],
  }
})
