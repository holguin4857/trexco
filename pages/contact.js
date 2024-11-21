import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Contact() {
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
          <h2>Contact trexco: Your shipping solutions start here</h2>
          <p></p>

          <p>
          Have questions about shipping your cargo? We are here to help!.
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
            src="/images/cargoship.png"
            alt="loading"
            width={550}
            height={550}
          />
        </div>
      </section>
    </>
  );
}
