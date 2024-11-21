import Head from "next/head";
import Link from "next/link";
import why from "../styles/why.module.css";
import buttons from "../styles/buttons.module.css";

export default function How() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

          <p></p>
          <p></p>

          <button className={buttons.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>
    </>
  );
}
