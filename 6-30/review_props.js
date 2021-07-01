import projectConfig from '/my_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "6-30/review.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "6-30/review.html",
    'title': "优秀在线博客的推荐以及静态博客系统的搭建",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>优秀在线博客的推荐以及静态博客系统的搭建</h1>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/my_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4F18\u79C0\u5728\u7EBF\u535A\u5BA2\u7684\u63A8\u8350\u4EE5\u53CA\u9759\u6001\u535A\u5BA2\u7CFB\u7EDF\u7684\u642D\u5EFA"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "王旭阳",
    'contributors': [
        "王旭阳"
    ],
    'date': "2021-07-01T02:03:25.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "pagePath": "test_pages/README.md",
            "text": "Test pages"
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        },
        {
            "text": "About",
            "link": "about/index.html",
            "pagePath": "about/README.md"
        }
    ]
};
