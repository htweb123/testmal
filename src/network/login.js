import { request1 } from './request'

export function loginInfo() {
    return request1({
        url: '/login'
    })
}
