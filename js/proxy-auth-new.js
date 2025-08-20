/**
 * 代理请求模块 - 简化版本（已移除密码认证要求）
 * 提供基本的代理URL生成功能
 */

/**
 * 生成代理URL
 * @param {string} targetUrl - 目标URL
 * @returns {string} 代理URL
 */
function generateProxyUrl(targetUrl) {
  if (!targetUrl) return '';

  try {
    // 直接返回代理URL，不添加认证参数
    return `/proxy/${encodeURIComponent(targetUrl)}`;
  } catch (error) {
    console.error('生成代理URL时出错:', error);
    return '';
  }
}

/**
 * 获取认证哈希 - 简化版本，返回空字符串
 * 保留此函数以兼容现有代码
 */
async function getAuthHash() {
  return '';
}

/**
 * 清除认证缓存 - 保留接口但不执行任何操作
 * 保留此函数以兼容现有代码
 */
function clearAuthCache() {
  // 保留函数以免破坏现有调用，但不执行任何操作
}

// 暴露到全局作用域
window.getAuthHash = getAuthHash;
window.generateProxyUrl = generateProxyUrl;
window.clearAuthCache = clearAuthCache;
