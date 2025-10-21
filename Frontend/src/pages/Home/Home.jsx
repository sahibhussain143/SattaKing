
import TajSattaKing from '../TajSattaKing/TajSattaKing';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTow';
import React from 'react'
import ExtraThingsHome from './ExtraThingsHome';
import SattaChart from '../SattaChart/SattaChart';
import RecentlyAdded from './RecentlyAdded';

function Home() {
  return (
    <div>
      <BannerOne />
      <RecentlyAdded/>
      <BannerTwo />

      <TajSattaKing />

      <SattaChart />
      <ExtraThingsHome />

    </div>
  )
}

export default Home
