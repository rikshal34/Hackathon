import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.stockReportParent, className].join(" ")}>
      <div className={styles.stockReport}>
        <div className={styles.reportContent}>
          <div className={styles.revenueReportParent}>
            <b className={styles.revenueReport}>Revenue Report</b>
            <div className={styles.reportIcon}>
              <div className={styles.componentstag}>
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
                      src="/iconwrapper-6@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.title}>Net profit</div>
                  <div className={styles.iconClose}>
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
                        src="/iconwrapper-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.componentstag1}>
                <div className={styles.icon1}>
                  <div className={styles.widthChangeSizeHere2}>
                    <div className={styles.ignore8} />
                    <div className={styles.ignore9} />
                  </div>
                  <div className={styles.iconWrapperH2}>
                    <div className={styles.heightChangeSizeHere2}>
                      <div className={styles.ignore10} />
                      <div className={styles.ignore11} />
                    </div>
                    <img
                      className={styles.iconWrapper2}
                      alt=""
                      src="/iconwrapper-8@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <div className={styles.title1}>Gross Profit</div>
                  <div className={styles.iconClose1}>
                    <div className={styles.widthChangeSizeHere3}>
                      <div className={styles.ignore12} />
                      <div className={styles.ignore13} />
                    </div>
                    <div className={styles.iconWrapperH3}>
                      <div className={styles.heightChangeSizeHere3}>
                        <div className={styles.ignore14} />
                        <div className={styles.ignore15} />
                      </div>
                      <img
                        className={styles.iconWrapper3}
                        alt=""
                        src="/iconwrapper-9@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div}>25000</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div1}>20000</div>
          <div className={styles.chartContainer}>
            <div className={styles.chartArea}>
              <div className={styles.chartContent}>
                <div className={styles.chartPlaceholderWrapper}>
                  <div className={styles.chartPlaceholder}>
                    <div className={styles.emptyPlaceholder}>15000</div>
                    <div className={styles.emptyPlaceholder1}>10000</div>
                    <div className={styles.emptyPlaceholder2}>5000</div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.barElement}>
                    <div className={styles.barItem} />
                    <div className={styles.barItem1} />
                  </div>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.stackedBarElement}>
                    <div className={styles.stackedBarItem} />
                    <div className={styles.stackedBarItem1} />
                  </div>
                  <div className={styles.frameChild3} />
                </div>
              </div>
              <div className={styles.chartLabels}>
                <div className={styles.labelPlaceholder}>
                  <div className={styles.emptyLabel}>0</div>
                </div>
                <div className={styles.jan}>Jan</div>
                <div className={styles.feb}>Feb</div>
              </div>
            </div>
            <div className={styles.marchChart}>
              <div className={styles.chartContentMarch}>
                <div className={styles.chartAreaMarch}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild4} />
                    <div className={styles.frameChild5} />
                    <div className={styles.frameChild6} />
                    <div className={styles.barElementMarch}>
                      <div className={styles.barItemMarch} />
                      <div className={styles.barItemMarch1} />
                    </div>
                    <div className={styles.frameChild7} />
                  </div>
                </div>
                <div className={styles.mar}>Mar</div>
              </div>
              <div className={styles.aprilChart}>
                <div className={styles.chartContentApril}>
                  <div className={styles.frameParent}>
                    <div className={styles.barItemAprilParent}>
                      <div className={styles.barItemApril} />
                      <div className={styles.barElementApril} />
                    </div>
                    <div className={styles.frameChild8} />
                    <div className={styles.frameChild9} />
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild10} />
                      <div className={styles.frameChild11} />
                    </div>
                    <div className={styles.frameChild12} />
                  </div>
                </div>
                <div className={styles.apr}>Apr</div>
              </div>
            </div>
            <div className={styles.mayChart}>
              <div className={styles.chartContentMay}>
                <div className={styles.chartAreaMay}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild13} />
                    <div className={styles.frameChild14} />
                    <div className={styles.frameChild15} />
                  </div>
                </div>
                <div className={styles.may}>May</div>
              </div>
              <div className={styles.juneChart}>
                <div className={styles.chartContentJune}>
                  <div className={styles.frameGroup}>
                    <div className={styles.barItemJuneParent}>
                      <div className={styles.barItemJune} />
                      <div className={styles.barElementJune} />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild16} />
                      <div className={styles.frameChild17} />
                    </div>
                  </div>
                </div>
                <div className={styles.jun}>Jun</div>
              </div>
            </div>
            <div className={styles.julyChart}>
              <div className={styles.chartContentJuly}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild18} />
                  <div className={styles.frameChild19} />
                  <div className={styles.stackedBarJuly}>
                    <div className={styles.stackedBarJulyChild} />
                    <div className={styles.stackedBarJulyItem} />
                    <div className={styles.stackedBarJulyInner} />
                  </div>
                </div>
                <div className={styles.jul}>Jul</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <div className={styles.augustChartBarParent}>
                      <div className={styles.augustChartBar} />
                      <div className={styles.augustChartBar1} />
                    </div>
                    <div className={styles.frameChild20} />
                    <div className={styles.frameChild21} />
                    <div className={styles.frameChild22} />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.frameChild23} />
                      <div className={styles.frameChild24} />
                    </div>
                  </div>
                </div>
                <div className={styles.aug}>Aug</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.septemberChartElementParent}>
                  <div className={styles.septemberChartElement}>
                    <div className={styles.septemberChartBar} />
                    <div className={styles.septemberChartBar1} />
                  </div>
                  <div className={styles.frameChild25} />
                  <div className={styles.septemberChartElement1}>
                    <div className={styles.septemberChartBar2} />
                    <div className={styles.septemberChartBar3} />
                    <div className={styles.septemberChartBar4} />
                  </div>
                </div>
                <div className={styles.sep}>Sep</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.octoberChartParent}>
                  <div className={styles.octoberChart} />
                  <div className={styles.octoberChart1} />
                  <div className={styles.octoberChart2} />
                  <div className={styles.octoberChart3} />
                </div>
                <div className={styles.oct}>Oct</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.novemberChartElementParent}>
                  <div className={styles.novemberChartElement} />
                  <div className={styles.novemberChartElement1} />
                  <div className={styles.novemberChartBar}>
                    <div className={styles.novemberChartBarChild} />
                    <div className={styles.novemberChartBarItem} />
                    <div className={styles.novemberChartBarInner} />
                  </div>
                </div>
                <div className={styles.nov}>Nov</div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.decemberChartParent}>
                  <div className={styles.decemberChart}>
                    <div className={styles.decemberChartBar} />
                    <div className={styles.decemberChartBar1} />
                  </div>
                  <div className={styles.frameChild26} />
                </div>
                <div className={styles.dec}>Dec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.salesSummary}>
        <b className={styles.salesSummary1}>Sales Summary</b>
        <div className={styles.salesData}>
          <FrameComponent1
            iconWrapper="/iconwrapper-10@2x.png"
            k="143.3k"
            todaysSale="Today’s Sale"
          />
          <FrameComponent1
            iconWrapper="/iconwrapper-11@2x.png"
            k="$ 250,423"
            todaysSale="Yearly Total Sales"
            propFlex="unset"
            propMinWidth="unset"
            propBackgroundColor="#f0e8fc"
          />
          <FrameComponent1
            iconWrapper="/iconwrapper-12@2x.png"
            k="$68.9k"
            todaysSale="Net Income"
            propFlex="1"
            propMinWidth="106px"
            propBackgroundColor="#fcf3ec"
          />
          <FrameComponent1
            iconWrapper="/iconwrapper-13@2x.png"
            k="343"
            todaysSale="Products"
            propFlex="1"
            propMinWidth="106px"
            propBackgroundColor="#fce0ec"
          />
        </div>
      </div>
      <div className={styles.quickActions}>
        <div className={styles.quickActionsContainer}>
          <b className={styles.quickActions1}>Quick Actions</b>
          <div className={styles.actionItems}>
            <div className={styles.wrapperParent}>
              <div className={styles.wrapper2}>
                <div className={styles.icon2}>
                  <div className={styles.widthChangeSizeHere4}>
                    <div className={styles.ignore16} />
                    <div className={styles.ignore17} />
                  </div>
                  <div className={styles.iconWrapperH4}>
                    <div className={styles.heightChangeSizeHere4}>
                      <div className={styles.ignore18} />
                      <div className={styles.ignore19} />
                    </div>
                    <img
                      className={styles.iconWrapper4}
                      alt=""
                      src="/iconwrapper-14@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <b className={styles.text1}>Create Order</b>
                </div>
              </div>
              <div className={styles.ctrlN}>ctrl + n</div>
            </div>
            <div className={styles.wrapperGroup}>
              <div className={styles.wrapper3}>
                <div className={styles.icon3}>
                  <div className={styles.widthChangeSizeHere5}>
                    <div className={styles.ignore20} />
                    <div className={styles.ignore21} />
                  </div>
                  <div className={styles.iconWrapperH5}>
                    <div className={styles.heightChangeSizeHere5}>
                      <div className={styles.ignore22} />
                      <div className={styles.ignore23} />
                    </div>
                    <img
                      className={styles.iconWrapper5}
                      alt=""
                      src="/iconwrapper-15@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.text2}>
                  <b className={styles.text3}>Add Product</b>
                </div>
              </div>
              <div className={styles.ctrlP}>ctrl + p</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
