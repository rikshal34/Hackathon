import { FunctionComponent } from "react";
import styles from "./Pagination.module.css";

export type PaginationType = {
  className?: string;
};

const Pagination: FunctionComponent<PaginationType> = ({ className = "" }) => {
  return (
    <div className={[styles.pagination, className].join(" ")}>
      <div className={styles.pagination1}>
        <div className={styles.pagination2}>
          <div className={styles.componentspaginationPrev}>
            <div className={styles.icon}>
              <div className={styles.widthChangeSizeHere}>
                <div className={styles.ignore} />
                <div className={styles.ignore1} />
              </div>
              <div className={styles.iconWrapperH}>
                <div className={styles.heightChangeSizeHere}>
                  <div className={styles.ignore2} />
                  <div className={styles.ignore3} />
                </div>
                <img
                  className={styles.iconWrapper}
                  alt=""
                  src="/iconwrapper-27@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.componentspaginationItem}>
            <div className={styles.texttext}>
              <div className={styles.text}>1</div>
            </div>
          </div>
          <div className={styles.componentspaginationItem1}>
            <div className={styles.texttext1}>
              <div className={styles.text1}>2</div>
            </div>
          </div>
          <div className={styles.componentspaginationItem2}>
            <div className={styles.texttext2}>
              <div className={styles.text2}>3</div>
            </div>
          </div>
          <div className={styles.componentspaginationItem3}>
            <div className={styles.texttext3}>
              <div className={styles.text3}>4</div>
            </div>
          </div>
          <div className={styles.componentspaginationItem4}>
            <div className={styles.texttext4}>
              <div className={styles.text4}>5</div>
            </div>
          </div>
          <div className={styles.componentspaginationNext}>
            <div className={styles.icon1}>
              <div className={styles.widthChangeSizeHere1}>
                <div className={styles.ignore4} />
                <div className={styles.ignore5} />
              </div>
              <div className={styles.iconWrapperH1}>
                <div className={styles.heightChangeSizeHere1}>
                  <div className={styles.ignore6} />
                  <div className={styles.ignore7} />
                </div>
                <img
                  className={styles.iconWrapper1}
                  alt=""
                  src="/iconwrapper-281@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
