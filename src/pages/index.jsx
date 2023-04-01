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
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Landing />
        <Faqs />
        <Contact />
        <About />
      </main>
    </>
  )
}
