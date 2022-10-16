import { timeFormat } from "@/libs/util";
export const statusMap = {
    0: '成功',
    1: '失败',
    '-1': '等待'
}

export const columns = [
	{
        title: '序号',
        key: 'name',
        tooltip: true,
        minWidth: 60,
        slot: 'index',
        fixed: 'left'
    },
    {
        title: '操作类型',
        key: 'operationType',
        tooltip: true,
        minWidth: 130
    },
    {
        title: '操作设备',
        key: 'deviceId',
        tooltip: true,
        minWidth: 100
    },
    {
        title: '日志时间',
        key: 'time',
        tooltip: true,
        minWidth: 160,
        render: (h, params) => {
            let start = timeFormat(params.row.logStartTime, "yyyy-mm-dd")
            let end = timeFormat(params.row.logEndTime, "yyyy-mm-dd")
            return h('span', start + ((start||end)?'至':'') +end)
        }
    },
    {
        title: '日志大小',
        key: 'logSize',
        tooltip: true,
        minWidth: 60,
        render: (h, params) => {
            return h('span', params.row.logSize?params.row.logSize + 'kb':'')
        }
    },
    {
        title: '操作结果',
        key: 'resultCode',
        tooltip: true,
        minWidth: 60,
        render: (h, params) => {
            return h('span', statusMap[params.row.resultCode])
        }
    },
    {
        title: '失败原因',
        key: 'xxxx',
        tooltip: true,
        minWidth: 100
    },
    {
        title: '操作时间',
        key: 'createTime',
        tooltip: true,
        minWidth: 100,
        render: (h, params) => {
            return h('span', timeFormat(params.row.createTime, "yyyy-mm-dd"))
        }
    },
    {
        title: '操作人',
        key: 'createrName',
        tooltip: true,
        minWidth: 100
    },
    {
        title: '操作',
        key: 'action',
        tooltip: true,
        minWidth: 100,
        slot:'action',
        fixed: 'right'
    }
]