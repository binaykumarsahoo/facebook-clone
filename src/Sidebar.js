import React from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/117772732_1379007572295474_1078602167872356893_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=1tqi5WWLyU8AX99y_mM&_nc_ht=scontent-bom1-2.xx&oh=a8db67ddc1b7bf2232bf40a40e258124&oe=5F719F1A"
        title="Binay Kumar Sahoo"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
    </div>
  );
}

export default Sidebar;
