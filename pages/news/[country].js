import Layout from '../../components/layout'
import { getAllNewsCountries } from '../../lib/news';
import utilStyles from '../../styles/utils.module.css';
import Router from 'next/router';


import Link from 'next/link'
import Image from 'next/image'

export async function getStaticPaths() {
    const paths = getAllNewsCountries()
    return {
        paths,
        fallback: false
    }
}

const getNewsData = async (country) => {
    const url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${'45512bf52fe44ac888e6bfb092b69da0'}&pageSize=5`
    const response = await fetch(url);
    return response;
}

export async function getStaticProps({ params }) {
    const newsData = await (await getNewsData(params.country)).json()

    return {
        props: {
            response: newsData
        }
    }
}

export default function News({ response }) {
    const { articles } = response;
    // const router = useRouter();
    console.log(articles, 'news')
    return (<Layout>
        <button onClick={() => Router.reload(window.location.pathname)}>Refresh</button>
        {articles.map((news) => {
            return (
                <>
                    <h1>{news.title}</h1>
                    <br />
                    <Link href={news.url}>Goto News</Link>
                    {/* <Image
                        priority
                        src={news.urlToImage}
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={'news'}
                    /> */}
                    {news.description}
                    <br />
                    {news.publishedAt}
                </>
            );
        })}
    </Layout>);
}
