import Carousel from 'components/Carousel';
import Head from 'components/Head';

export default function Home() {
  return (
    <div className="container">
      <Head page='Главная' />
      <Carousel />
    </div>
  )
}
