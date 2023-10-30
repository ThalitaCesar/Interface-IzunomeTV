import React from 'react'
import { AppMenu, LinkIcon, Logo} from './Styles'
import {BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import { FaPrayingHands} from 'react-icons/fa';
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
        <LinkIcon href="https://formulario.messianica.org.br/pedidodeprece.aspx" target="_blank"> <FaPrayingHands size={24}/></LinkIcon>        
        <LinkIcon href="https://izunometv.messianica.org.br/faleconosco" target="_blank"> <MdEmail size={24}/></LinkIcon>
        <LinkIcon href="https://www.facebook.com/messianica" target="_blank"> <BsFacebook size={24}/></LinkIcon>
        <LinkIcon href="https://www.youtube.com/igrejamessianicamundialdobrasil" target="_blank"> <BsYoutube size={24}/></LinkIcon>
        <LinkIcon href="https://www.instagram.com/izunome.tv/" target="_blank"> <BsInstagram size={24}/></LinkIcon>
      </div>
    </AppMenu>
  )
}

export default Menu
