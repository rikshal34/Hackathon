import { FunctionComponent } from "react";
import styles from "./FastMovingItems.module.css";

export type FastMovingItemsType = {
  className?: string;
};

const FastMovingItems: FunctionComponent<FastMovingItemsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.fastMovingItems, className].join(" ")}>
      <div className={styles.itemsContainer}>
        <div className={styles.fastMovingItems1}>Fast Moving Items</div>
      </div>
      <div className={styles.itemTableHeaders}>
        <div className={styles.componentstableCelltext}>
          <div className={styles.minWidthChangeCellWidth}>
            <div className={styles.start} />
            <div className={styles.end} />
          </div>
          <div className={styles.texttext}>
            <div className={styles.wrapper}>
              <div className={styles.iconLeft}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarPlaceholderChangeI}
                    alt=""
                    src="/avatarplaceholder--change-image-here-1@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <b className={styles.itemNames}>Macbook Pro</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders1}>
        <div className={styles.componentstableCelltext1}>
          <div className={styles.minWidthChangeCellWidth1}>
            <div className={styles.start1} />
            <div className={styles.end1} />
          </div>
          <div className={styles.texttext1}>
            <div className={styles.wrapper1}>
              <div className={styles.iconLeft1}>
                <div className={styles.avatar1}>
                  <img
                    className={styles.avatarPlaceholderChangeI1}
                    alt=""
                    src="/avatarplaceholder--change-image-here-2@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition1}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.text}>Iphone 14 pro</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders2}>
        <div className={styles.componentstableCelltext2}>
          <div className={styles.minWidthChangeCellWidth2}>
            <div className={styles.start2} />
            <div className={styles.end2} />
          </div>
          <div className={styles.texttext2}>
            <div className={styles.wrapper2}>
              <div className={styles.iconLeft2}>
                <div className={styles.avatar2}>
                  <img
                    className={styles.avatarPlaceholderChangeI2}
                    alt=""
                    src="/avatarplaceholder--change-image-here-3@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition2}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-3@2x.png"
                  />
                </div>
              </div>
              <b className={styles.text1}>Zoom75</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders3}>
        <div className={styles.componentstableCelltext3}>
          <div className={styles.minWidthChangeCellWidth3}>
            <div className={styles.start3} />
            <div className={styles.end3} />
          </div>
          <div className={styles.texttext3}>
            <div className={styles.wrapper3}>
              <div className={styles.iconLeft3}>
                <div className={styles.avatar3}>
                  <img
                    className={styles.avatarPlaceholderChangeI3}
                    alt=""
                    src="/avatarplaceholder--change-image-here-4@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition3}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <b className={styles.text2}>Airpods Pro</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders4}>
        <div className={styles.componentstableCelltext4}>
          <div className={styles.minWidthChangeCellWidth4}>
            <div className={styles.start4} />
            <div className={styles.end4} />
          </div>
          <div className={styles.texttext4}>
            <div className={styles.wrapper4}>
              <div className={styles.iconLeft4}>
                <div className={styles.avatar4}>
                  <img
                    className={styles.avatarPlaceholderChangeI4}
                    alt=""
                    src="/avatarplaceholder--change-image-here-5@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition4}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.text3}>Samsung Galaxy Fold</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders5}>
        <div className={styles.componentstableCelltext5}>
          <div className={styles.minWidthChangeCellWidth5}>
            <div className={styles.start5} />
            <div className={styles.end5} />
          </div>
          <div className={styles.texttext5}>
            <div className={styles.wrapper5}>
              <div className={styles.iconLeft5}>
                <div className={styles.avatar5}>
                  <img
                    className={styles.avatarPlaceholderChangeI5}
                    alt=""
                    src="/avatarplaceholder--change-image-here-6@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition5}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <b className={styles.text4}>Samsung Odyssey</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemTableHeaders6}>
        <div className={styles.componentstableCelltext6}>
          <div className={styles.minWidthChangeCellWidth6}>
            <div className={styles.start6} />
            <div className={styles.end6} />
          </div>
          <div className={styles.texttext6}>
            <div className={styles.wrapper6}>
              <div className={styles.iconLeft6}>
                <div className={styles.avatar6}>
                  <img
                    className={styles.avatarPlaceholderChangeI6}
                    alt=""
                    src="/avatarplaceholder--change-image-here-7@2x.png"
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition6}
                    alt=""
                    src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
                  />
                </div>
              </div>
              <b className={styles.text5}>Logitech Superlight</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastMovingItems;
