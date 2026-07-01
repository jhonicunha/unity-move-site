'use client';

// @mui
import Box from '@mui/material/Box';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';

// @data
import {
  metrics,
  clientele,
  cta4,
  cta5,
  faq,
  feature20,
  feature18,
  hero,
  pricing,
  testimonial
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  return (
    <>
      <Box id="home">
        <Hero17 {...hero} />
      </Box>
      <Box id="beneficios">
        <Feature20 {...feature20} />
      </Box>

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics5 })), props: metrics }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          {
            importFunc: () =>
              import('@/blocks/feature').then((module) => {
                const Wrapped = (props) => (
                  <Box id="como-funciona">
                    <module.Feature18 {...props} />
                  </Box>
                );
                return { default: Wrapped };
              }),
            props: feature18
          },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          {
            importFunc: () =>
              import('@/blocks/testimonial').then((module) => {
                const Wrapped = (props) => (
                  <Box id="depoimentos">
                    <module.Testimonial10 {...props} />
                  </Box>
                );
                return { default: Wrapped };
              }),
            props: testimonial
          },
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele },
          {
            importFunc: () =>
              import('@/blocks/pricing').then((module) => {
                const Wrapped = (props) => (
                  <Box id="planos">
                    <module.Pricing9 {...props} />
                  </Box>
                );
                return { default: Wrapped };
              }),
            props: pricing
          }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          {
            importFunc: () =>
              import('@/blocks/cta').then((module) => {
                const Wrapped = (props) => (
                  <Box id="contato">
                    <module.Cta5 {...props} />
                  </Box>
                );
                return { default: Wrapped };
              }),
            props: cta5
          },
          {
            importFunc: () =>
              import('@/blocks/faq').then((module) => {
                const Wrapped = (props) => (
                  <Box id="faq">
                    <module.Faq6 {...props} />
                  </Box>
                );
                return { default: Wrapped };
              }),
            props: faq
          }
        ]}
        offset="200px"
      />
    </>
  );
}
