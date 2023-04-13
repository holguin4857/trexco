import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function How() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="container-3">
        simplify your shipping by using an easy, convenient way to pack, store,
        and move your cargo. see how it works:
      </h1>

      <section className="column-3">
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
      </section>

      <section className="container">
        <div className="content">
          <p>
            Trexco offers do-it-yourself shipping options, for those who might
            be looking for an easy, affordable, efficient, way to ship.
          </p>
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
