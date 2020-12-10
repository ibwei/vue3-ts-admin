/**  跟应用全局相关的静态配置放在这里  */
import { message } from 'ant-design-vue'

const AppConfig = {
  $message: message
}
const StaticConfig = {
  MaxPageSize: 1000,
  IconfontURL: '//at.alicdn.com/t/font_2259563_i4rp663oaro.js'
}
export { AppConfig, StaticConfig }
