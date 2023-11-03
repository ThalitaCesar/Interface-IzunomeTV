import React from 'react'
import Page404 from '../../assets/icons/404'
import {NotFoundFlex} from './styles'
import Layout from '../../components/Layout/Layout'

const NotFound = () => {
    return (
        <Layout>
            <NotFoundFlex style={{
                width: '60vw'
            }}>
                <h1>404</h1>
                <p>Página não encontrada. :(
                </p>
                <Page404/>
            </NotFoundFlex>
        </Layout>

    )
}

export default NotFound
