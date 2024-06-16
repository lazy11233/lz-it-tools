import { createI18n } from 'vue-i18n'
import { getCurrentLang } from '@/utils/tool'
import zh from './zh'
import en from './en'

const i18n = createI18n({
  legacy: false,
  locale: getCurrentLang(),
  fallbackLocale: 'zh', // 设置回退语言
  messages: { zh, en }
})

export default i18n
