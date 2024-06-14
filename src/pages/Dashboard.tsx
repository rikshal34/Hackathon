import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import SalesOrder from "../components/SalesOrder";
import FastMovingItems from "../components/FastMovingItems";
import PageFooter from "../components/PageFooter";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardChild} />
      <header className={styles.main}>
        <div className={styles.image1Parent}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.topNavigation}>
            <div className={styles.inputBaseParent}>
              <div className={styles.inputBase}>
                <div className={styles.input}>
                  <div className={styles.inputPrefix}>
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
                        <img
                          className={styles.iconWrapper1}
                          alt=""
                          src="/iconwrapper@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.input1}>{`Search `}</div>
                </div>
                <div className={styles.spacer}>
                  <div className={styles.ignore4} />
                  <div className={styles.ignore5} />
                </div>
                <div className={styles.inputSuffix}>
                  <div className={styles.iconWrapper2}>
                    <div className={styles.widthChangeSizeHere1}>
                      <div className={styles.ignore6} />
                      <div className={styles.ignore7} />
                    </div>
                    <div className={styles.iconWrapperH1}>
                      <div className={styles.heightChangeSizeHere1}>
                        <div className={styles.ignore8} />
                        <div className={styles.ignore9} />
                      </div>
                      <img
                        className={styles.iconWrapper3}
                        alt=""
                        src="/iconwrapper-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.avatar}>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper4}>
            <div className={styles.widthChangeSizeHere2}>
              <div className={styles.ignore10} />
              <div className={styles.ignore11} />
            </div>
            <div className={styles.iconWrapperH2}>
              <div className={styles.heightChangeSizeHere2}>
                <div className={styles.ignore12} />
                <div className={styles.ignore13} />
              </div>
              <img
                className={styles.iconWrapper5}
                alt=""
                src="/iconwrapper-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.adminParent}>
        <div className={styles.admin}>
          <div className={styles.adminInfo}>
            <div className={styles.avatarWrapperParent}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatarWrapperInner}>
                  <div className={styles.inputBaseGroup}>
                    <div className={styles.inputBase1}>
                      <div className={styles.input2}>
                        <div className={styles.inputPrefix1}>
                          <div className={styles.iconWrapper6}>
                            <div className={styles.widthChangeSizeHere3}>
                              <div className={styles.ignore14} />
                              <div className={styles.ignore15} />
                            </div>
                            <div className={styles.iconWrapperH3}>
                              <div className={styles.heightChangeSizeHere3}>
                                <div className={styles.ignore16} />
                                <div className={styles.ignore17} />
                              </div>
                              <img
                                className={styles.iconWrapper7}
                                alt=""
                                src="/iconwrapper@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.input3}>{`Search `}</div>
                      </div>
                      <div className={styles.spacer1}>
                        <div className={styles.ignore18} />
                        <div className={styles.ignore19} />
                      </div>
                      <div className={styles.inputSuffix1}>
                        <div className={styles.iconWrapper8}>
                          <div className={styles.widthChangeSizeHere4}>
                            <div className={styles.ignore20} />
                            <div className={styles.ignore21} />
                          </div>
                          <div className={styles.iconWrapperH4}>
                            <div className={styles.heightChangeSizeHere4}>
                              <div className={styles.ignore22} />
                              <div className={styles.ignore23} />
                            </div>
                            <img
                              className={styles.iconWrapper9}
                              alt=""
                              src="/iconwrapper-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.searchIcon1}
                      alt=""
                      src="/search-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatar1}>
                    <img
                      className={styles.avatarPlaceholderChangeI}
                      alt=""
                      src="/avatarplaceholder--change-image-here@2x.png"
                    />
                    <img
                      className={styles.aspectRatioKeeperAddition}
                      loading="lazy"
                      alt=""
                      src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.nameAndRole}>
                <b className={styles.bryanDoe}>Bryan Doe</b>
                <b className={styles.admin1}>Admin</b>
              </div>
            </div>
            <div className={styles.iconWrapperWrapper}>
              <div className={styles.iconWrapper10}>
                <div className={styles.widthChangeSizeHere5}>
                  <div className={styles.ignore24} />
                  <div className={styles.ignore25} />
                </div>
                <div className={styles.iconWrapperH5}>
                  <div className={styles.heightChangeSizeHere5}>
                    <div className={styles.ignore26} />
                    <div className={styles.ignore27} />
                  </div>
                  <img
                    className={styles.iconWrapper11}
                    alt=""
                    src="/iconwrapper-5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent />
        <section className={styles.salesOrderParent}>
          <SalesOrder />
          <FastMovingItems />
        </section>
        <div className={styles.sideNav}>
          <div className={styles.wareviewWrapper}>
            <div className={styles.wareview}>
              <span>Ware</span>
              <span className={styles.view}>View</span>
            </div>
          </div>
          <form className={styles.navItems}>
            <div className={styles.navList}>
              <div className={styles.verticalNavItem}>
                <div className={styles.wrapper1}>
                  <div className={styles.icon}>
                    <div className={styles.widthChangeSizeHere6}>
                      <div className={styles.ignore28} />
                      <div className={styles.ignore29} />
                    </div>
                    <div className={styles.iconWrapperH6}>
                      <div className={styles.heightChangeSizeHere6}>
                        <div className={styles.ignore30} />
                        <div className={styles.ignore31} />
                      </div>
                      <img
                        className={styles.iconWrapper12}
                        alt=""
                        src="/iconwrapper-16@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.text}>
                    <b className={styles.content}>GENERAL</b>
                  </div>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.widthChangeSizeHere7}>
                    <div className={styles.ignore32} />
                    <div className={styles.ignore33} />
                  </div>
                  <div className={styles.iconWrapperH7}>
                    <div className={styles.heightChangeSizeHere7}>
                      <div className={styles.ignore34} />
                      <div className={styles.ignore35} />
                    </div>
                    <img
                      className={styles.iconWrapper13}
                      alt=""
                      src="/iconwrapper-17@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.componentstabsLeft}>
                <div className={styles.verticalNavItem1}>
                  <div className={styles.wrapper2}>
                    <div className={styles.icon1}>
                      <div className={styles.widthChangeSizeHere8}>
                        <div className={styles.ignore36} />
                        <div className={styles.ignore37} />
                      </div>
                      <div className={styles.iconWrapperH8}>
                        <div className={styles.heightChangeSizeHere8}>
                          <div className={styles.ignore38} />
                          <div className={styles.ignore39} />
                        </div>
                        <img
                          className={styles.iconWrapper14}
                          alt=""
                          src="/iconwrapper-18@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text1}>
                      <b className={styles.content1}>Dashboard</b>
                    </div>
                  </div>
                  <div className={styles.arrow1}>
                    <div className={styles.widthChangeSizeHere9}>
                      <div className={styles.ignore40} />
                      <div className={styles.ignore41} />
                    </div>
                    <div className={styles.iconWrapperH9}>
                      <div className={styles.heightChangeSizeHere9}>
                        <div className={styles.ignore42} />
                        <div className={styles.ignore43} />
                      </div>
                      <img
                        className={styles.iconWrapper15}
                        alt=""
                        src="/iconwrapper-19@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalNavItem2}>
                  <div className={styles.wrapper3}>
                    <div className={styles.icon2}>
                      <div className={styles.widthChangeSizeHere10}>
                        <div className={styles.ignore44} />
                        <div className={styles.ignore45} />
                      </div>
                      <div className={styles.iconWrapperH10}>
                        <div className={styles.heightChangeSizeHere10}>
                          <div className={styles.ignore46} />
                          <div className={styles.ignore47} />
                        </div>
                        <img
                          className={styles.iconWrapper16}
                          alt=""
                          src="/iconwrapper-20@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text2}>
                      <div className={styles.content2}>Inventory</div>
                    </div>
                  </div>
                  <div className={styles.arrow2}>
                    <div className={styles.widthChangeSizeHere11}>
                      <div className={styles.ignore48} />
                      <div className={styles.ignore49} />
                    </div>
                    <div className={styles.iconWrapperH11}>
                      <div className={styles.heightChangeSizeHere11}>
                        <div className={styles.ignore50} />
                        <div className={styles.ignore51} />
                      </div>
                      <img
                        className={styles.iconWrapper17}
                        alt=""
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalNavItem3}>
                  <div className={styles.wrapper4}>
                    <div className={styles.icon3}>
                      <div className={styles.widthChangeSizeHere12}>
                        <div className={styles.ignore52} />
                        <div className={styles.ignore53} />
                      </div>
                      <div className={styles.iconWrapperH12}>
                        <div className={styles.heightChangeSizeHere12}>
                          <div className={styles.ignore54} />
                          <div className={styles.ignore55} />
                        </div>
                        <img
                          className={styles.iconWrapper18}
                          alt=""
                          src="/iconwrapper-22@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text3}>
                      <div className={styles.name}>Sales Orders</div>
                    </div>
                  </div>
                  <div className={styles.arrow3}>
                    <div className={styles.widthChangeSizeHere13}>
                      <div className={styles.ignore56} />
                      <div className={styles.ignore57} />
                    </div>
                    <div className={styles.iconWrapperH13}>
                      <div className={styles.heightChangeSizeHere13}>
                        <div className={styles.ignore58} />
                        <div className={styles.ignore59} />
                      </div>
                      <img
                        className={styles.iconWrapper19}
                        alt=""
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navList1}>
              <div className={styles.verticalNavItem4}>
                <div className={styles.wrapper5}>
                  <div className={styles.icon4}>
                    <div className={styles.widthChangeSizeHere14}>
                      <div className={styles.ignore60} />
                      <div className={styles.ignore61} />
                    </div>
                    <div className={styles.iconWrapperH14}>
                      <div className={styles.heightChangeSizeHere14}>
                        <div className={styles.ignore62} />
                        <div className={styles.ignore63} />
                      </div>
                      <img
                        className={styles.iconWrapper20}
                        alt=""
                        src="/iconwrapper-24@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <b className={styles.text5}>SUPPORT</b>
                  </div>
                </div>
                <div className={styles.arrow4}>
                  <div className={styles.widthChangeSizeHere15}>
                    <div className={styles.ignore64} />
                    <div className={styles.ignore65} />
                  </div>
                  <div className={styles.iconWrapperH15}>
                    <div className={styles.heightChangeSizeHere15}>
                      <div className={styles.ignore66} />
                      <div className={styles.ignore67} />
                    </div>
                    <img
                      className={styles.iconWrapper21}
                      alt=""
                      src="/iconwrapper-17@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.componentstabsLeft1}>
                <div className={styles.verticalNavItem5}>
                  <div className={styles.wrapper6}>
                    <div className={styles.icon5}>
                      <div className={styles.widthChangeSizeHere16}>
                        <div className={styles.ignore68} />
                        <div className={styles.ignore69} />
                      </div>
                      <div className={styles.iconWrapperH16}>
                        <div className={styles.heightChangeSizeHere16}>
                          <div className={styles.ignore70} />
                          <div className={styles.ignore71} />
                        </div>
                        <img
                          className={styles.iconWrapper22}
                          alt=""
                          src="/iconwrapper-26@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text6}>
                      <div className={styles.text7}>Help</div>
                    </div>
                  </div>
                  <div className={styles.arrow5}>
                    <div className={styles.widthChangeSizeHere17}>
                      <div className={styles.ignore72} />
                      <div className={styles.ignore73} />
                    </div>
                    <div className={styles.iconWrapperH17}>
                      <div className={styles.heightChangeSizeHere17}>
                        <div className={styles.ignore74} />
                        <div className={styles.ignore75} />
                      </div>
                      <img
                        className={styles.iconWrapper23}
                        alt=""
                        src="/iconwrapper-19@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalNavItem6}>
                  <div className={styles.wrapper7}>
                    <div className={styles.icon6}>
                      <div className={styles.widthChangeSizeHere18}>
                        <div className={styles.ignore76} />
                        <div className={styles.ignore77} />
                      </div>
                      <div className={styles.iconWrapperH18}>
                        <div className={styles.heightChangeSizeHere18}>
                          <div className={styles.ignore78} />
                          <div className={styles.ignore79} />
                        </div>
                        <img
                          className={styles.iconWrapper24}
                          alt=""
                          src="/iconwrapper-28@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text8}>
                      <div className={styles.text9}>Settings</div>
                    </div>
                  </div>
                  <div className={styles.arrow6}>
                    <div className={styles.widthChangeSizeHere19}>
                      <div className={styles.ignore80} />
                      <div className={styles.ignore81} />
                    </div>
                    <div className={styles.iconWrapperH19}>
                      <div className={styles.heightChangeSizeHere19}>
                        <div className={styles.ignore82} />
                        <div className={styles.ignore83} />
                      </div>
                      <img
                        className={styles.iconWrapper25}
                        alt=""
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.verticalNavItem7}>
                  <div className={styles.wrapper8}>
                    <div className={styles.icon7}>
                      <div className={styles.widthChangeSizeHere20}>
                        <div className={styles.ignore84} />
                        <div className={styles.ignore85} />
                      </div>
                      <div className={styles.iconWrapperH20}>
                        <div className={styles.heightChangeSizeHere20}>
                          <div className={styles.ignore86} />
                          <div className={styles.ignore87} />
                        </div>
                        <img
                          className={styles.iconWrapper26}
                          alt=""
                          src="/iconwrapper-24@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text10}>
                      <div className={styles.text11}>Banking</div>
                    </div>
                  </div>
                  <div className={styles.arrow7}>
                    <div className={styles.widthChangeSizeHere21}>
                      <div className={styles.ignore88} />
                      <div className={styles.ignore89} />
                    </div>
                    <div className={styles.iconWrapperH21}>
                      <div className={styles.heightChangeSizeHere21}>
                        <div className={styles.ignore90} />
                        <div className={styles.ignore91} />
                      </div>
                      <img
                        className={styles.iconWrapper27}
                        alt=""
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <PageFooter />
      </main>
    </div>
  );
};

export default Dashboard;
