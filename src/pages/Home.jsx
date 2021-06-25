import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import ComicItem from '../components/ComicItem/ComicItem';

export default function Home() {
  return (
    <>
      <Header />
      <div className="Grid-Comic">
				<ComicItem />
				<ComicItem />
				<ComicItem />
				<ComicItem />
				<ComicItem />
      </div>
      <NavBar />
    </>
  );
}
