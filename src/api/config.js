// 用来存放公共数据
import jsonp from "common/js/jsonp";

export const commonParams = {
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: jsonp
}
export const options = {
    param: 'jsonpCallback'
}

export const ERR_OK = 0