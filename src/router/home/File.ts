import { AppRouteRecordRaw } from '../types'

const file: AppRouteRecordRaw = {
    path: '/File',
    name: 'File',
    sort: 0,
    meta: {
        title: '文件',
    },
    children: [
        {
            path: 'upload-v2',
            name: 'upload-v2',
            component: () => import('@/view/Upload-v2/index.vue'),
            meta: {
                title: '文件 upload',
                navigation: {
                    contentText: '小文件存储 2.0',
                },
            },
        },
        {
            path: 'upload-v3',
            name: 'upload-v3',
            component: () => import('@/view/upload-v3/index.vue'),
            meta: {
                title: '文件 upload',
                navigation: {
                    contentText: '小文件存储 3.0',
                },
            },
        },
        {
            path: 'upload-v4',
            name: 'upload-v4',
            component: () => import('@/view/upload-v4/index.vue'),
            meta: {
                title: '文件 upload',
                navigation: {
                    contentText: '小文件存储 4.0',
                },
            },
        },
    ],
}

export default file
