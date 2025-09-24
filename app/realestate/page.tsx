import styles from "./page.module.css";

export default function RealEstate() {
  return (
    <div>
      <img src="/realEstateBanner.jpg" alt="real estate hero" />

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          Your home is your most valuable asset. Whether you&apos;re a first
          time buyer or a seasoned investor, we work to realize your goals of
          homeownership.
        </h1>

        <section className={styles.section}>
          <h3 className={`${styles.sectionHeading} raleway-font-bold`}>
            Finding your own little slice of California living doesn’t have to
            be daunting.
          </h3>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            We provide expert guidance to avoid getting stuck in a maze of
            endless home searches and bidding matches. Navigating the most
            competitive market in real estate is easier with consistent,
            personalized service from the beginning to the close of escrow and
            beyond.
          </p>
        </section>

        <section className={styles.section}>
          <hr />
          <h3 className={`${styles.sectionHeading} raleway-font-bold`}>
            Selling your home doesn’t have to be stressful.
          </h3>
          <p className={`${styles.sectionText} raleway-font-normal`}>
            We work with you to tailor a strategy that maximizes your net return
            and suits your needs. You’ll always be well-informed and aware of
            every step of the process. Your best interest is always our top
            priority not just in selling your home for the best price but also
            taking necessary steps to minimize liability and diligently work
            with buyers toward a smooth and successful sale.
          </p>
        </section>
      </div>
    </div>
  );
}
