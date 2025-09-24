import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      {/* Social Media Links */}
      <div className={styles.urls}>
        <Link target="_blank" href="https://www.facebook.com/NesteggIncHomes">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/nesteggrealestate/"
        >
          <i className="bi bi-instagram"></i>
        </Link>
        <Link target="_blank" href="https://x.com/Nesteggg">
          <i className="bi bi-twitter-x"></i>
        </Link>
      </div>

      {/* Address and Contact Info */}
      <div className={styles.contactInfo}>
        Nestegg Inc - 12387 Lewis Street, Suite 101, Garden Grove, CA 92840
        <br />
        info@nestegginc.net - Cal BRE # 01521541 - NMLS # 301815
      </div>

      {/* Company Logos */}
      <div className={styles.logos}>
        <Image
          src="/logoWText.png"
          alt="nestegg logo"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/lenderLogo.png"
          alt="equal housing lender logo"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
