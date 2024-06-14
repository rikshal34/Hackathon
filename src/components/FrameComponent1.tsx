import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  iconWrapper?: string;
  k?: string;
  todaysSale?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  iconWrapper,
  k,
  todaysSale,
  propFlex,
  propMinWidth,
  propBackgroundColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.salesDataInner, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.iconWrapperWrapper} style={frameDiv1Style}>
          <div className={styles.iconWrapper}>
            <div className={styles.widthChangeSizeHere}>
              <div className={styles.ignore} />
              <div className={styles.ignore1} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere}>
                <div className={styles.ignore2} />
                <div className={styles.ignore3} />
              </div>
              <img className={styles.iconWrapper1} alt="" src={iconWrapper} />
            </div>
          </div>
        </div>
        <div className={styles.dataValues}>
          <b className={styles.k}>{k}</b>
          <div className={styles.todaysSale}>{todaysSale}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
