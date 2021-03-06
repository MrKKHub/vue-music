import jsonp from 'common/js/jsonp.js'
import {commonParams,options} from './config.js'

export function getRecommend(){
    // 通过jsonp的方式获取到轮播图数据的接口
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({},commonParams,{
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url,data,options)
}

export function getDiscList(){
    // 获取热门歌单推荐的接口
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    const data = Object.assign({},commonParams,{
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
    })
    return jsonp(url,data,options)
}