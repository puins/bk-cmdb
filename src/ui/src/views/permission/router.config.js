import Meta from '@/router/meta'
import { NAV_PERMISSION } from '@/dictionary/menu'

const path = {
    business: '/permission/business',
    system: '/permission/system'
}

export default [{
    name: 'businessPermission',
    path: path.business,
    component: () => import('./business.vue'),
    meta: new Meta({
        menu: {
            id: 'businessPermission',
            i18n: 'Nav["业务权限管理"]',
            path: path.business,
            order: 1,
            parent: NAV_PERMISSION,
            businessView: false
        }
    })
}, {
    name: 'systemPermission',
    path: path.system,
    component: () => import('./role.vue'),
    meta: new Meta({
        menu: {
            id: 'systemPermission',
            i18n: 'Nav["系统权限管理"]',
            path: path.system,
            order: 2,
            parent: NAV_PERMISSION,
            businessView: false
        }
    })
}]
