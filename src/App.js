import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Sidebaroptions from "./Components/Sidebaroptions";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function App() {
  return (
    <>
      {/* Twitter Fullstack app clone creation */}
      {/* Sideabar */}
      <Sidebar />
      <Sidebaroptions name="Home" Icon={HomeIcon} />
      <Sidebaroptions name="Explore" Icon={ExploreIcon} />
      <Sidebaroptions name="Notifications" Icon={NotificationsIcon} />
      <Sidebaroptions name="Messages" Icon={LocalPostOfficeIcon} />
      <Sidebaroptions name="Grok" Icon={TextSnippetIcon} />
      <Sidebaroptions name="Profile" Icon={PersonIcon} />
      <Sidebaroptions name="More.." Icon={MoreHorizIcon} />
      {/* Tweets */}

      {/* Widgets */}
    </>
  );
}

export default App;
