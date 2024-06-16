export const getCurrentLang = (): string => {
  const locale = localStorage.getItem('lang')
  const isZh = locale ? locale.includes('zh') : navigator.language.includes('zh')
  return isZh ? 'zh' : 'en'
}
