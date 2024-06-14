import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import ItemDetails from "../components/ItemDetails";
import Pagination from "../components/Pagination";
import FooterWrapper from "../components/FooterWrapper";
import styles from "./Inventory.module.css";

const Inventory: FunctionComponent = () => {
  return (
    <div className={styles.inventory}>
      <div className={styles.main}>
        <div className={styles.quickActions}>
          <div className={styles.quickActionsParent}>
            <b className={styles.quickActions1}>Quick Actions</b>
            <div className={styles.actionIconWrapper}>
              <div className={styles.wrapperParent}>
                <div className={styles.wrapper}>
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
                        loading="lazy"
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
                <div className={styles.wrapper1}>
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
              <div className={styles.wrapperContainer}>
                <div className={styles.wrapper2} />
              </div>
              <div className={styles.wrapperFrame}>
                <div className={styles.wrapper3}>
                  <div className={styles.icon2}>
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
                        src="/iconwrapper-21@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <div className={styles.text5}>Export</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recentActivity}>
          <FrameComponent />
        </div>
      </div>
      <main className={styles.frameParent}>
        <section className={styles.sideNavParent}>
          <div className={styles.sideNav}>
            <div className={styles.wareviewWrapper}>
              <div className={styles.wareview}>
                <span>Ware</span>
                <span className={styles.view}>View</span>
              </div>
            </div>
            <div className={styles.navItemWrapper}>
              <div className={styles.navItems}>
                <div className={styles.verticalNavItem}>
                  <div className={styles.wrapper4}>
                    <div className={styles.icon3}>
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
                          src="/iconwrapper-16@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text6}>
                      <b className={styles.text7}>GENERAL</b>
                    </div>
                  </div>
                  <div className={styles.arrow}>
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
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.componentstabsLeft}>
                  <div className={styles.verticalNavItem1}>
                    <div className={styles.wrapper5}>
                      <div className={styles.icon4}>
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
                            src="/iconwrapper-51@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text8}>
                        <div className={styles.text9}>Dashboard</div>
                      </div>
                    </div>
                    <div className={styles.arrow1}>
                      <div className={styles.widthChangeSizeHere6}>
                        <div className={styles.ignore24} />
                        <div className={styles.ignore25} />
                      </div>
                      <div className={styles.iconWrapperH6}>
                        <div className={styles.heightChangeSizeHere6}>
                          <div className={styles.ignore26} />
                          <div className={styles.ignore27} />
                        </div>
                        <img
                          className={styles.iconWrapper6}
                          alt=""
                          src="/iconwrapper-17@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalNavItem2}>
                    <div className={styles.wrapper6}>
                      <div className={styles.icon5}>
                        <div className={styles.widthChangeSizeHere7}>
                          <div className={styles.ignore28} />
                          <div className={styles.ignore29} />
                        </div>
                        <div className={styles.iconWrapperH7}>
                          <div className={styles.heightChangeSizeHere7}>
                            <div className={styles.ignore30} />
                            <div className={styles.ignore31} />
                          </div>
                          <img
                            className={styles.iconWrapper7}
                            alt=""
                            src="/iconwrapper-71@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text10}>
                        <b className={styles.text11}>Inventory</b>
                      </div>
                    </div>
                    <div className={styles.arrow2}>
                      <div className={styles.widthChangeSizeHere8}>
                        <div className={styles.ignore32} />
                        <div className={styles.ignore33} />
                      </div>
                      <div className={styles.iconWrapperH8}>
                        <div className={styles.heightChangeSizeHere8}>
                          <div className={styles.ignore34} />
                          <div className={styles.ignore35} />
                        </div>
                        <img
                          className={styles.iconWrapper8}
                          alt=""
                          src="/iconwrapper-19@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalNavItem3}>
                    <div className={styles.wrapper7}>
                      <div className={styles.icon6}>
                        <div className={styles.widthChangeSizeHere9}>
                          <div className={styles.ignore36} />
                          <div className={styles.ignore37} />
                        </div>
                        <div className={styles.iconWrapperH9}>
                          <div className={styles.heightChangeSizeHere9}>
                            <div className={styles.ignore38} />
                            <div className={styles.ignore39} />
                          </div>
                          <img
                            className={styles.iconWrapper9}
                            alt=""
                            src="/iconwrapper-22@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text12}>
                        <div className={styles.text13}>Sales Orders</div>
                      </div>
                    </div>
                    <div className={styles.arrow3}>
                      <div className={styles.widthChangeSizeHere10}>
                        <div className={styles.ignore40} />
                        <div className={styles.ignore41} />
                      </div>
                      <div className={styles.iconWrapperH10}>
                        <div className={styles.heightChangeSizeHere10}>
                          <div className={styles.ignore42} />
                          <div className={styles.ignore43} />
                        </div>
                        <img
                          className={styles.iconWrapper10}
                          alt=""
                          src="/iconwrapper-17@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.navItems1}>
                <div className={styles.verticalNavItem4}>
                  <div className={styles.wrapper8}>
                    <div className={styles.icon7}>
                      <div className={styles.widthChangeSizeHere11}>
                        <div className={styles.ignore44} />
                        <div className={styles.ignore45} />
                      </div>
                      <div className={styles.iconWrapperH11}>
                        <div className={styles.heightChangeSizeHere11}>
                          <div className={styles.ignore46} />
                          <div className={styles.ignore47} />
                        </div>
                        <img
                          className={styles.iconWrapper11}
                          alt=""
                          src="/iconwrapper-24@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text14}>
                      <b className={styles.text15}>SUPPORT</b>
                    </div>
                  </div>
                  <div className={styles.arrow4}>
                    <div className={styles.widthChangeSizeHere12}>
                      <div className={styles.ignore48} />
                      <div className={styles.ignore49} />
                    </div>
                    <div className={styles.iconWrapperH12}>
                      <div className={styles.heightChangeSizeHere12}>
                        <div className={styles.ignore50} />
                        <div className={styles.ignore51} />
                      </div>
                      <img
                        className={styles.iconWrapper12}
                        alt=""
                        src="/iconwrapper-17@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.componentstabsLeft1}>
                  <div className={styles.verticalNavItem5}>
                    <div className={styles.wrapper9}>
                      <div className={styles.icon8}>
                        <div className={styles.widthChangeSizeHere13}>
                          <div className={styles.ignore52} />
                          <div className={styles.ignore53} />
                        </div>
                        <div className={styles.iconWrapperH13}>
                          <div className={styles.heightChangeSizeHere13}>
                            <div className={styles.ignore54} />
                            <div className={styles.ignore55} />
                          </div>
                          <img
                            className={styles.iconWrapper13}
                            alt=""
                            src="/iconwrapper-26@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text16}>
                        <div className={styles.text17}>Help</div>
                      </div>
                    </div>
                    <div className={styles.arrow5}>
                      <div className={styles.widthChangeSizeHere14}>
                        <div className={styles.ignore56} />
                        <div className={styles.ignore57} />
                      </div>
                      <div className={styles.iconWrapperH14}>
                        <div className={styles.heightChangeSizeHere14}>
                          <div className={styles.ignore58} />
                          <div className={styles.ignore59} />
                        </div>
                        <img
                          className={styles.iconWrapper14}
                          alt=""
                          src="/iconwrapper-19@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalNavItem6}>
                    <div className={styles.wrapper10}>
                      <div className={styles.icon9}>
                        <div className={styles.widthChangeSizeHere15}>
                          <div className={styles.ignore60} />
                          <div className={styles.ignore61} />
                        </div>
                        <div className={styles.iconWrapperH15}>
                          <div className={styles.heightChangeSizeHere15}>
                            <div className={styles.ignore62} />
                            <div className={styles.ignore63} />
                          </div>
                          <img
                            className={styles.iconWrapper15}
                            alt=""
                            src="/iconwrapper-28@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text18}>
                        <div className={styles.text19}>Settings</div>
                      </div>
                    </div>
                    <div className={styles.arrow6}>
                      <div className={styles.widthChangeSizeHere16}>
                        <div className={styles.ignore64} />
                        <div className={styles.ignore65} />
                      </div>
                      <div className={styles.iconWrapperH16}>
                        <div className={styles.heightChangeSizeHere16}>
                          <div className={styles.ignore66} />
                          <div className={styles.ignore67} />
                        </div>
                        <img
                          className={styles.iconWrapper16}
                          alt=""
                          src="/iconwrapper-17@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalNavItem7}>
                    <div className={styles.wrapper11}>
                      <div className={styles.icon10}>
                        <div className={styles.widthChangeSizeHere17}>
                          <div className={styles.ignore68} />
                          <div className={styles.ignore69} />
                        </div>
                        <div className={styles.iconWrapperH17}>
                          <div className={styles.heightChangeSizeHere17}>
                            <div className={styles.ignore70} />
                            <div className={styles.ignore71} />
                          </div>
                          <img
                            className={styles.iconWrapper17}
                            alt=""
                            src="/iconwrapper-24@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.text20}>
                        <div className={styles.text21}>Banking</div>
                      </div>
                    </div>
                    <div className={styles.arrow7}>
                      <div className={styles.widthChangeSizeHere18}>
                        <div className={styles.ignore72} />
                        <div className={styles.ignore73} />
                      </div>
                      <div className={styles.iconWrapperH18}>
                        <div className={styles.heightChangeSizeHere18}>
                          <div className={styles.ignore74} />
                          <div className={styles.ignore75} />
                        </div>
                        <img
                          className={styles.iconWrapper18}
                          alt=""
                          src="/iconwrapper-17@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.headingParent}>
              <nav className={styles.heading}>
                <div className={styles.inventoryWrapper}>
                  <b className={styles.inventory1}>Inventory</b>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.inputWrapperWrapper}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputBase}>
                        <div className={styles.input}>
                          <div className={styles.inputPrefix}>
                            <div className={styles.iconWrapper19}>
                              <div className={styles.widthChangeSizeHere19}>
                                <div className={styles.ignore76} />
                                <div className={styles.ignore77} />
                              </div>
                              <div className={styles.iconWrapperH19}>
                                <div className={styles.heightChangeSizeHere19}>
                                  <div className={styles.ignore78} />
                                  <div className={styles.ignore79} />
                                </div>
                                <img
                                  className={styles.iconWrapper20}
                                  alt=""
                                  src="/iconwrapper-191@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.input1}>{`Search `}</div>
                        </div>
                        <div className={styles.spacer}>
                          <div className={styles.ignore80} />
                          <div className={styles.ignore81} />
                        </div>
                        <div className={styles.inputSuffix}>
                          <div className={styles.iconWrapper21}>
                            <div className={styles.widthChangeSizeHere20}>
                              <div className={styles.ignore82} />
                              <div className={styles.ignore83} />
                            </div>
                            <div className={styles.iconWrapperH20}>
                              <div className={styles.heightChangeSizeHere20}>
                                <div className={styles.ignore84} />
                                <div className={styles.ignore85} />
                              </div>
                              <img
                                className={styles.iconWrapper22}
                                alt=""
                                src="/iconwrapper-201@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.avatar}>
                    <div className={styles.wrapper12}>
                      <div className={styles.iconWrapper23}>
                        <div className={styles.widthChangeSizeHere21}>
                          <div className={styles.ignore86} />
                          <div className={styles.ignore87} />
                        </div>
                        <div className={styles.iconWrapperH21}>
                          <div className={styles.heightChangeSizeHere21}>
                            <div className={styles.ignore88} />
                            <div className={styles.ignore89} />
                          </div>
                          <img
                            className={styles.iconWrapper24}
                            alt=""
                            src="/iconwrapper-211@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.icon11}>
                    <div className={styles.widthChangeSizeHere22}>
                      <div className={styles.ignore90} />
                      <div className={styles.ignore91} />
                    </div>
                    <div className={styles.iconWrapperH22}>
                      <div className={styles.heightChangeSizeHere22}>
                        <div className={styles.ignore92} />
                        <div className={styles.ignore93} />
                      </div>
                      <img
                        className={styles.iconWrapper25}
                        alt=""
                        src="/iconwrapper-221@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.text22}>
                    <div className={styles.text23}>Add New Product</div>
                  </div>
                  <div className={styles.icon21}>
                    <div className={styles.widthChangeSizeHere23}>
                      <div className={styles.ignore94} />
                      <div className={styles.ignore95} />
                    </div>
                    <div className={styles.iconWrapperH23}>
                      <div className={styles.heightChangeSizeHere23}>
                        <div className={styles.ignore96} />
                        <div className={styles.ignore97} />
                      </div>
                      <img
                        className={styles.iconWrapper26}
                        alt=""
                        src="/iconwrapper-221@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className={styles.adminParent}>
                <div className={styles.admin}>
                  <div className={styles.detailsWrapper}>
                    <div className={styles.detailsContainer}>
                      <div className={styles.detailsContent}>
                        <div className={styles.detailsContentInner}>
                          <div className={styles.inputBaseParent}>
                            <div className={styles.inputBase1}>
                              <div className={styles.input2}>
                                <div className={styles.inputPrefix1}>
                                  <div className={styles.iconWrapper27}>
                                    <div
                                      className={styles.widthChangeSizeHere24}
                                    >
                                      <div className={styles.ignore98} />
                                      <div className={styles.ignore99} />
                                    </div>
                                    <div className={styles.iconWrapperH24}>
                                      <div
                                        className={
                                          styles.heightChangeSizeHere24
                                        }
                                      >
                                        <div className={styles.ignore100} />
                                        <div className={styles.ignore101} />
                                      </div>
                                      <img
                                        className={styles.iconWrapper28}
                                        alt=""
                                        src="/iconwrapper@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.input3}>{`Search `}</div>
                              </div>
                              <div className={styles.spacer1}>
                                <div className={styles.ignore102} />
                                <div className={styles.ignore103} />
                              </div>
                              <div className={styles.inputSuffix1}>
                                <div className={styles.iconWrapper29}>
                                  <div className={styles.widthChangeSizeHere25}>
                                    <div className={styles.ignore104} />
                                    <div className={styles.ignore105} />
                                  </div>
                                  <div className={styles.iconWrapperH25}>
                                    <div
                                      className={styles.heightChangeSizeHere25}
                                    >
                                      <div className={styles.ignore106} />
                                      <div className={styles.ignore107} />
                                    </div>
                                    <img
                                      className={styles.iconWrapper30}
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
                        <div className={styles.imageContainer}>
                          <div className={styles.avatar1}>
                            <img
                              className={styles.avatarPlaceholderChangeI}
                              alt=""
                              src="/avatarplaceholder--change-image-here@2x.png"
                            />
                            <img
                              className={styles.aspectRatioKeeperAddition}
                              alt=""
                              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.nameRole}>
                        <b className={styles.bryanDoe}>Bryan Doe</b>
                        <b className={styles.admin1}>Admin</b>
                      </div>
                    </div>
                    <div className={styles.dropdown}>
                      <div className={styles.iconWrapper31}>
                        <div className={styles.widthChangeSizeHere26}>
                          <div className={styles.ignore108} />
                          <div className={styles.ignore109} />
                        </div>
                        <div className={styles.iconWrapperH26}>
                          <div className={styles.heightChangeSizeHere26}>
                            <div className={styles.ignore110} />
                            <div className={styles.ignore111} />
                          </div>
                          <img
                            className={styles.iconWrapper32}
                            alt=""
                            src="/iconwrapper-5@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productListsWrapper}>
                  <div className={styles.productLists}>
                    <div className={styles.listNameContainer}>
                      <b className={styles.productList}>Product List</b>
                    </div>
                    <div className={styles.pagination}>
                      <div className={styles.buttonParent}>
                        <div className={styles.button1}>
                          <img
                            className={styles.arrowForwardIosIcon}
                            alt=""
                            src="/arrow-forward-ios.svg"
                          />
                          <div className={styles.buttonChild} />
                          <div className={styles.vectorParent}>
                            <img
                              className={styles.vectorIcon}
                              alt=""
                              src="/vector.svg"
                            />
                            <div className={styles.prev}>Prev</div>
                          </div>
                        </div>
                        <div className={styles.frameContainer}>
                          <div className={styles.container}>
                            <div className={styles.div}>1</div>
                          </div>
                          <div className={styles.frame}>
                            <div className={styles.div1}>2</div>
                          </div>
                          <div className={styles.frameDiv}>
                            <div className={styles.div2}>...</div>
                          </div>
                          <div className={styles.wrapper13}>
                            <div className={styles.div3}>11</div>
                          </div>
                        </div>
                        <div className={styles.button2}>
                          <img
                            className={styles.arrowForwardIosIcon1}
                            alt=""
                            src="/arrow-forward-ios.svg"
                          />
                          <div className={styles.buttonItem} />
                          <div className={styles.nextParent}>
                            <div className={styles.next}>Next</div>
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.listContent}>
                      <div className={styles.listHeader}>
                        <div className={styles.checkboxInput}>
                          <div className={styles.bg} />
                        </div>
                      </div>
                      <div className={styles.headerColumns}>
                        <div className={styles.columnNames}>
                          <b className={styles.name}>Name</b>
                        </div>
                        <div className={styles.columnNames1}>
                          <b className={styles.code}>Code</b>
                        </div>
                        <div className={styles.columnNames2}>
                          <b className={styles.type}>Type</b>
                        </div>
                        <div className={styles.columnNames3}>
                          <b className={styles.price}>Price</b>
                        </div>
                        <div className={styles.columnNames4}>
                          <b className={styles.quantity}>Quantity</b>
                        </div>
                        <div className={styles.columnNames5}>
                          <b className={styles.image}>Image</b>
                        </div>
                        <div className={styles.listItems}>
                          <ItemDetails
                            macbookPro="Macbook Pro"
                            codePlaceholder="#0001"
                            laptop="Laptop"
                            pricePlaceholder="$ 1,241"
                            quantityPlaceholder="44"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58@2x.png"
                          />
                          <ItemDetails
                            macbookPro="iPhone 14 pro "
                            codePlaceholder="#0002"
                            laptop="Phone"
                            pricePlaceholder="$ 1,499"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-1@2x.png"
                            propFlex="0.9128"
                            propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-3xs) var(--padding-3xs)"
                            propWidth="unset"
                            propWidth1="unset"
                            propDisplay="unset"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="1"
                            propPadding2="10px 0px"
                          />
                          <ItemDetails
                            macbookPro="Zoom75"
                            codePlaceholder="#0003"
                            laptop="Keyboard"
                            pricePlaceholder="$ 215"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-2@2x.png"
                            propFlex="1"
                            propPadding="10px 0px"
                            propWidth="unset"
                            propWidth1="unset"
                            propDisplay="unset"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="1"
                            propPadding2="10px 0px"
                          />
                          <ItemDetails
                            macbookPro="Airpods Pro"
                            codePlaceholder="#0004"
                            laptop="Earphones"
                            pricePlaceholder="$ 249"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-3@2x.png"
                            propFlex="0.7928"
                            propPadding="var(--padding-3xs) var(--padding-10xl) var(--padding-3xs) var(--padding-3xs)"
                            propWidth="unset"
                            propWidth1="unset"
                            propDisplay="unset"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="0.7274"
                            propPadding2="var(--padding-3xs) var(--padding-16xl) var(--padding-3xs) var(--padding-3xs)"
                          />
                          <ItemDetails
                            macbookPro="Samsung Galaxy Fold"
                            codePlaceholder="#0005"
                            laptop="Phone"
                            pricePlaceholder="$ 1,199"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-4@2x.png"
                            propFlex="unset"
                            propPadding="var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs)"
                            propWidth="111.7px"
                            propWidth1="131px"
                            propDisplay="inline-block"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="1"
                            propPadding2="10px 0px"
                          />
                          <ItemDetails
                            macbookPro="Samsung Odyssey"
                            codePlaceholder="#0006"
                            laptop="Displays"
                            pricePlaceholder="$ 500"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-5@2x.png"
                            propFlex="unset"
                            propPadding="var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs)"
                            propWidth="111.7px"
                            propWidth1="112px"
                            propDisplay="inline-block"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="1"
                            propPadding2="10px 0px"
                          />
                          <ItemDetails
                            macbookPro="Logitech Superlight"
                            codePlaceholder="#0006"
                            laptop="Displays"
                            pricePlaceholder="$ 500"
                            quantityPlaceholder="23"
                            unsplashtpuAo8gVs58="/unsplashtpuao8gvs58-6@2x.png"
                            propFlex="unset"
                            propPadding="var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs)"
                            propWidth="111.7px"
                            propWidth1="121px"
                            propDisplay="inline-block"
                            propFlex1="0.4547"
                            propPadding1="var(--padding-3xs) var(--padding-16xl)"
                            propFlex2="1"
                            propPadding2="10px 0px"
                          />
                        </div>
                        <div className={styles.checkboxInput1}>
                          <div className={styles.bg1} />
                        </div>
                        <div className={styles.checkboxInput2}>
                          <div className={styles.bg2} />
                        </div>
                        <div className={styles.checkboxInput3}>
                          <div className={styles.bg3} />
                        </div>
                        <div className={styles.checkboxInput4}>
                          <div className={styles.bg4} />
                        </div>
                        <div className={styles.checkboxInput5}>
                          <div className={styles.bg5} />
                        </div>
                        <div className={styles.checkboxInput6}>
                          <div className={styles.bg6} />
                        </div>
                        <div className={styles.checkboxInput7}>
                          <div className={styles.bg7} />
                        </div>
                        <div className={styles.imagePlaceholder} />
                      </div>
                    </div>
                    <div className={styles.listFooter}>{` `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pagination />
        <FooterWrapper />
      </main>
      <img
        className={styles.image1Icon}
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default Inventory;
