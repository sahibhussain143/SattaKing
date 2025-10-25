
import TajSattaKing from '../TajSattaKing/TajSattaKing';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTow';
import React from 'react'
import ExtraThingsHome from './ExtraThingsHome';
import SattaChart from '../SattaChart/SattaChart';
import RecentlyAdded from './RecentlyAdded';
import RecentlyAddedGame from './RecentlyAddedGame';
import RecentlyAddedGameList from './RecentlyAddedGameList';
import SattaChartBanner from '../SattaChart/SattaChartBanner';

function Home() {
  return (
    <div>
      <BannerOne />
      <RecentlyAddedGame/>
      <RecentlyAdded/>
      <SattaChartBanner/>
      <BannerTwo />
{/* <RecentlyAddedGameList/> */}
      <TajSattaKing />

      <SattaChart />
      <ExtraThingsHome />

    </div>
  )
}

export default Home
