block('main')(
    content()([
        { 
            elem: 'menu', 
            content: 'Меню' 
        },

        { 
            elem: 'head', 
            content: 'Шапка' 
        },

        {
            block: 'container', 
            content: [
                {
                    block: 'left-side',
                    content: `Категории + Новости`
                },
                {
                    block: 'right-side',
                    content: 'Содержимое страницы'
                }
            ]
        }
    ])
);
