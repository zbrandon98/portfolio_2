import Classes from './Projects.module.css'
import Image from 'next/image'

const pOneImageStyling = { borderRadius: '.3rem' }
const pTwoImageStyling = { borderRadius: '.3rem' }
const pThreeImageStyling = { borderRadius: '.3rem' }
const pFourImageStyling = { borderRadius: '.3rem' }

const scrollToTop = () => {
  const element = document.querySelector('#projectsRowOne');
  if (element) {
    console.log('made it to if');
    element.scrollIntoView({ behavior: 'smooth' });
  }
};



export default function Projects() {

  return (
    <div className={Classes.projectsModule}>
    <div id='projectsRowOne' className={Classes.border}>
      <div id='pOneContainer' className={Classes.pOneContainer} >
        <div style={{position: "relative", width: "100%", paddingBottom: "100%"}}>
          <a href='https://gaming-center.vercel.app/' target="_blank">
            <Image src="/pOneFront.webp" style={pOneImageStyling} alt='text' objectFit='contain' layout='fill'/>
          </a>
        </div>
          <section className={Classes.infoSection}>
            <div className={Classes.title}>GAMING HUB</div>
            <div className={Classes.subtitle}>Video Game Discover App</div>
          </section>
      </div>
      <div id='pTwoContainer' className={Classes.pTwoContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "57%"}}>
          <a href='https://order.thepantry.ucdavis.edu/' target='_blank'>
          <Image src="/pTwoFront.webp" style={pTwoImageStyling} alt='text' objectFit='contain' layout='fill'/>
          </a>
        </div>          
          <section className={Classes.infoSection}>
            <div className={Classes.title}>THE PANTRY</div>
            <div className={Classes.subtitle}>UCD Food Ordering Service</div>
          </section>
      </div>
    </div >


    <div id='projectsRowTwo' className={Classes.borderBottom}>
      <div id='pThreeContainer' className={Classes.pThreeContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "50%"}}>
          <a href='https://github.com/matloff/dsld' target='_blank'>
            <Image src="/pThreeFront.webp" style={pThreeImageStyling} alt='text' objectFit='fit' layout='fill' />
          </a>
        </div>            
        <section className={Classes.infoSection}>
            <div className={Classes.title}>DATA SCIENCE LOOKS AT DISCRIMINATION</div>
            <div className={Classes.subtitle}>Detection and Mitigation</div>
          </section>
      </div>
      <div id='pFourContainer' className={Classes.pFourContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "160%"}}>
          <a href='https://ecocar-demo.streamlit.app/' target='_blank'>
            <Image src="/pFourFront.webp" style={pFourImageStyling} alt='text' objectFit='cover' layout='fill' />
          </a>
        </div>  
        <section className={Classes.infoSection}>
          <div className={Classes.title}>ECOCAR AUTOMATION</div>
          <div className={Classes.subtitle}>CI/CD Pipeline</div>
        </section>
      </div>
    </div>

    <div className={Classes.footer}>
    <a href={linkToTop} className={Classes.footerButton} onClick={(e) => {e.preventDefault(); scrollToTop();}}><div >BACK TO TOP</div></a>
        <div className={Classes.footerInfo}>2024 Brandon David Zarate Estrada</div>
    </div>
    </div>
  )
}


// pThreeFront: Gary Waters/Ikon Images/Getty Images
/*




*/