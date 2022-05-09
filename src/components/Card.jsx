
import star from '../images/star.svg'
// import image1 from '../images/image1.png'


function Card(props){
    return(
        <section className='px-[20px]'>
        
        <div>
          <div>
            <img src= {require(`../images/${props.image}`)} alt='sdfs'/>
            <div className='flex mb-[4px] mt-[4px]'>
              <img src={star} alt='starimg' className='pr-[5px]'/>
              <p className='pr-[5px]'>{props.rating}</p>
              <p className='pr-[5px]'>{props.reviewCount}</p>
              <p className='pr-[5px]'>.</p>
              <p className='pr-[5px]'>{props.country}</p>
            </div>
            <p className='mb-[4px]'>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
          </div>
        </div>
      </section>
    )
}

export default Card