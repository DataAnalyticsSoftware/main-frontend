import React, { useEffect, useMemo, useState } from 'react'
import { Box } from '@mui/material';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompareTable } from './components/CompareTable';
import { FAQ } from './components/FAQ';
import { Form } from './components/Form';
import { ContentLandingContextProvider } from './context/ContentLandingContext'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Container, IOptions, RecursivePartial } from '@tsparticles/engine';


export const ContentLandingComponent=()=> {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: Container | undefined): Promise<void> => {
    return new Promise(()=>{})
  };

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      themes: [
        {
          name: "light",
          default: {
            value: true,
            mode: "light"
          },
          options: {
            background: {
              color: "#fff"
            },
            particles: {
              color: {
                value: "#000"
              }
            }
          }
        },
        {
          name: "dark",
          default: {
            value: true,
            mode: "dark"
          },
          options: {
            background: {
              color: "#fff"
            },
            particles: {
              color: {
                value: "#000"
              }
            }
          }
        }
      ]
    }),
    [],
  );

  return (
    <ContentLandingContextProvider>
      {init && <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />}
      <Box sx={{position: 'relative'}}>
        <AboutUs/>
        <OurServices/>
        <CompareTable/>
        <WhyChooseUs/>
        <FAQ/>
        <Form/>
      </Box>
    </ContentLandingContextProvider>
  )
}