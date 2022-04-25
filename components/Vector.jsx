import React, { useEffect, useRef } from 'react'
import Lottie from "lottie-web";
import * as animation from '../public/36461-support.json'

export const Vector = () => {

  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require('../public/70242-man-working.json')
    });
  }, []);

  return <div ref={container} className=""></div>
}
