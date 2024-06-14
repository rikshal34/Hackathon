import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
  restocked?: string;
  prop?: string;
  products?: string;
  avatarPlaceholderChangeIm?: string;
  aspectRatioKeeperAddition?: string;
  text?: string;
  mAgo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  restocked,
  prop,
  products,
  avatarPlaceholderChangeIm,
  aspectRatioKeeperAddition,
  text,
  mAgo,
  propWidth,
  propAlignSelf,
  propWidth1,
  propPadding,
  propAlignSelf1,
  propPadding1,
  propAlignSelf2,
  propFlex,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const componentstableCelltextStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  const texttextStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const wrapperStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf2,
    };
  }, [propPadding1, propAlignSelf2]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.restocked6ProductsParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.restocked6ProductsContainer}>
        <span>{restocked}</span>
        <span className={styles.span}>{prop}</span>
        <span>{products}</span>
      </div>
      <div className={styles.componentstableCelltextParent}>
        <div
          className={styles.componentstableCelltext}
          style={componentstableCelltextStyle}
        >
          <div className={styles.minWidthChangeCellWidth}>
            <div className={styles.start} />
            <div className={styles.end} />
          </div>
          <div className={styles.texttext} style={texttextStyle}>
            <div className={styles.wrapper} style={wrapperStyle}>
              <div className={styles.iconLeft}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarPlaceholderChangeI}
                    alt=""
                    src={avatarPlaceholderChangeIm}
                  />
                  <img
                    className={styles.aspectRatioKeeperAddition}
                    loading="lazy"
                    alt=""
                    src={aspectRatioKeeperAddition}
                  />
                </div>
              </div>
              <div className={styles.text} style={textStyle}>
                {text}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div}>-</div>
        <div className={styles.mAgo}>{mAgo}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
