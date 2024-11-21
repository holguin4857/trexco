import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import services from "../styles/services.module.css";
import milestones from "../styles/milestones.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={hero.container}>
        <div className={hero.content}>
          <h2>
            Connecting the UK with Latin America: Your Trusted Partner for Heavy
            Machinery Shipping
          </h2>

          <p>
            At Trexco, we specialise in the safe and efficient transport of
            agricultural and construction machinery from the UK to Chile,
            Bolivia and Mexico. With 19 years of experience and a deep
            understanding of the Latin American market, we're your reliable
            partner for seamless import solutions
          </p>

          <button className={hero.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Flat rack containers</h2>
          <p>
            Transport your heavy machinery with our specialised flat rack
            service. We handle everything, no matter how big or heavy. We
            utilise high capacity cranes for precise loading and expert
            handling, guaranteeing your valuable equipment arrives in perfect
            condition.
          </p>
          <p>
            Our flat rack service includes a meticulous cargo survey to ensure
            secure fastening and safe transportation of your heavy machinery.Our
            experienced team and trusted partners guarantee the safe and
            efficient delivery of your valuable equipment, no matter how
            oversized or complex.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/flatrack.png"
            alt="Flat rack"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/flatrack.png"
          />
        </div>
      </div>
      <div className={features.container}>
        <div className={features.content}>
          <h2>Shipping containers</h2>
          <p>
            Ship your cargo with confidence using our reliable container
            service. We offer a wide range of container types and sizes to
            accommodate everything from personal belongings to specialised
            equipment. Whether you need a standard 40/20' container, High cube,
            open top, refrigerated, or something more unique, we have the
            perfect solution for your needs.
          </p>
          <p>
            Our experienced team handles every aspect of the shipping process,
            ensuring your cargo is secure, efficiently transported, and
            delivered on time. With competitive rates and personalised service,
            we make importing easy and without any hassle.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/cargoship.png"
            alt="Container ship"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/cargoship.png"
          />
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Air freight</h2>
          <p>
            When speed matters, choose our air freight service. We offer swift
            and reliable transport for your urgent cargo. Whether a small
            package or a larger shipment, we ensure your goods arrive quickly
            and efficiently, keeping your business moving.
          </p>
          <p>
            Our experienced team handles every detail, from pickup to delivery,
            providing personalized service and competitive rates. With our
            global reach and commitment to excellence, you can trust us to get
            your cargo where it needs to be, on time and in perfect condition.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/airplane.png"
            alt="Cargo plane"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/airplane.png"
          />
        </div>
      </div>

      <div className={milestones.cards}>
        <div className={milestones.card}>
          <h3>1700+</h3>
          <p>Crates Shipped by Air and Road</p>
        </div>
        <div className={milestones.card}>
          <h3>300+</h3>
          <p>Full containers shipped by sea</p>
        </div>
        <div className={milestones.card}>
          <h3>4000+</h3>
          <p>Happy Clients</p>
        </div>
      </div>

      <section className={features.container}>
        <div className={features.content}>
          <h2>Pack yourself shipping options</h2>
          <p>
            Trexco offers do-it-yourself shipping options, for those who might
            be looking for an easy, affordable, efficient, way to ship by air,
            land or sea.
          </p>
        </div>
      </section>

      <div className={features.container}>
        <div className="image">
          <Image
            src="/images/box-cat.webp"
            alt="trexxbox"
            width={500}
            height={500}
          />
        </div>
        <div className={features.content}>
          <h2>The Trexx Box</h2>
          <p>
            When it comes to shipping big and heavy objects, use our
            easy-to-assemble pallet boxes, These innovative boxes are designed
            to the specifications of a standard shipping pallet 120 x 100 cm and
            come in two different heights 110 and 210 cm.
          </p>
          <p>
            With a maximum weight capacity of 600 kg, our pallet boxes are the
            perfect solution for your shipping needs. And the best part? We can
            send them to you for self-pack and send them to your country of
            destination either by sea or air, so you can get your goods where
            they need to go quickly and efficiently.
          </p>
        </div>
      </div>

      <section className={services.columns}>
        <article className={services.column}>
          <Image
            src="/images/man-compu-cat-round.webp"
            alt="Man with computer and cat"
            width={200}
            height={200}
          />
          <h2>Place an order</h2>
          <p>
            Pick the trexco pallet boxes you need for your shipment and book the
            delivery and collection date.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/box-and-cat-round.webp"
            alt="Box and cat"
            width={200}
            height={200}
          />
          <h2>Start packing</h2>
          <p>
            Pack your shipment on the Trexx pallet boxes, start packing the
            heavy stuff first and fragile on the top, seal and label the box.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/man-and-truck-round.webp"
            alt="Man and truck"
            width={200}
            height={200}
          />
          <h2>Arrange collection</h2>
          <p>
            Choose the collection date a driver will load your Trexx-Box with a
            pallet truck and it will get shipped to your destination.
          </p>
        </article>
      </section>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>How we make a difference</h2>
          <p>
            Trexco offers do-it-yourself shipping options, for those who might
            be looking for an easy, affordable, efficient, way to ship.
          </p>
          <button className={hero.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <Image
            src="/images/boxes-man-cat.webp"
            alt="loading"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}
