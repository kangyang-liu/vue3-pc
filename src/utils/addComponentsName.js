/**
 * 页面文件添加组件name
 * @param {string} name
 * @param {() => Promise<any>} loader
 * @returns
 */
export function withName(name, loader) {
  return async () => {
    const comp = await loader()
    if (typeof comp === 'object' && comp.default) {
      comp.default.name = name
    }
    return comp
  }
}
