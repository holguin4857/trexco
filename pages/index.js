import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import container1 from "public/images/container1.png";

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
          <button className="button1">
            <Link href="contact">Talk to an expert</Link>
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
            your shipping needs. From the beginning to the end of your the
            journey, we are committed to ensuring timely delivery and
            maintaining the excellent condition of your shipment.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/boxes-man-cat.webp"
            alt="loading"
            width={550}
            height={550}
            priority={true}
          />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h3>1700+</h3>
          <p>Crates Shipped by Air and Road</p>
        </div>
        <div className="card">
          <h3>300+</h3>
          <p>Full containers shipped by sea</p>
        </div>
        <div className="card">
          <h3>4000+</h3>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <Image
            src="/images/box-cat.webp"
            alt="loading"
            width={550}
            height={550}
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
      <div className="container">
        <div className="content">
          <h2>How it works</h2>
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
        <div className="image1">
          <Image src={container1} alt="loading" loading="lazy" />
        </div>
      </div>

      <div className="container-2">
        <div className="content">
          <p>
            Trexco surpassed my expectations! My TrexxBox arrived faster than
            expected and their customer support was top-notch. I am thrilled to
            have found a reliable shipping service I can trust. Highly
            recommended! <br />
            <br /> Alex McGee.
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="content">
          <p>
            Les cuento que nuestras cosas finalmente ya están en mi apto en
            Bogota and so far so good… nada se ha partido!!! Todavía faltan
            muchas cajas por abrir pero estoy seguro que todo estará como salio
            de mi casa en Londres. En nombre de Juliana y mío les doy las
            gracias por todo su apoyo y esfuerzo en esto. Nosotros quedamos muy
            contentos con su servicio. <br />
            <br /> Daniel Sarabia Mancini.
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="content">
          <p>
            Gracias a TREXCO, importamos varios tractores con facilidad. Su
            servicio de compra y envío desde el Reino Unido a Bolivia fue
            excepcional, cuidando cada detalle desde la selección hasta la
            entrega <br />
            <br /> Rodrigo Diaz
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="content">
          <p>
            TREXCO ha sido fundamental en la importación de piezas para nuestros
            camiones. Su atención al detalle y conocimiento en logística
            garantizó un proceso sin complicaciones. Recomendamos ampliamente
            sus servicios.
            <br />
            <br />
            Enrico Vicentini
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="content">
          <p>
            As a small business owner, I cannot stress enough how much Trexco
            has improved my shipping experience. Their affordable rates, speedy
            deliveries, and proactive communication make them my go-to choice
            for all my shipping needs. <br />
            <br />
            Bernardita Riesco Binimelis
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="content">
          <p>
            Trexco has been helping us to ship from our suppliers in Cornwall to
            Posorja and Quito, Ecuador. Their expertise in handling large cargo,
            coupled with their commitment to punctuality and customer
            satisfaction, makes them the only choice for my business. <br />
            <br />
            Peter Taylor
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="content">
          <p>
            Trexco container shipping service is very good. They provided a
            secure and cost-effective solution for my business, ensuring my
            cargo arrived safely and on time. Highly recommended for all your
            container shipping needs! <br />
            <br />
            Helena Rosa Menendez
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="content">
          <p>
            I was nervous about shipping my household goods to Chile in a large
            container, but Trexco put my mind at ease. Their efficient
            logistics, reasonable pricing, and excellent customer service made
            the process seamless. I wholeheartedly recommend them for container
            shipping! <br />
            <br />
            Pablo Torres
          </p>
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
