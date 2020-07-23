const Main = () => {
  return (
    <main className='main flex-col'>
      <div className='main__search'>search</div>
      <section className='main__content flex-col'>
        <article className='article article--featured'>
          featured stories
        </article>
        <article className='article article--photo-feed'>photo feed</article>
      </section>
    </main>
  );
};

export default Main;
