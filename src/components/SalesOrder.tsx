import { FunctionComponent } from "react";
import styles from "./SalesOrder.module.css";

export type SalesOrderType = {
  className?: string;
};

const SalesOrder: FunctionComponent<SalesOrderType> = ({ className = "" }) => {
  return (
    <div className={[styles.salesOrder, className].join(" ")}>
      <div className={styles.salesOrderHeader} />
      <div className={styles.salesOrderContent}>
        <div className={styles.salesOrderTitleWrapper}>
          <div className={styles.salesOrderWrapper}>
            <b className={styles.salesOrder1}>Sales Order</b>
          </div>
          <div className={styles.salesOrderFilter}>
            <div className={styles.texttext}>
              <div className={styles.wrapper}>
                <b className={styles.text}>Last 7 Days</b>
                <img className={styles.iconRight} alt="" src="/iconright.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.salesOrderStatus}>
        <div className={styles.orderStatusHeaders}>
          <div className={styles.orderStatusHeaderLabels}>
            <b className={styles.channel}>Channel</b>
          </div>
          <div className={styles.orderStatusValues}>
            <div className={styles.directSales}>Direct Sales</div>
          </div>
          <div className={styles.wholesaleValues}>
            <div className={styles.wholesale}>Wholesale</div>
          </div>
          <div className={styles.orderStatusValues1}>
            <div className={styles.retail}>Retail</div>
          </div>
        </div>
        <div className={styles.orderStatusHeaders1}>
          <div className={styles.draftWrapper}>
            <b className={styles.draft}>Draft</b>
          </div>
          <div className={styles.container}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.div1}>0</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div2}>2</div>
          </div>
        </div>
        <div className={styles.orderStatusHeaders2}>
          <div className={styles.confirmedWrapper}>
            <b className={styles.confirmed}>Confirmed</b>
          </div>
          <div className={styles.wrapper1}>
            <div className={styles.div3}>32</div>
          </div>
          <div className={styles.wrapper2}>
            <div className={styles.div4}>41</div>
          </div>
          <div className={styles.wrapper3}>
            <div className={styles.div5}>12</div>
          </div>
        </div>
        <div className={styles.orderStatusHeaders3}>
          <div className={styles.packedWrapper}>
            <b className={styles.packed}>Packed</b>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.div6}>42</div>
          </div>
          <div className={styles.wrapper5}>
            <div className={styles.div7}>33</div>
          </div>
          <div className={styles.wrapper6}>
            <div className={styles.div8}>25</div>
          </div>
        </div>
        <div className={styles.orderStatusHeaders4}>
          <div className={styles.shippedWrapper}>
            <b className={styles.shipped}>Shipped</b>
          </div>
          <div className={styles.wrapper7}>
            <div className={styles.div9}>23</div>
          </div>
          <div className={styles.wrapper8}>
            <div className={styles.div10}>11</div>
          </div>
          <div className={styles.wrapper9}>
            <div className={styles.div11}>16</div>
          </div>
        </div>
        <div className={styles.orderStatusHeaders5}>
          <div className={styles.invoicedWrapper}>
            <b className={styles.invoiced}>Invoiced</b>
          </div>
          <div className={styles.wrapper10}>
            <div className={styles.div12}>7</div>
          </div>
          <div className={styles.wrapper11}>
            <div className={styles.div13}>14</div>
          </div>
          <div className={styles.wrapper12}>
            <div className={styles.div14}>21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrder;
