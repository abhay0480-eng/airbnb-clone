import Header from './components/Header'
import Card from './components/Card';
import Body from './components/Body'
import data from './data'


function App() {

  const dataItems = data.map(d=>{
    return(
      <Card 
      key = {d.id}
      opensport={d.openSpots} 
      image = {d.coverImg}  
      rating = {d.stats.rating} 
      reviewCount = {d.stats.reviewCount}  
      country={d.location}  
      title = {d.title}  
      price={d.price}/>
    )
  })
  return (
    <section>
      
    <Header/>
    <Body/>
    <div className='flex mb-[50px]'>
   {dataItems}
    </div>  
    </section>
  

  );
}

export default App;
