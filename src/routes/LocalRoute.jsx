import About from '../components/about/AboutContext'
import History from '../components/history/History'
import News from '../components/news/News'

const LocalRoute = [
    {
        id: 1,
        ComponentName: About ,
        link: '/'
    },
    {
        id: 2,
        ComponentName: History ,
        link: '/history'
    },
    {
        id: 3,
        ComponentName: News,
        link: '/news'
    },
]

export default LocalRoute
