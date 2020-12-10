import Carousel from 'components/Carousel';
import Header from 'components/Header';
import Head from 'components/Head';

export default function Home() {
  return (
    <div className="container">
      <Head page='Главная' />
      <Header />
      <Carousel />
    </div>
  )
}
