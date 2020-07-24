import FavoriteProfiles from './favoriteProfiles';

export default () => (
  <div className='flow'>
    <section className='favorite'>
      <h3 className='title-text'>favorite tags</h3>
      <p className='text-faint'>
        Instadaily, photooftheday, photography, nude, fitness, nature,
        landscape, ocean, mountains, wind, cold, snow
      </p>
    </section>
    <section className='activity'>
      <h3 className='title-text'>activity</h3>
      <p className='text-faint'>Professional Photographer</p>
    </section>
    <section className='location'>
      <h3 className='title-text'>location</h3>
      <p className='text-faint'>Paris, France</p>
    </section>
    <FavoriteProfiles />
  </div>
);
