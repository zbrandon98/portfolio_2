import Classes from './Projects.module.css'
import Image from 'next/image'

const pOneImageStyling = { borderRadius: '.3rem' }
const pTwoImageStyling = { borderRadius: '.3rem' }
const pThreeImageStyling = { borderRadius: '.3rem' }
const pFourImageStyling = { borderRadius: '.3rem' }

export default function Projects() {
  return (
    <>
    <div id='projectsRowOne' className={Classes.border}>
      <div id='pOneContainer' className={Classes.pOneContainer} >
        <div style={{position: "relative", width: "100%", paddingBottom: "100%"}}>
          <Image src="/pOneFront.webp" style={pOneImageStyling} alt='text' objectFit='contain' layout='fill'/>
        </div>
          <section className={Classes.infoSection}>
            <div className={Classes.title}>GAMING HUB</div>
            <div className={Classes.subtitle}>Video Game Discover App</div>
          </section>
      </div>
      <div id='pTwoContainer' className={Classes.pTwoContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "57%"}}>
          <Image src="/pTwoFront.webp" style={pTwoImageStyling} alt='text' objectFit='contain' layout='fill'/>
        </div>          
          <section className={Classes.infoSection}>
            <div className={Classes.title}>THE PANTRY</div>
            <div className={Classes.subtitle}>UCD Food Ordering Service</div>
          </section>
      </div>
    </div >


    <div id='projectsRowTwo' className={Classes.borderTwo}>
      <div id='pThreeContainer' className={Classes.pThreeContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "50%"}}>
          <Image src="/pThreeFront.webp" style={pThreeImageStyling} alt='text' objectFit='fit' layout='fill' />
        </div>            
        <section className={Classes.infoSection}>
            <div className={Classes.title}>DATA SCIENCE LOOKS AT DISCRIMINATION</div>
            <div className={Classes.subtitle}>Detection and Mitigation</div>
          </section>
      </div>
      <div id='pFourContainer' className={Classes.pFourContainer}>
        <div style={{position: "relative", width: "100%", paddingBottom: "160%"}}>
          <Image src="/pFourFront.webp" style={pFourImageStyling} alt='text' objectFit='cover' layout='fill' />
        </div>  
        <section className={Classes.infoSection}>
          <div className={Classes.title}>ECOCAR AUTOMATION</div>
          <div className={Classes.subtitle}>CI/CD Pipeline</div>
        </section>
      </div>
    </div>
    </>
  )
}


// pThreeFront: Gary Waters/Ikon Images/Getty Images
/*




*/