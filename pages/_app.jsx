import "antd/dist/antd.css";
import "swiper/css/bundle";
import "../styles/global.css";
import MainNavigation from "../components/navigation/mainNavigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNavigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
