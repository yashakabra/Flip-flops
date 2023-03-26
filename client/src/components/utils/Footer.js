import '../styles/Footer.css'

const Footer=()=> {
    return (
      <>
      <footer  bgColor='light' className='text-center text-lg-left' style={{zIndex:"1212"}}>
        <div className='text-light text-center p-3' style={{ backgroundColor: 'black' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light' style={{textDecoration:"none"}} href='https://mdbootstrap.com/'>
            HelpingHand.com
          </a>
        </div>
      </footer>
      </>
    );
  }
  
  
  export default Footer;
