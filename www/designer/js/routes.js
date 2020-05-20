routes = [{
        name: 'home',
        path: '/',
        url: './designer/pages/home.html',
        options: {
            animate: false,
        }
    },
    {
        name: 'designer',
        path: '/designer/:project/:filename/',
        url: './designer/pages/designer.html'
    },
    {
        name: 'project',
        path: '/project/:name/',
        url: './designer/pages/project.html'
    },
    {
        name: 'editor',
        path: '/editor/:project/:filename/',
        url: './designer/pages/editor.html'
    },
    {
        name: 'doc_pre_requisite',
        path: '/doc_pre_requisite/',
        url: './designer/pages/docs/doc_pre_requisite.html'
    },
    {
        path: '(.*)',
        url: './designer/pages/404.html'
    }
];