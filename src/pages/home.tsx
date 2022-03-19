import React from 'react'
import './home.scss'
import Header from './header'
import Chart1 from '../components/chart1'
import Chart2 from '../components/chart2'
import Chart5 from '../components/chart5'
import Chart3 from '../components/chart3'
import Chart6 from '../components/chart6'
import List4 from '../components/list4'
import { px } from '../shared/px'
import DecorateThree from '../components/threeBackground'

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="section1">
          <Chart1 />
        </section>
        <section className="section2">
          <Chart2 />
        </section>
        <section className="section3">
          <Chart3 />
        </section>
        <section className="section4">
          <List4 />
        </section>
        <section className="section5">
          <Chart5 />
        </section>
        <section className="section6">
          <Chart6 />
        </section>
      </main>
      <div
        style={{
          position: 'absolute',
          zIndex: -1,
          height: window.innerHeight,
          marginTop: -((window.innerHeight - px(470)) / 2),
          width: window.innerWidth,
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <DecorateThree />
      </div>
    </div>
  )
}
