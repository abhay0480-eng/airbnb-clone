import logo from './images/Vector.svg'
import image1 from './images/image1.png'
import star from './images/star.svg'
function App() {
  return (
    <section>
      <header className='py-[20px] px-[20px] shadow mb-[20px]'>
        <img src={logo} alt="logo"/>
      </header>

      <section className='px-[20px]'>
        <h1 className='font-semibold text-[36px]'>Online Experiences</h1>
        <p className='font-light w-[300px] text-[16px] mb-[50px]'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        <div>
          <div>
            <img src={image1} alt=''/>
            <div className='flex mb-[4px] mt-[4px]'>
              <img src={star} alt='starimg' className='pr-[5px]'/>
              <p className='pr-[5px]'>5.0</p>
              <p className='pr-[5px]'>(6)</p>
              <p className='pr-[5px]'>.</p>
              <p className='pr-[5px]'>USA</p>
            </div>
            <p className='mb-[4px]'>Life lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
          </div>
        </div>
      </section>
    </section>
  

  );
}

export default App;
