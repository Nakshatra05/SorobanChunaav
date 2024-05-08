import 'bootstrap/dist/css/bootstrap.min.css';
import  "/styles/propstyle.css";

function MyApp({ Component, pageProps }) {

  return (
    <div className='back'>
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp

