import Explore from '../components/explore';
import Main from '../components/main';
import SideNav from '../components/sideNav';

export default function Home() {
  return (
    <div className='wrapper'>
      <SideNav />
      <Explore />
      <Main />
    </div>
  );
}
