import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import  Landing  from '@/components/Landing'
import  Contact from '@/components/contact'
import  About from '@/components/about'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jennifer Jones, Your Dedicated Recruiter.</title>
        <meta
          name="description"
          content="Your recruiter."
        />
      </Head>
      <main>
        <Landing />
        <Faqs />
        <Contact />
        <About />
        <Contact />
      </main>
    </>
  )
}
