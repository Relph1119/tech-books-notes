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
  - title: 💻 《编码》读书简记
    details: 从基础电路理论、计算机组成、操作系统、图形化等角度，对计算机软硬件进行深入理解。
    link: /code/note
    linkText: 立即阅读
  - title: ⚛️ 《科学家列传》读书简记
    details: 记录了100多个科学家的生平、工作、贡献等，了解科技历史。
    link: /biography_of_scientists/note
    linkText: 立即阅读
  - title: 🏗️ 《构建之法-现代软件工程》（第四版）读书笔记
    details: 从软件工程师的成长、团队成长和敏捷流程、软件工程实践到IT创新与职业道德，全方位介绍了AI时代的现代软件工程实践。
    link: /build_the_way/sec01
    linkText: 立即阅读
  - title: 📣 QCon 2019参会总结
    details:  QCon 2019 技术大会的议程记录与讲座笔记
    link: /qcon2019_guangzhou/note
    linkText: 立即阅读
  - title: 🛠️ 极客时间《操作系统实战45讲》学习笔记
    details: 深度拆解Linux操作系统，从原理到实践，理解操作系统的内部机制。
    link: /os_practise/ch01
    linkText: 立即阅读
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
