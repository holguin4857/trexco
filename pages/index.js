import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import testimonials from "../styles/testimonials.module.css";
import milestones from "../styles/milestones.module.css";
import why from "../styles/why.module.css";
import services from "../styles/services.module.css";
import buttons from "../styles/buttons.module.css";

export default function Home() {
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
          <h1>Uncomplicate your Shipping</h1>

          <p>
            Choose Trexco for Flexible, Cost-effective, and Reliable Transport
            of Flat Racks, Containers and Pallets via Air, Sea or Land
          </p>
          <button className={hero.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
          <button className={hero.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <section className={services.columns}>
        <article className={services.column}>
          <Image
            src="/images/flatrack.png"
            alt="Flatrack"
            width={200}
            height={200}
          />
          <h2>Flat Racks</h2>
          <p>
            Ship your heavy machinery with our reliable flat rack service. Safe,
            efficient, and customized to your needs.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/cargoship.png"
            alt="Ship"
            width={200}
            height={200}
          />
          <h2>Shipping Containers</h2>
          <p>
            Streamline your shipping process with our reliable container
            solutions. Efficient, cost-effective, and delivered on time.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/airplane.png"
            alt="plane"
            width={200}
            height={200}
          />
          <h2>Air Freight & LCL</h2>
          <p>
            Shipping smaller volumes? Airfreight and LCL are the cost-effective
            choice. Maximize your budget and minimize your shipping costs.
          </p>
        </article>
      </section>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Trust Your Shipments to the Experts</h2>
          <p>
            Experience personalized, high-quality shipping services with our 19
            years of expertise. We provide exceptional shipping rates for air,
            road, and sea freight, connecting you to destinations around the
            globe while ensuring your unique requirements are met.
          </p>
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

      <div className={why.container}>
        <div className={why.content}>
          <h2>Why choose trexco?</h2>

          <ul>
            <li>
              <strong>Expertise in Heavy Machinery:</strong> We have extensive
              experience in handling a wide range of equipment, including
              tractors, harvesters, excavators, loaders, and more.
            </li>
            <li>
              <strong>Focus on Chile & Mexico:</strong> We possess in-depth
              knowledge of the agricultural and construction sectors in these
              countries, ensuring your machinery arrives ready to operate.
            </li>
            <li>
              <strong>Comprehensive Service:</strong> We manage the entire
              shipping process, from collection and loading to customs clearance
              and delivery, taking the complexity out of international
              transport.
            </li>
            <li>
              <strong>Personalized Attention:</strong> We provide dedicated
              support and clear communication throughout the journey, ensuring a
              smooth and stress-free experience.
            </li>
            <li>
              <strong>Competitive Rates:</strong> We offer cost-effective
              solutions tailored to your specific needs and budget.
            </li>
          </ul>

          <button className={hero.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <div className={features.container}>
        <div className="image">
          <Image
            src="/images/flatrack.png"
            alt="flatrack"
            width={500}
            height={500}
          />
        </div>
        <div className={features.content}>
          <h2>Flat Racks</h2>
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
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/images/ship.png"
          />
        </div>
      </div>

      <div className={features.container}>
        <div className="image">
          <Image
            src="/images/airplane.png"
            alt="cargo plane"
            width={500}
            height={500}
          />
        </div>
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
      </div>

      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            Trexco surpassed my expectations! My TrexxBox arrived faster than
            expected and their customer support was top-notch. I am thrilled to
            have found a reliable shipping service I can trust. Highly
            recommended! <br />
            <br /> Alex McGee.
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
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
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            Gracias a TREXCO, importamos varios tractores con facilidad. Su
            servicio de compra y envío desde el Reino Unido a Bolivia fue
            excepcional, cuidando cada detalle desde la selección hasta la
            entrega <br />
            <br /> Rodrigo Diaz
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
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
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
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
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
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
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
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
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
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

      <div className={features.container}>
        <div className={features.content}>
          <h2>shipping with confidence</h2>
          <p>
            We have secured competitive shipping rates to many destinations
            around the world, from air, road or sea shipment. We have over 19
            years of experience as freight forwarders.
          </p>
          <button className={buttons.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
