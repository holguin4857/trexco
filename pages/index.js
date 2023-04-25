import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="content">
          <h1>Uncomplicate your Shipping</h1>

          <p>
            Choose Trexco for Flexible, Cost-effective, and Reliable Transport
            of Pallets, Crates, and Containers via Air, Sea, or Land
          </p>
          <button className="button">
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2>Trust Your Shipments to the Experts</h2>
          <p>
            Experience personalized, high-quality shipping services with our 17
            years of expertise. We provide exceptional shipping rates for air,
            road, and sea freight, connecting you to destinations around the
            globe while ensuring your unique requirements are met.
          </p>
          <p>
            We pride ourselves on offering unmatched service and assistance for
            your shipping needs. From the beginning to the end of your cargo&apos;s
            journey, we're committed to ensuring timely delivery and maintaining
            the excellent condition of your shipment.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/trexxbox.webp"
            alt="loading"
            width={397}
            height={394}
          />
        </div>
      </div>

      <div className="container">
        <div className="image">
          <Image
            src="/images/man-and-truck.png"
            alt="loading"
            width={750}
            height={422}
          />
        </div>
        <div className="content">
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

      <div className="column-3">
        <div className="column">
          <Image
            src="/images/man-compu-cat-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Place an order</h2>
          <p>
            Pick the trexco pallet boxes you need for your shipment and book the
            delivery and collection date.
          </p>
        </div>
        <div className="column">
          <Image
            src="/images/box-and-cat-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Start packing</h2>
          <p>
            Pack your shipment on the Trexx pallet boxes, start packing the
            heavy stuff first and fragile on the top, seal and label the box.
          </p>
        </div>
        <div className="column">
          <Image
            src="/images/man-and-truck-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Arrange collection</h2>
          <p>
            Choose the collection date a driver will load your Trexx-Box with a
            pallet truck and it will get shipped to your destination.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2>Container shipping</h2>
          <p>Affordable and Flexible Container Shipping Options for you</p>
          <p>
            At trexco , we understand that everyone is different, which is why
            we offer efficient and reliable container shipping services that are
            tailored to meet your specific needs.
          </p>
          <p>
            We have 17 years of experience as freight forwarders, and we are
            commited to providing you the highest level of service and support.
            From start to finish, we will be there to ensure that your container
            arrives at its destination on schedule and in excellent condition.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/container1.png"
            alt="loading"
            width={640}
            height={498}
          />
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h1>shipping with confidence</h1>
          <p>
            We have secured competitive shipping rates to many destinations
            around the world, from air, road or sea shipment. We have over 17
            years of experience as freight forwarders.
          </p>
          <button className="button">
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
