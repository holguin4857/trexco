import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Ready to Ship? Start Your Booking Here</h2>
          <p></p>

          <p>
          Don't waste time navigating complicated booking processes. Our
            streamlined form makes it simple to request a quote and book your
            shipment. We're here to answer any questions you may have along the
            way.
          </p>
          <p>
            - Address: Trexco International Limited, 4th Floor, 18 St Cross
            Street, London, EC1N 8UN, UK
          </p>
          <p>- Tel: +44 020 7096 1031, +44 020 7097 2265 </p>
          <p>- Email: info@trexco.net</p>
          <p></p>
         

          <button className={buttons.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <Image
            src="/images/airplane.png"
            alt="loading"
            width={550}
            height={550}
          />
        </div>
      </section>
    </>
  );
}
