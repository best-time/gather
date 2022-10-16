import axios from "_g/config/api.request";
import api4driver from "_o/config/api4driver.request";
import api4Task from "_o/config/api4Task.request";

/** 司机管理列表 */
export const staffList = (data) => {
  return axios.request({
    url: "/admin/driver/pageList",
    data,
    method: "POST"
  })
}

/** 司机详情信息 */
export const direverDetail = (data) => {
  return axios.request({
    url: "/admin/driver/detail",
    data,
    method: "post"
  })
}

/** 订单记录 */
export const getOrderList = (data) => {
  return axios.request({
    url: "/admin/driver/orderRecord",
    data,
    method: "post"
  })
}

/** 封号记录 */
export const blockingRecord = (data) => {
  return axios.request({
    url: "/admin/driver/blockingRecord",
    data,
    method: "post"
  })
}
/** 黑名单记录 */
export const blacklistRecord = (data) => {
  return axios.request({
    url: "/admin/driver/blacklistRecord",
    data,
    method: "post"
  })
}

/** 上下线记录 */
export const signLog = (data) => {
  return axios.request({
    url: "/admin/driver/signLog",
    data,
    method: "post"
  })
}

/** 违章记录 */
export const violationRecord = (data) => {
  return axios.request({
    url: "/admin/driver/violationRecord",
    data,
    method: "post"
  })
}

/** 请假记录 */
export const leaveRecord = (data) => {
  return axios.request({
    url: "/admin/driver/leaveRecord",
    data,
    method: "post"
  })
}

/** 修改司机基本信息 */
export const auditRecord = (params) => {
  return axios.request({
    url: "/admin/driver/edit",
    data: params,
    method: "post"
  })
}

/** 查询司机基本信息 */
export const queryBaseInfo = (data) => {
  return axios.request({
    url: "/admin/driver/queryBaseInfo",
    data,
    method: "post"
  })
}
/** 查询司机驾驶证信息 */
export const queryDriverLicense = (data) => {
  return axios.request({
    url: "/admin/driver/queryDriverLicense",
    data,
    method: "post"
  })
}
/** 查询网约车资质信息 */
export const queryNetCarQualification = (data) => {
  return axios.request({
    url: "/admin/driver/queryNetCarQualification",
    data,
    method: "post"
  })
}
/** 查询车辆信息 */
export const queryCarInfo = (data) => {
  return axios.request({
    url: "/admin/driver/queryCarInfo",
    data,
    method: "post"
  })
}
/** 查询人脸信息 */
export const queryfaceInfo = (data) => {
  return axios.request({
    url: "/admin/driver/queryfaceInfo",
    data,
    method: "post"
  })
}
/** 查询司管信息 */
export const querydriverLeaderInfo = (data) => {
  return axios.request({
    url: "/admin/driver/querydriverLeaderInfo",
    data,
    method: "post"
  })
}
/**
 * 司管下拉
 */
/** 查询上线拍照记录 */
export const queryOnlinePhotosRecord = (data) => {
  return axios.request({
    url: "/admin/driver/onlinePhotosRecord",
    data,
    method: "post"
  })
}
/** 查询司机车牌绑定历史 */
export const driverPlateNums = (data) => {
  return axios.request({
    url: "/admin/driver/driverPlateNums",
    data,
    method: "post"
  })
}
/** 被评价记录 */
export const evaluateRecord = (data) => {
  return axios.request({
    url: "/admin/driver/evaluatedList",
    data,
    method: "post"
  })
}
/** 通话记录 */
export const callRecord = (data) => {
  return axios.request({
    url: "/admin/driver/callRecord",
    data,
    method: "post"
  })
}
/** 被评价标签模糊下拉 */
export const allEvaluateTag = (data) => {
  return axios.request({
    url: "/admin/driver/tagList",
    data,
    method: "post"
  })
}
/** 被评价标签统计 */
export const statisticalTagCount = (data) => {
  return axios.request({
    url: "/admin/driver/statisticalRanking",
    data,
    method: "post"
  })
}

/** 编辑司机基本信息 */
export const editBaseInfo = (data) => {
  return axios.request({
    url: "/admin/driver/editBaseInfo",
    data,
    method: "post"
  })
}
/** 编辑司机驾驶证信息 */
export const editDriverLicense = (data) => {
  return axios.request({
    url: "/admin/driver/editDriverLicense",
    data,
    method: "post"
  })
}
/** 编辑网约车资质信息 */
export const editNetCarQualification = (data) => {
  return axios.request({
    url: "/admin/driver/editNetCarQualification",
    data,
    method: "post"
  })
}

/** 查看司机简单信息(ID、手机号、姓名) */
export const querySimpleInfo = (data) => {
  return axios.request({
    url: "/admin/driver/querySimpleInfo",
    data,
    method: "post"
  })
}
/** 查看司机培训信息 */
export const queryTrainInfo = (data) => {
  return axios.request({
    url: "/admin/driver/queryTrainInfo",
    data,
    method: "post"
  })
}
/** 编辑司机培训信息 */
export const editTrainInfo = (data) => {
  return axios.request({
    url: "/admin/driver/editTrainInfo",
    data,
    method: "post"
  })
}
/** 查看司机其他信息 */
export const queryOtherInfo = (data) => {
  return axios.request({
    url: "/admin/driver/queryOtherInfo",
    data,
    method: "post"
  })
}
/** 编辑司机其他信息 */
export const editOtherInfo = (data) => {
  return axios.request({
    url: "/admin/driver/editOtherInfo",
    data,
    method: "post"
  })
}

/** 封号 */
export const blocking = (data) => {
  return axios.request({
    url: "/admin/driver/blocking",
    data,
    method: "post"
  })
}
/** 加入黑名单 */
export const addToBlacklist = (data) => {
  return axios.request({
    url: "/admin/driver/addToBlacklist",
    data,
    method: "post"
  })
}
/** 离职 */
export const leave = (data) => {
  return axios.request({
    url: "/admin/driver/leave",
    data,
    method: "post"
  })
}
/** 解封 */
export const unblocking = (data) => {
  return axios.request({
    url: "/admin/driver/unblocking",
    data,
    method: "post"
  })
}
/** 冻结解冻 */
export const freezeAndUnfreeze = (data) => {
  return axios.request({
    url: "/admin/driver/freezeAndUnfreeze",
    data,
    method: "post"
  })
}
/** 移出黑名单 */
export const removeFromBlacklist = (data) => {
  return axios.request({
    url: "/admin/driver/removeFromBlacklist",
    data,
    method: "post"
  })
}

/** 司机端的运营管理 */
/** 导出文件 */
export const exportDriverInfo = (data) => {
  return axios.request({
    url: "/admin/driver/exportDriverInfo",
    data,
    method: "post"
  })
}
/** 营运管理中心-> 司机管理-> 审批管理 */
export const approvalPageList = (data) => {
  return axios.request({
    url: "/admin/driver/approvalPageList",
    data,
    method: "post"
  })
}

/** 通过或者拒绝审批 */
export const approveOperate = (data) => {
  return axios.request({
    url: "/admin/driver/approveLeaveApply",
    data,
    method: "post"
  })
}

/** 查看审批详情 */
export const viewApproveDetail = (data) => {
  return axios.request({
    url: "/admin/driver/leaveApprovalDetail",
    data,
    method: "post"
  })
}
/** 营运管理中心-> 司机管理-> 考勤管理 */

/** 月考核管理 */
export const attendanceMonthList = (data) => {
  return axios.request({
    url: "/admin/driver/examine/listMonth",
    data,
    method: "POST"
  })
}
export const attendanceDetailList = (data) => {
  return axios.request({
    url: "/admin/driver/examine/listDetail",
    data,
    method: "POST"
  })
}

// 考勤规则历史版本
export const getRevisionList = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/historicVersion",
    data,
    method: "POST"
  })
}

/** 日月考勤版本详细信息 */
export const attendanceDayList = (data) => {
  return axios.request({
    url: "/admin/driver/examine/list",
    data,
    method: "POST"
  })
}
/** 日考勤管理 */
export const axiosExamineInfo = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/ruleInfo",
    data,
    method: "POST"
  })
}
/** 考勤规则 */
export const attendanceRuleList = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/list",
    data,
    method: "POST"
  })
}
/** 新建考勤规则 */
export const addAttendanceRule = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/add",
    data,
    method: "POST"
  })
}
/** 编辑考勤规则 */
export const editAttendanceRule = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/edit",
    data,
    method: "POST"
  })
}
/** 考勤规则详情查询 */
export const attendanceRuleDetail = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/info",
    data,
    method: "POST"
  })
}
/** 修改考勤规则 */
export const auditAttendanceRule = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/edit",
    data,
    method: "POST"
  })
}
/** 删除考勤规则 */
export const removeAttendanceRule = (data) => {
  return axios.request({
    url: "/admin/driver/examine/rule/remove/" + data,
    method: "GET"
  })
}

/** 反馈列表 */
export const feedBackList = (data) => {
  return axios.request({
    url: "/admin/driver/getFeedbackList",
    data,
    method: "POST"
  })
}
/** 问题标签列表 */
export const problemTagList = (data) => {
  return axios.request({
    url: "/admin/driver/getProblemTagList",
    data,
    method: "POST"
  })
}

/** 删除问题标签 */
export const deleteProblemTag = (data) => {
  return axios.request({
    url: "/admin/driver/delFeedbackProblemTag",
    data,
    method: "POST"
  })
}
/** 添加问题标签 */
export const addProblemTag = (data) => {
  return axios.request({
    url: "/admin/driver/addFeedbackProblemTag",
    data,
    method: "POST"
  })
}

/** 评价标签管理 */
export const tagList = (data) => {
  return axios.request({
    url: "/admin/driver/getEvaluateList",
    data,
    method: "POST"
  })
}
/** 修改标签 */
export const updateTag = (data) => {
  return axios.request({
    url: "/admin/driver/updateEvaluate",
    data,
    method: "POST"
  })
}
/** 新增标签 */
export const addNewTag = (data) => {
  return axios.request({
    url: "/admin/driver/addEvaluate",
    data,
    method: "POST"
  })
}

// 司机投诉记录
export const driverComplaintedList = (data) => {
  return axios.request({
    url: "/admin/driver/getDriverCmplainRecord",
    data,
    method: "post"
  })
}



/** 考勤统计 */
//日报列表
export const getDailyRecord = (data) => {
  return api4driver.request({
      url: '/api/statistics/daily/agentDailyPage',
      data,
      method: 'post'
  })
}

//日报详情列表
export const getDailyRecordDetail = (data) => {
  return api4driver.request({
      url: '/api/statistics/daily/queryPageDetail',
      data,
      method: 'post'
  })
}

//日报详情批量导出
export const batchExportDaily = (data) => {
  return api4driver.request({
      url: '/api/statistics/daily/batchExport',
      data,
      method: 'post'
  })
}

//月报列表
export const getMonthlyRecord = (data) => {
  return api4driver.request({
      url: '/api/statistics/Monthly/page',
      data,
      method: 'post'
  })
}

//月报批量导出
export const batchExportMonthly = (data) => {
  return api4driver.request({
      url: '/api/statistics/Monthly/batchExport',
      data,
      method: 'post'
  })
}
// 乘客拉黑记录
export const axiosUserBlackList = (data) => {
  return axios.request({
    url: '/admin/driver/defriendRecord',
    data,
    method: 'post'
  })
}
// 移出乘客黑名单记录
export const axiosRemoveUserBlackList = (data) => {
  return axios.request({
    url: '/admin/driver/unDefriendRecord',
    data,
    method: 'post'
  })
}


/** 营运管理中心-> 司机管理-> 群组管理 */
// 群组新增
export const headPortraitIncrease = (data) => {
  return axios.request({
    url: "/admin/driverGroup/save",
    data,
    method: "post"
  })
}
// 群组列表显示和群组查询
export const headPortraitList = (data) => {
  return axios.request({
    url: "/admin/driverGroup/list",
    data,
    method: "post"
  })
}
// 群组编辑
export const headPortraitCompile = (data) => {
  return axios.request({
    url: "/admin/driverGroup/edit",
    data,
    method: "post"
  })
}
// 启用群组
export const headPortraitStartUsing = (data) => {
  return axios.request({
    url: "/admin/driverGroup/enable",
    data,
    method: "post"
  })
}
// 停用群组
export const headPortraitDisuse = (data) => {
  return axios.request({
    url: "/admin/driverGroup/disable",
    data,
    method: "post"
  })
}

// 群组详情设置
export const headPortraitStartDetails = (data) => {
  return axios.request({
    url: "/admin/driverGroup/detail",
    data,
    method: "post"
  })
}
// 群组成员列表显示和群组查询
export const headPortraitHeadMemberList = (data) => {
  return axios.request({
    url: "/admin/driverGroupMember/list",
    data,
    method: "post"
  })
}
// 群组成员移除
export const headPortraitHeadMemberRemove = (data) => {
  return axios.request({
    url: "/admin/driverGroupMember/remove",
    data,
    method: "post"
  })
}




// --------------司机安全分开始
// 安全分管理-列表
export const axiosSafeScoreManageList = data => {
  return axios.request({
    url: `/api/securityPoint/manager/pageList`,
    method: "post",
    data
  });
};
// 安全分管理-明细按钮-分页列表
export const axiosSafeScoreRecordList = data => {
  return axios.request({
    url: `/api/securityPoint/manager/recordPageList`,
    method: "post",
    data
  });
};
// 安全分管理-明细按钮-详情
export const axiosSafeScoreRecordDetail = data => {
  return axios.request({
    url: `/api/securityPoint/manager/recordDetail`,
    method: "post",
    data
  });
};
// 安全分管理-处理-保存
export const axiosSafeScoreHandle = data => {
  return axios.request({
    url: `/api/securityPoint/manager/handle`,
    method: "post",
    data
  });
};
// 安全分管理-处理-记录列表
export const axiosSafeScoreHandleList = data => {
  return axios.request({
    url: `/api/securityPoint/manager/handlePageList`,
    method: "post",
    data
  });
};

// 安全分-每个级别-列表
export const axiosSafeScoreEachLevelList = data => {
  return axios.request({
    url: `/api/securityPoint/strategy/queryLevel`,
    method: "post",
    data
  });
};
// 安全分-导入列表-分页查询
export const axiosSafeScoreImportList = data => {
  return axios.request({
    url: `/api/securityPoint/import/pageList`,
    method: "post",
    data
  });
};
// 安全分-导入列表-批量导入
export const axiosSafeScoreImportBatch = data => {
  return axios.request({
    url: `/api/securityPoint/import/batchImport`,
    method: "post",
    data
  });
};
// 安全分-导入列表-操作日志
export const axiosSafeScoreImportLog = data => {
  return axios.request({
    url: `/api/securityPoint/import/queryOperateLog`,
    method: "post",
    data
  });
};
// 安全分策略-导入列表-批量删除
export const axiosSafeScoreDelete = data => {
  return axios.request({
    url: `/api/securityPoint/import/batchDel`,
    method: "post",
    data
  });
};
// 安全分策略-导入列表-详情
export const axiosSafeScoreImportDetail = data => {
  return axios.request({
    url: `/api/securityPoint/import/detail`,
    method: "post",
    data
  });
};
// 安全分策略-导入列表-编辑
export const axiosSafeScoreImportEdit = data => {
  return axios.request({
    url: `/api/securityPoint/import/update`,
    method: "post",
    data
  });
};

// --------------司机安全分结束

// --------------司机任务
// 司机任务列表
export const driverTaskList = data => {
  return api4Task.request({
    url: `/api/task/driver/v1/list`,
    method: "post",
    data
  });
};

// 司机任务列表
export const taskDetailOrderList = data => {
  return api4Task.request({
    url: `/api/task/driver/v1/detailList`,
    method: "post",
    data
  });
};

// --------------司机任务结束
