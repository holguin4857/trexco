import Head from "next/head";
import Link from "next/link";

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
          <li>Address: unit 122, Access House, 61 Willow walk</li>
          <li>London, SE1 5SF, UK</li>
          <li>Tel: +44 020 7096 1031, +44 020 7097 2265 </li>
          <li>Email: hello@trexco.net</li>
          <p></p>
          <button className="button">
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <img src="images/container1.png" alt="" width="600px" />
        </div>
      </section>
    </>
  );
}
