import Header from 'components/app/header';
import Footer from 'components/app/footer';
import Main from 'components/app/main';

export default function Shell() {
  return <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>;
}
