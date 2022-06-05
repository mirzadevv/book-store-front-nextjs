import "antd/dist/antd.css";
import "swiper/css/bundle";
import "../styles/global.css";
import MainNavigation from "../components/navigation/mainNavigation";
import { AuthProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <MainNavigation />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
