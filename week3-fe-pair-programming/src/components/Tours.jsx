import { tours } from '../data' 
import Title from './Title'
import Tour from './Tour'

function Tours() {
  return (
    <section className='tours'>
      <Title title='our tours' />
      <div className='tours-center'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
