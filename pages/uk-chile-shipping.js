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
          <h2>
            Descubre Soluciones de Importación desde el Reino Unido con trexco
          </h2>
          <p>
            En la segunda mitad del 2024, las relaciones comerciales entre Chile
            y el Reino Unido alcanzarán un hito con la adhesión del Reino Unido
            al CPTPP. Esta nueva era promete oportunidades únicas para
            importadores chilenos brindandoles acceso a productos británicos de
            alta calidad con aranceles reducidos en chile, ampliando su
            competitividad y alcance de mercado.
          </p>

          <button className="button">
            <Link href="https://trexco.net/contact">Reserva ya</Link>
          </button>
          <button className="button1">
            <Link href="contact">Habla con un experto</Link>
          </button>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2>Nuestros servicios</h2>

          <p>
            Búsqueda precisa de todo tipo de productos en el Reino Unido, desde
            maquinaria industrial y agricola, vehiculos, tornos, casas rodantes,
            antiguedades y materias primas del Reino Unido para la exportacion a
            Chile.
          </p>
          <p>
            Soluciones de envío marítimo y aéreo, a los puertos de San Antonio,
            Valparaiso, Iquique, Arica y al aeropuerto de Santiago.
          </p>
          <p>
            Garantía de Cumplimiento: Revisiones rigurosas y manejo experto de
            la documentación comercial.
          </p>
          <p>
            Búsqueda precisa de todo tipo de productos en el Reino Unido, desde
            maquinaria industrial y agricola, vehiculos, tornos, casas rodantes,
            antiguedades y materias primas del Reino Unido para la exportacion a
            Chile.
          </p>
        </div>
        <div className="image1">
          <Image src={container1} alt="loading" loading="lazy" />
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2>Porque elegir trexco</h2>
          <p>
            Con una amplia experiencia en transporte y logística, TREXCO se
            destaca como su socio de confianza para navegar en el comercio
            internacional.
          </p>

          <button className="button">
            <Link href="https://trexco.net/contact">Reserva ya</Link>
          </button>
          <button className="button1">
            <Link href="contact">Habla con un experto</Link>
          </button>
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
          <h2>Actua ya!</h2>
          <p>
            Contacta a TREXCO hoy para personalizar tus soluciones de logística
            entre el Reino Unido y Chile.
          </p>
          <button className="button">
            <Link href="https://trexco.net/contact">Contactenos</Link>
          </button>
        </div>
      </div>
    </>
  );
}
