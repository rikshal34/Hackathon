import { FunctionComponent } from "react";
import styles from "./PageFooter.module.css";

export type PageFooterType = {
  className?: string;
};

const PageFooter: FunctionComponent<PageFooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.pageFooter, className].join(" ")}>
      <div className={styles.footer}>
        <div className={styles.frameParent}>
          <div className={styles.wareviewContainerWrapper}>
            <div className={styles.wareviewContainer}>
              <h1 className={styles.wareview}>
                <span>Wiz</span>
                <span className={styles.ard}>Ard</span>
              </h1>
            </div>
          </div>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.footerLinks1}>
              <div className={styles.sales}>Sales</div>
            </div>
            <div className={styles.footerLinks2}>
              <div className={styles.banking}>Banking</div>
            </div>
            <div className={styles.footerLinks3}>
              <div className={styles.records}>Records</div>
            </div>
            <div className={styles.footerLinks4}>
              <a className={styles.contactUs}>Contact Us</a>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.empowerYourFinancialInsightWrapper}>
            <p className={styles.empowerYourFinancialContainer}>
              <span
                className={styles.cultivatingEfficiencyTracki}
              >{`Cultivating Efficiency, Tracking Excellence — `}</span>
              <span className={styles.yourTrustedInventory}>
                Your Trusted Inventory Management Partner
              </span>
            </p>
          </div>
          <div className={styles.facebookParent}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <div className={styles.socialIcons}>
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/instagram.svg"
              />
            </div>
            <div className={styles.socialIcons1}>
              <img
                className={styles.twitterIcon}
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider}>
            <img
              className={styles.lineIcon}
              loading="lazy"
              alt=""
              src="/line.svg"
            />
          </div>
        </div>
        <div className={styles.legalLinksParent}>
          <div className={styles.legalLinks}>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
          </div>
          <div className={styles.legalLinks1}>
            <div className={styles.mugnaTechnologiesInc}>
              © 2023 Mugna Technologies, Inc.
            </div>
          </div>
          <div className={styles.legalLinks2}>
            <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
          </div>
        </div>
      </div>
      <img
        className={styles.image2Icon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
    </section>
  );
};

export default PageFooter;
