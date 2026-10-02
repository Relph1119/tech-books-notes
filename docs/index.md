---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 技术书籍阅读笔记
  text: 记录本人的技术成长轨迹
  tagline: 读书、参会、实战，样样都记下来~
  actions:
    - theme: brand
      text: 开始阅读
      link: /qcon2019_guangzhou/note

features:
  - title: 📚 读书笔记
    details: 《编码》《科学家列传》等技术书籍的精读笔记
  - title: 🎤 参会总结
    details: QCon 等技术大会的议程记录与讲座笔记
  - title: 🛠️ 实战课程
    details: 极客时间《操作系统实战45讲》等专栏的学习笔记
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Relph1119.png',
    name: 'Relph1119',
    title: '项目维护者',
    links: [
      { icon: 'github', link: 'https://github.com/Relph1119' },
    ]
  }
]
</script>

<h2 align="center">维护者</h2>
<VPTeamMembers size="small" :members />
