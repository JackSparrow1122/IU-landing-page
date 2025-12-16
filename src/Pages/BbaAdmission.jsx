import React from 'react'
import BbaAdmissionHero from '../Components/BbaAdmission/BbaAdmissionHero'
import BbaAdmissionPointers from '../Components/BbaAdmission/BbaAdmissionPointers'
import BbaAdmissionOverview from '../Components/BbaAdmission/BbaAdmissionOverview'
import BbaAdmissionOfferings from '../Components/BbaAdmission/BbaAdmissionOfferings'
import BbaAdmissionCourses from '../Components/BbaAdmission/BbaAdmissionCourses'
import BbaAdmissionJoin from '../Components/BbaAdmission/BbaAdmissionJoin'
import BbaAdmissionInfra from '../Components/BbaAdmission/BbaAdmissionInfra'
import BbaAdmissionTestimonials from '../Components/BbaAdmission/BbaAdmissionTestimonials'
import Recruiter from '../Pages/Recruiter'
import BbaAdmissionTopPlacement from '../Components/BbaAdmission/BbaAdmissionTopPlacement'


function BbaAdmission() {
  return (
    <div>
        <BbaAdmissionHero />
        <BbaAdmissionPointers />
        <BbaAdmissionOverview />
        <BbaAdmissionTopPlacement/>
        <Recruiter />
        <BbaAdmissionCourses />
        <BbaAdmissionInfra />
        <BbaAdmissionOfferings />
        <BbaAdmissionJoin />
        <BbaAdmissionTestimonials />
        {/* <BbaAdmissionFaculty /> */}
    </div>
  )
}

export default BbaAdmission