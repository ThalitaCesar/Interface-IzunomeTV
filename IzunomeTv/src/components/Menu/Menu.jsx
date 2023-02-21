import React from 'react'
import { AppMenu, LinkIcon, Logo} from './Styles'
import {BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import Searchbar from './Search/Search';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <AppMenu>
      <Link to='/'>
      <Logo src={logo}/>
      </Link>
      <Searchbar/>
      <div>        
        <LinkIcon href="https://izunometv.messianica.org.br/faleconosco"> <MdEmail size={24}/></LinkIcon>
        <LinkIcon href="https://www.facebook.com/messianica"> <BsFacebook size={24}/></LinkIcon>
        <LinkIcon href="https://www.youtube.com/igrejamessianicamundialdobrasil"> <BsYoutube size={24}/></LinkIcon>
        <LinkIcon href="https://www.instagram.com/izunome.tv/"> <BsInstagram size={24}/></LinkIcon>
      </div>
    </AppMenu>
  )
}

export default Menu
