import Head from 'next/head'
import Navbar from "@/components/Navbar";
import Link from 'next/link';



export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
      </div>

      <section className='container'>
        <div className='content'>
          <h1>about us</h1>
          <p>Our journey as freight forwarders began in 2006, specializing in shipping for the diplomatic community in the UK. However, we quickly noticed that shipping personal effects was complicated, particularly when it came to assessing the volume and weight of belongings of various sizes. We also saw a need for high-quality packing materials that could properly protect shipments.</p>
          <p>To simplify the process, we developed a disposable pallet box that conforms to international transportation standards. This has helped us avoid slow and inaccurate quotations and pricing. Our pallet boxes allow us to ship items in an economical and convenient manner, whether by sea, air, or road. </p>
          <button className='button'><Link href="https://trexco.involve.me/trexco-personalized-quote">Book now</Link></button>
        </div>
        <div className='image'>
          <img src='images/box-and-cat-round.png' alt='' width="600px" />
        </div>
      </section>

      <section className='container-2'>
        <div className='content-2'>
          <p>Trexco have simplified shipping by using an easy, convenient way to pack, store, and move your cargo - all at the same time!</p>
        </div>
      </section>



   


      <section className='container'>
        <div className='content'>
          <h1>shipping with confidence</h1>
          <p>We have secured competitive shipping rates to many destinations around the world, from air, road or sea shipment. We have over 17 years of experience as freight forwarders.</p>
        
        </div>
      
      </section>

      
      <article className='footer'>
        <div className='columns'>
        <article className="column">
          <h3>FAQ</h3>
          <ul>
              <li link href='#faq'>FAQ</li>
              <li link href='#how'>How it works</li>
              <li link href='#contact'>Contact us</li>
          </ul>
        </article>
        <article className="column">
          <h3>terms</h3>
          <ul>
              <li link href='#prohibited'>Prohibited items</li>
              <li link href='#privacy'>Privacy policy</li>
              <li link href='#terms'>Terms & conditions</li>
            </ul>   
        </article>
        </div>
      </article>






    </>
  )
}