import styles from "./page.module.css";

export default function Mortgage() {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <img
          src="/mortgageBanner.jpg"
          alt="mortgage hero"
          className={styles.hero}
        />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          There’s more to a mortgage broker than just great rates.
        </h1>

        <section className={styles.section}>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            We believe that customer service and communication matter. Whether
            you’re an existing homeowner refinancing to get a lower payment or
            you’re a first time buyer, we keep you in the loop.
          </p>
        </section>

        <section className={styles.section}>
          <hr />
          <p className={`${styles.sectionText} raleway-font-normal`}>
            We go above and beyond. Working for you isn’t only about making sure
            that mortgage transactions happen smoothly. We also strive to
            educate and inform our clients – so that you can make the best
            decision based on the best available information.
          </p>
          <hr />
        </section>

        <section className={styles.section}>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            Talk to us about getting a mortgage or use the calculator below to
            estimate your own savings!
          </p>
        </section>
      </div>
    </div>
  );
}
