import React from 'react'
import {BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import { FaPrayingHands} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AppMenu, LinkIcon, Logo } from './styles';
import { Searchbar } from '..';

const Menu = () => {

  const isMobile = window.innerWidth < 768;

  return (
    <AppMenu>
      <Link to='/'>
            <Logo src={logo} alt="Logo" />
      </Link>
      <Searchbar/>
      <div>
        <LinkIcon href="https://formulario.messianica.org.br/pedidodeprece.aspx" target="_blank"> <FaPrayingHands size={isMobile ?18 : 24}/></LinkIcon>        
        <LinkIcon href="https://izunometv.messianica.org.br/faleconosco" target="_blank"> <MdEmail size={isMobile ?18 : 24}/></LinkIcon>
        <LinkIcon href="https://www.facebook.com/messianica" target="_blank"> <BsFacebook size={isMobile ?18 : 24}/></LinkIcon>
        <LinkIcon href="https://www.youtube.com/igrejamessianicamundialdobrasil" target="_blank"> <BsYoutube size={isMobile ?18 : 24}/></LinkIcon>
        <LinkIcon href="https://www.instagram.com/izunome.tv/" target="_blank"> <BsInstagram size={isMobile ?18 : 24}/></LinkIcon>
      </div>
    </AppMenu>
  )
}

export default Menu
