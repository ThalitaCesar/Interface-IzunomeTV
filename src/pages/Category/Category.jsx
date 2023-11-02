import React, {useState} from 'react'
import Menu from '../../components/Menu/Menu'
import {AppMenu} from './styles'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import {ColumnOne, ColumnTwo, Container} from './styles'
import OverviewDailyServices from './OverviewDailyServices/OverviewDailyServices'
import OverviewMonthlyServices from './OverviewMonthlyServices/OverviewMonthlyServices'
import OverviewProgramme from './OverviewProgramme/OverviewProgramme'
import Footer from '../../components/Footer/Footer'
import {HomeContainer} from '../Home/styles'

const Category = () => {

    const [selectedOption, setSelectedOption] = useState('OverviewDailyServices');
    const isMobile = window.innerWidth < 768;
  
    const renderOverview = () => {
      switch (selectedOption) {
        case 'OverviewDailyServices':
          return <OverviewDailyServices />;
        case 'OverviewMonthlyServices':
          return <OverviewMonthlyServices />;
        case 'OverviewProgramme':
          return <OverviewProgramme />;
        default:
          return null;
      }
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <HomeContainer>
        <ColumnOne>
          <MenuLateral />
        </ColumnOne>
        <ColumnTwo style={{ paddingLeft: `${isMobile ? '45px' : ''}` }}>
          <Menu />
          <AppMenu>
            <button
              onClick={() => handleOptionClick('OverviewDailyServices')}
              className={`${selectedOption === 'OverviewDailyServices' ? 'selected' : 'button'}`}
              style={{
                borderRight: `${isMobile ? '' : '2px solid var(--medium-gray)'}`,
              }}
            >
              Cultos Diários
            </button>
            <button
              onClick={() => handleOptionClick('OverviewMonthlyServices')}
              className={`${selectedOption === 'OverviewMonthlyServices' ? 'selected' : 'button'}`}
              style={{
                borderRight: `${isMobile ? '' : '2px solid var(--medium-gray)'}`,
              }}
            >
              Cultos Mensais
            </button>
            <button
              onClick={() => handleOptionClick('OverviewProgramme')}
              className={`${selectedOption === 'OverviewProgramme' ? 'selected' : 'button'}`}
            >
              Programas
            </button>
          </AppMenu>
            {renderOverview()}
          <Footer />
        </ColumnTwo>
      </HomeContainer>
    );
  };
export default Category
