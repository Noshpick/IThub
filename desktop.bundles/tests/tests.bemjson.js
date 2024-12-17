module.exports = {
    block: 'page',
    title: 'tests - Главная страница',
    head: [
        { elem: 'css', url: 'tests.css' },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
    ],
    scripts: [{ elem: 'js', url: 'tests.js' }],
    content: [
        { block: 'header' }, 
        { block: 'main' },
        { block: 'footer' } 
    ]
};
