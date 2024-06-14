import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ItemDetails.module.css";

export type ItemDetailsType = {
  className?: string;
  macbookPro?: string;
  codePlaceholder?: string;
  laptop?: string;
  pricePlaceholder?: string;
  quantityPlaceholder?: string;
  unsplashtpuAo8gVs58?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlex1?: CSSProperties["flex"];
  propPadding1?: CSSProperties["padding"];
  propFlex2?: CSSProperties["flex"];
  propPadding2?: CSSProperties["padding"];
};

const ItemDetails: FunctionComponent<ItemDetailsType> = ({
  className = "",
  macbookPro,
  codePlaceholder,
  laptop,
  pricePlaceholder,
  quantityPlaceholder,
  unsplashtpuAo8gVs58,
  propFlex,
  propPadding,
  propWidth,
  propWidth1,
  propDisplay,
  propFlex1,
  propPadding1,
  propFlex2,
  propPadding2,
}) => {
  const productNameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      width: propWidth,
    };
  }, [propFlex, propPadding, propWidth]);

  const macbookProStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      display: propDisplay,
    };
  }, [propWidth1, propDisplay]);

  const itemCodeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      padding: propPadding1,
    };
  }, [propFlex1, propPadding1]);

  const itemTypeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
      padding: propPadding2,
    };
  }, [propFlex2, propPadding2]);

  return (
    <div className={[styles.itemDetails, className].join(" ")}>
      <div className={styles.productName} style={productNameStyle}>
        <div className={styles.macbookPro} style={macbookProStyle}>
          {macbookPro}
        </div>
      </div>
      <div className={styles.itemCode} style={itemCodeStyle}>
        <div className={styles.codePlaceholder}>{codePlaceholder}</div>
      </div>
      <div className={styles.itemType} style={itemTypeStyle}>
        <div className={styles.laptop}>{laptop}</div>
      </div>
      <div className={styles.itemPrice}>
        <div className={styles.pricePlaceholder}>{pricePlaceholder}</div>
      </div>
      <div className={styles.itemQuantity}>
        <div className={styles.quantityPlaceholder}>{quantityPlaceholder}</div>
      </div>
      <img
        className={styles.unsplashtpuao8gvs58Icon}
        loading="lazy"
        alt=""
        src={unsplashtpuAo8gVs58}
      />
    </div>
  );
};

export default ItemDetails;
