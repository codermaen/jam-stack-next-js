import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';
import countries from '../lib/countries.json'

export default function Home() {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h3>News</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
          {countries.map((country) => {
            return (
              <div style={{ padding: 10 }}>
                <Link href={`/news/${country}`}>
                  <a>{country}</a>
                </Link>
              </div>
            );
          })}

        </div>
      </section>
    </Layout>
  )
}
