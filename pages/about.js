import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import about from "../styles/about.module.css";
import buttons from "../styles/buttons.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={about.container}>
        <div className={about.content}>
          <h2>Reasons to count on us</h2>
          <p>
            Since 2006, Trexco has been a trusted name in the freight forwarding
            industry. We began by serving the diplomatic community in the UK,
            where we honed our expertise in handling personal effects with care
            and efficiency. Our innovative disposable pallet boxes streamlined
            the process, making shipping personal belongings easier and more
            affordable.
          </p>
          <p>
            Today Trexco handles a diverse range of cargo, using specialised
            equipment such as open top containers and flat racks to ensure the
            safe and efficient transport of valuable machinery. For urgent
            shipments, our expedited air freight services provide swift delivery
            of spare parts, keeping operations running without disruption.{" "}
          </p>
          
        </div>

        <div className={about.image}>
          <Image
            src="/images/omarholguin.png"
            alt="Omar Holguin"
            width={550}
            height={550}
            sizes="(max-width: 600px) 300px, 550px"
            style={{ width: "90%", height: "auto", maxWidth: "550px" }}
          />
        </div>
        
      </section>
      <section className={about.container}>
        <div className={about.content}>
          <h2>About the founder</h2>
          <p>
            My name is Omar Holguin and my mission is to simplify the export
            process, offering logistics solutions that meet my clients unique
            needs. From sourcing to final delivery, I ensure every shipment
            reaches its destination safely and efficiently.{" "}
          </p>
          <p>
            At Trexco, I specialise in connecting UK suppliers with businesses
            in need of high quality second hand machinery. With over 19 years of
            experience in international trade, I have built a deep understanding
            of sourcing, shipping, and navigating complex export regulations.{" "}
          </p>
          <button className={buttons.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
