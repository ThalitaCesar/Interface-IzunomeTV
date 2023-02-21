import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu'
import { AppMenu } from './styles'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import { ColumnOne, ColumnTwo, Container } from './styles'
import OverviewDailyServices from './OverviewDailyServices/OverviewDailyServices'
import OverviewMonthlyServices from './OverviewMonthlyServices/OverviewMonthlyServices'
import OverviewProgramme from './OverviewProgramme/OverviewProgramme'

const Category = () => {

const [showOverview, setShowOverview] = useState(<OverviewDailyServices/>)
  
return (
    <div>
    <Container>
      <ColumnOne>
        <MenuLateral/>
      </ColumnOne>
      <ColumnTwo>
        <Menu/>
      <AppMenu>
        <button onClick={()=> setShowOverview(<OverviewDailyServices/>)} className='button'>Cultos Diários</button>
        <button onClick={ ()=> setShowOverview(<OverviewMonthlyServices/>)}  className='button'>Cultos Mensais</button>
        <button onClick={ ()=> setShowOverview(<OverviewProgramme/>)} className='button'>Programas</button>
      </AppMenu>

      {showOverview}

      </ColumnTwo>
    </Container>
    </div>
  )
}

export default Category
