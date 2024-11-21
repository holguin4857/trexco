import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
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

      <section className={hero.container}>
        <div className={hero.content}>
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
            Today, Trexco has expanded its services to meet the diverse needs of
            individuals and businesses worldwide. We offer comprehensive
            shipping solutions, including personal effects, heavy machinery,
            container shipping, flat rack services, and air freight.{" "}
          </p>
          <p>
            With our experience, expertise, and commitment to personalized
            service, we ensure your cargo reaches its destination safely and on
            time, no matter where in the world you're shipping.{" "}
          </p>
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
