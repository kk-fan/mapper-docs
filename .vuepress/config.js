module.exports = {
    lang: 'zh-CN',
    title: 'MyBatis Mapper',
    description: '通用 Mapper',
    head: [['link', {rel: 'icon', href: '/favicon.png'}]],
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: 'logo.png',
        docsRepo: 'mybatis-mapper/mapper-docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '最后编辑时间',
        smoothScroll: true,
        nav: [
            {
                text: '快速上手',
                link: '/docs/1.getting-started.html'
            },
            {
                text: '1.0.0',
                link: '/releases/1.0.0.html'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/mybatis-mapper/mapper'
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/mybatis-mapper/mapper'
            },
            {
                text: 'Provider',
                items: [
                    {text: 'GitHub', link: 'https://github.com/mybatis-mapper/provider'},
                    {text: 'Gitee', link: 'https://gitee.com/mybatis-mapper/provider'}
                ]
            },
            {
                text: '作者博客',
                link: 'https://liuzh.blog.csdn.net/'
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: '使用指南',
                    sidebarDepth: 2,
                    children: [
                        '1.getting-started.md',
                        '2.mybatis-mapper.md',
                        '3.entity.md',
                        '4.common.md',
                        '5.service.md',
                        '6.activerecord.md',
                        '7.generator.md',
                        '8.jpa.md'
                    ]
                }
            ],
            '/releases/': [
                '1.0.0.md',
            ]
        }
    },
}