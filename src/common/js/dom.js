//有则直接返回 没有就添加这个类
export function addClass(el,className){
    if(hasClass(el,className)){
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

//判断有没有这个class
export function hasClass(el,className){
    let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
    return reg.test(el.className)
}