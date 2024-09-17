import React from 'react'
import Pic1 from '../Assets/blob-1.png'
import Pic2 from '../Assets/blob-2.png'
import Pic3 from '../Assets/blob-3.png'
import Pic4 from '../Assets/blob-4.png'
import './ParallaxTest.css'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const ParallaxTest = () => {
  const container = useRef(null);
  
  const { scrollYProgress} = useScroll({
      target: container, 
      offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -350])
  const ms = useTransform(scrollYProgress, [0, 1], [0, -550])
  const md = useTransform(scrollYProgress, [0, 1], [0, -850])
  const lg = useTransform(scrollYProgress, [0, 1], [0, -1050])

  const images = [
    {
      src: Pic1, 
      parallax: sm,
    }, 
    {
      src: Pic2, 
      parallax: ms,
    }, 
    {
      src: Pic3, 
      parallax: md,
    }, 
    {
      src: Pic4, 
      parallax: lg,
    }, 
  ];

  return (
    <>
    <div className='main'>
      <h1>Hello</h1>
      <motion.h1 style={{y: sm }}>Testing Parallax</motion.h1>
      <div className="image-list">
        {
          images.map(({src, parallax}, index) => {
            return <motion.div style={{y: parallax}}key={`i_${index}`} >
              <img className={`img${index}`} src={src}/>
            </motion.div>

          })
        }
      </div>
    </div>
    <div className="bottom">
      <h1><span>Who</span> I am!</h1>
    </div>
    </>
  )
}

export default ParallaxTest