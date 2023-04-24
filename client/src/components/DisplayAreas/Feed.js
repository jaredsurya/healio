import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ProfileDetailsDisplay from '../Features/ProfileDetailsDisplay'
import Welcome from '../Features/Welcome'
import Quote from '../Features/Quote'
import SwitcherContext from '../../utils/switcherContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import FeaturedHealer from '../Features/FeaturedHealer'
import SavedInterests from '../Features/SavedInterests'
import SortedHealerService from '../Features/SortedHealerService'
import Map from '../Features/Map'
import HealerPage from '../Features/HealerPage'
import ServicePage from '../Features/ServicePage'
import HealersServicesContext from '../../utils/healersServicesContext'
import AboutHealio from '../Features/AboutHealio'
  
  const Feed = ({theme}) => {
    const { feed } = useContext(SwitcherContext);
    const { renderHealer, renderService } = useContext(HealersServicesContext);
    let size = "large"
    let navigate = useNavigate()
  
    useEffect(() => {
      switch (feed) {
        case "featuredhealer":
          navigate("/main/featuredhealer")
          break;
        case "map":
          navigate("/main/map")
          break;
        case "profiledetailsdisplay":
          navigate("/main/myprofile")
          break;
        case "quote":
          navigate("/main/quotes")
          break;
        case "savedinterests":
          navigate("/main/mysaved")
          break;
        case "sortedhealerservice":
          navigate("/main/finder")   
          break;
        default:
          navigate("/main")
          break;
      }
    }, [feed])
  
  return (
    <Box flex={7} bgcolor="#f7f9ff" p={2} height='calc(100vh - 108px)' overflow={"auto"}>
      <Routes>
        <Route path="/featuredhealer" element={<FeaturedHealer size={size} />} />
        <Route path="/about" element={<AboutHealio />} />
        <Route path="/map" element={<Map size={size} />} />
        <Route path="/myprofile" element={<ProfileDetailsDisplay size={size} />} />
        <Route path="/quotes" element={<Quote size={size} />} />
        <Route path="/mysaved" element={<SavedInterests size={size} />} />
        <Route path="/finder" element={<SortedHealerService size={size} />} />
        <Route path="/healer/:id" element={<HealerPage id={renderHealer}/>} />
        <Route path="/service/:id" element={<ServicePage id={renderService}/>} />
        <Route path="/" element={<Welcome size={size} />} />
      </Routes>
    </Box>
  )
}

export default Feed
