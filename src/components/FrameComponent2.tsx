import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.recentActivityWrapper}>
        <b className={styles.recentActivity}>Recent Activity</b>
      </div>
      <FrameComponent1
        restocked="Restocked "
        prop="6"
        products=" Products"
        avatarPlaceholderChangeIm="/avatarplaceholder--change-image-here-1@2x.png"
        aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
        text="Macbook Pro"
        mAgo="1 m ago"
      />
      <FrameComponent1
        restocked="Sold "
        prop="2"
        products=" Products"
        avatarPlaceholderChangeIm="/avatarplaceholder--change-image-here-2@2x.png"
        aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
        text="iPhone 14 pro"
        mAgo="12 m ago"
        propWidth="204.8px"
        propAlignSelf="unset"
        propWidth1="105.8px"
        propPadding="var(--padding-xs-3) 0px var(--padding-xs-9)"
        propAlignSelf1="stretch"
        propPadding1="unset"
        propAlignSelf2="stretch"
        propFlex="1"
      />
      <FrameComponent1
        restocked="Sold "
        prop="1"
        products=" Product"
        avatarPlaceholderChangeIm="/avatarplaceholder--change-image-here-3@2x.png"
        aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-3@2x.png"
        text="Zoom75"
        mAgo="23 m ago"
        propWidth="171.2px"
        propAlignSelf="unset"
        propWidth1="unset"
        propPadding="var(--padding-xs-2) 0px var(--padding-xs)"
        propAlignSelf1="unset"
        propPadding1="unset"
        propAlignSelf2="unset"
        propFlex="unset"
      />
      <FrameComponent1
        restocked="Restocked "
        prop="12"
        products=" Product"
        avatarPlaceholderChangeIm="/avatarplaceholder--change-image-here-31@2x.png"
        aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
        text="Zoom75"
        mAgo="42 m ago"
        propWidth="171.2px"
        propAlignSelf="unset"
        propWidth1="unset"
        propPadding="var(--padding-xs-3) 0px var(--padding-xs-9)"
        propAlignSelf1="unset"
        propPadding1="unset"
        propAlignSelf2="unset"
        propFlex="unset"
      />
      <FrameComponent1
        restocked="Sold "
        prop="3"
        products=" Products"
        avatarPlaceholderChangeIm="/avatarplaceholder--change-image-here-41@2x.png"
        aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
        text="Samsung Odyssey"
        mAgo="2 h ago"
        propWidth="unset"
        propAlignSelf="stretch"
        propWidth1="unset"
        propPadding="var(--padding-xs-3) 0px var(--padding-xs-9)"
        propAlignSelf1="unset"
        propPadding1="unset"
        propAlignSelf2="unset"
        propFlex="unset"
      />
    </div>
  );
};

export default FrameComponent;
