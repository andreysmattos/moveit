import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import Styles from '../styles/pages/Home.module.css'



// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>

      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <div className={Styles.container}>
        <ExperienceBar />

        <section>
          <div>
              <Profile/>
              <CompletedChallenges />
          </div>

          <div></div>

        </section>
      </div>

    </main>
  )
}
