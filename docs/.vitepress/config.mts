import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/tech-books-notes/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/tech-books-notes/'

export default defineConfig({
  lang: 'zh-CN',
  title: '技术书籍阅读笔记',
  description: '记录技术书籍阅读笔记，包括笔记、总结和思维导图',
  base: baseConfig,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'GitHub', link: 'https://github.com/Relph1119/tech-books-notes' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: 'QCon2019（广州站）参会总结', link: '/qcon2019_guangzhou/note' },
          { text: '《编码：隐匿在计算机软硬件背后的语言》读书笔记', link: '/code/note' },
          { text: '《科学家列传》（壹）读书笔记', link: '/biography_of_scientists/note' },
          {
            text: '极客时间《操作系统实战45讲》学习笔记',
            items: [
              { text: '第1章 尝尝鲜：从一个Hello到另一个Hello', link: '/os_practise/ch01' },
              { text: '第2章 心有蓝图：设计', link: '/os_practise/ch02' },
              { text: '第3章 程序的基石：硬件', link: '/os_practise/ch03' },
              { text: '第4章 基本法：同步原语', link: '/os_practise/ch04' },
              { text: '第5章 夺权：启动初始化', link: '/os_practise/ch05' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Relph1119/tech-books-notes' }
    ],

    editLink: {
      pattern: 'https://github.com/Relph1119/tech-books-notes/blob/main/docs/:path'
    },

    footer: {
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
