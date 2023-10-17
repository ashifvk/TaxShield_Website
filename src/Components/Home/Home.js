import React from 'react'
// import BrandFooter from './BrandFooter'
// import Computer from './Computer'
// import Advance from './Advance'
// import Call from './Call'
// import Refferal from './Refferal'
// import Text from './Text'
// import Credit from './Credit'
// import Card from './Card'
// import Table from './Table'
// import Experts from './Experts'
// import Premium from './Premium'
// import Footer from './Footer'
// import { Nav } from 'react-bootstrap'
import Welcome from '../Welcome/Welcome'
import BrandFooter from '../BrandFooter/BrandFooter'
import Computer from '../Computer/Computer'
import Advance from '../Advance/Advance'
import Call from '../Call/Call'
import Refferal from '../Refferal/Refferal'
import Credit from '../Credit/Credit'
import Card from '../Card/Card'
import Experts from '../Experts/Experts'
import Premium from '../Premium/Premium'
import Footer from '../Footer/Footer'
import Text from '../Text/Text'
import Table from '../Table/Table'
import Nav from '../Nav/Nav'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <BrandFooter/>
      <Computer/>
      <Advance/>
      <Call/>
      <Refferal/>
      <Text/>
      <Credit/>
      <Card/>
      <Table/>
      <Experts/>
      <Premium/>
      <Footer/>
    </div>
  )
}
