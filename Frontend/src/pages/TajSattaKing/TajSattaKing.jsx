
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TajSattaKingBanner from './TajSattaKingBanner';
import TajSattaKingBannerOne from './TajSattaKingBannerOne';
import ExtraThingsTajSattaKing from './ExtraThingsTajSattaKing';
import SattaTajSattaBannerTwo from './SattaTajSattaBannerTwo';
function TajSattaKing() {
  return (
    <div>
         <TajSattaKingBanner/>
    <TajSattaKingBannerOne/>
    {/* <ExtraThingsTajSattaKing/> */}
    <SattaTajSattaBannerTwo/>

    </div>
  )
}

export default TajSattaKing;