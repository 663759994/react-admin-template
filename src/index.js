import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { BrowserRouter } from 'react-router-dom'
dayjs.locale('zh-cn')

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
