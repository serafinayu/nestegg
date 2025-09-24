import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <img src="/homeBanner.jpg" alt="home hero" />

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Your home starts with you.</h1>

        <section className={styles.section}>
          <h3 className={`${styles.sectionHeading} raleway-font-bold`}>
            Home is more than just where you live.
          </h3>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            Home can be a place to thrive, grow and build a lifetime investment.
            We work to make our clients’ best version of home a reality.
          </p>
        </section>

        <section className={styles.section}>
          <hr />
          <h3 className={`${styles.sectionHeading} raleway-font-bold`}>
            Expert advice at every step.
          </h3>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            Homeownership can be a maze of confusing terminology, processes and
            requirements that can intimidate even seasoned investors. We
            untangle the mess and help you make a plan based on your goals.
          </p>
          <hr />
        </section>

        <section className={styles.section}>
          <h3 className={`${styles.sectionHeading} raleway-font-bold`}>
            Everything is right here.
          </h3>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            We handle real estate financing and real estate sales in-house. You
            don’t have to use both services, but when you do, you have a single
            point of contact handling everything in your transaction. Either
            way, you always get personalized service and peace of mind.
          </p>
        </section>
      </div>
    </div>
  );
}
