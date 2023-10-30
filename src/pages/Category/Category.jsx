import React, {useState} from 'react'
import Menu from '../../components/Menu/Menu'
import {AppMenu} from './styles'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import {ColumnOne, ColumnTwo, Container} from './styles'
import OverviewDailyServices from './OverviewDailyServices/OverviewDailyServices'
import OverviewMonthlyServices from './OverviewMonthlyServices/OverviewMonthlyServices'
import OverviewProgramme from './OverviewProgramme/OverviewProgramme'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer} from '../../utils/motion'
import Footer from '../../components/Footer/Footer'

const Category = () => {

    const [showOverview,
        setShowOverview] = useState(<OverviewDailyServices/>)

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
            once: false,
            amount: 0.25
        }}>
            <Container>
                <ColumnOne>
                    <MenuLateral/>
                </ColumnOne>
                <ColumnTwo>
                    <Menu/>
                    <motion.div
                        variants={fadeIn('down', 'tween', 1.2, 1)}
                        initial="hidden"
                        whileInView="show">
                        <AppMenu>
                            <button
                                onClick={() => setShowOverview(<OverviewDailyServices/>)}
                                className='button'
                                style={{
                                borderRight: '2px solid var(--medium-gray'
                            }}>Cultos Diários</button>
                            <button
                                onClick={() => setShowOverview(<OverviewMonthlyServices/>)}
                                className='button'
                                style={{
                                borderRight: '2px solid var(--medium-gray'
                            }}>Cultos Mensais</button>
                            <button
                                onClick={() => setShowOverview(<OverviewProgramme/>)}
                                className='button'>Programas</button>
                        </AppMenu>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 'tween', 1.2, 1.2)}
                        initial="hidden"
                        whileInView="show">
                        {showOverview}
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 'tween', 1.2, 1.2)}
                        initial="hidden"
                        whileInView="show">
                        <Footer/>
                    </motion.div>
                </ColumnTwo>
            </Container>
        </motion.div>
    )
}

export default Category
