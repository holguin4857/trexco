import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Pri() {
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
          <h1>Privacy policy</h1>
          <p></p>

          <p>
            This privacy policy sets out how Trexco uses and protects any
            information that you give when you use this website.
          </p>
          <p>
            Trexco is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
          </p>
          <p>
            Trexco may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes. This policy is effective from
            24/11/2017
          </p>
          <h2>What we collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>full name</li>
            <li>contact information including email address</li>
            <li>demographic information such as postcode and address</li>
          </ul>
          <p></p>
          <h2>What we do with the information we gather</h2>
          <p></p>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <li>Internal record keeping</li>
          <li>
            We may use the information to improve our products and services.
          </li>
          <li>
            We may periodically send promotional emails about new products
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes
          </li>
          <p></p>
          <h2>Security</h2>
          <p></p>
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
          <h2>How we use cookies</h2>
          <p></p>
          
          <p>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyse data about web page traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>
         
          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>
        </div>
      </section>
    </>
  );
}
