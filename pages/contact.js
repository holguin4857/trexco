import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="content">
          <p>Trexco International Limited</p>
          <p>4th Floor, 18 St Cross Street, London, EC1N 8UN, UK</p>
          <p>Tel: +44 020 7096 1031, +44 020 7097 2265 </p>
          <p>Email: hello@trexco.net</p>
          <p></p>
          <button className="button">
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <Image
            src="/images/container1.png"
            alt="loading"
            width={600}
            height={466.5}
          />
        </div>
      </section>
    </>
  );
}
