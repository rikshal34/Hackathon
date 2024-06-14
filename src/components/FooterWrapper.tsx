import { FunctionComponent } from "react";
import styles from "./FooterWrapper.module.css";

export type FooterWrapperType = {
  className?: string;
};

const FooterWrapper: FunctionComponent<FooterWrapperType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerWrapper, className].join(" ")}>
      <div className={styles.footer}>
        <div className={styles.frameParent}>
          <div className={styles.logoPlaceholderWrapper}>
            <div className={styles.logoPlaceholder}>
              <div className={styles.wareview}>
                <span>Wiz</span>
                <span className={styles.ard}>Ard</span>
              </div>
            </div>
          </div>
          <div className={styles.linkItemsParent}>
            <div className={styles.linkItems}>
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.linkItems1}>
              <div className={styles.sales}>Sales</div>
            </div>
            <div className={styles.linkItems2}>
              <div className={styles.banking}>Banking</div>
            </div>
            <div className={styles.linkItems3}>
              <div className={styles.records}>Records</div>
            </div>
            <div className={styles.linkItems4}>
              <a className={styles.contactUs}>Contact Us</a>
            </div>
          </div>
        </div>
        <div className={styles.descriptionContentParent}>
          <div className={styles.descriptionContent}>
            <p className={styles.empowerYourFinancialContainer}>
              <span
                className={styles.cultivatingEfficiencyTracki}
              >{`Cultivating Efficiency, Tracking Excellence — `}</span>
              <span className={styles.yourTrustedInventory}>
                Your Trusted Inventory Management Partner
              </span>
            </p>
          </div>
          <div className={styles.socialMedia}>
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
        <div className={styles.legalItemsParent}>
          <div className={styles.legalItems}>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
          </div>
          <div className={styles.legalItems1}>
            <div className={styles.mugnaTechnologiesInc}>
              © 2023 Mugna Technologies, Inc.
            </div>
          </div>
          <div className={styles.legalItems2}>
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

export default FooterWrapper;
