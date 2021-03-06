import moment from 'moment'
import CryptoJS from "crypto-js"
export default {
  install(Vue, opt) {
    Vue.prototype.tableHeaderColor = function ({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 0) {
        return 'background-color:#ffffff ;color: #333;font-weight: 600;font-size: 15px;height:58px;'
      }
    }
    /*时间戳转换=>moment*/
    Vue.prototype.timestampToTime = function (timestamp) {
      let time = ''
      if (timestamp == '' || timestamp == null || timestamp == undefined) {
        time = ''
      } else {
        time = moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
      }
      return time
    }
    Vue.prototype.passwordEncryption = function (e) {
      let cipherText =CryptoJS.HmacSHA1(e, '87krsC!IPF@OBRPEOh#Uat9C').toString(CryptoJS.enc.Hex);
      return cipherText;
      // Decrypt 解密
      // let bytes = CryptoJS.AES.decrypt(cipherText, "87krsC!IPF@OBRPEOh#Uat9C");
      // let originalText = bytes.toString(CryptoJS.enc.Utf8);
      // console.log(originalText);
    }
  }

}
