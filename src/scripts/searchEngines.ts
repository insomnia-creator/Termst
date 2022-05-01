const searchEngines:  {[index: string]:{url: string}}  = {
    google: {
        url: 'https://www.google.com/search?q='
    },
    duckduckgo: {
        url: 'https://duckduckgo.com/?q='
    },
    bing: {
        url: 'https://www.bing.com/search?q='
    },
    yahoo: {
        url: 'https://search.yahoo.com/search?p='
    },
    baidu: {
        url: 'https://www.baidu.com/s?wd='
    },
    yandex: {
        url: 'https://yandex.ru/search/?text='
    },
    qwant: {
        url: 'https://www.qwant.com/?q='
    },
    startpage: {
        url: 'https://startpage.com/do/search?query='
    },
    kagi: {
        url: 'https://kagi.com/search?q='
    },
    amazon: {
        url: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords='
    },

}

export default searchEngines;