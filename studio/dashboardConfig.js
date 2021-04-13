export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6075694ab78208aa035995d2',
                  title: 'Sanity Studio',
                  name: 'sanity-content-studio-brtjr77j',
                  apiId: '1f400ef2-5bac-4524-83f6-999c95ff6eb3'
                },
                {
                  buildHookId: '6075694a2e9b26b10e1d1d24',
                  title: 'Blog Website',
                  name: 'sanity-content-web',
                  apiId: 'e7728327-0626-4d11-bb47-db097d3ddb35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorgeer/sanity-content',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-content-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
