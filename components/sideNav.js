import Footer from './footer';
import Logo from './logo';
import Nav from './nav';
import ProfileCard from './profileCard';
import Stats from './stats';

const SideNav = () => {
  return (
    <section className='section section--sideNav container'>
      <Logo />
      <ProfileCard />
      <Stats />
      <Nav />
      <Footer />
    </section>
  );
};

export default SideNav;
