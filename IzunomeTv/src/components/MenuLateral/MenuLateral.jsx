import React from 'react'
import { AppMenu, Icone, MenuLinks, ShortMenu } from './Styles'
import { BiHomeHeart, BiCategoryAlt, BiBookAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import {MdOutlineContactSupport} from 'react-icons/md';
import {FaPrayingHands} from 'react-icons/fa';
import { Avatar, Tooltip } from 'antd';
import {CgMenuGridR} from 'react-icons/cg';
import { Link } from 'react-router-dom';

const MenuLateral = () => {
  return (
    <AppMenu>
            <Avatar size={40} icon={<BiUser />} />
  <ShortMenu>

  <Link to='/'>
  <Tooltip title="Página Inicial"><Icone> <BiHomeHeart size={30}/> </Icone> </Tooltip>
  </Link>

  <Link to='/'>
  <Tooltip title="Pesquisar"> <Icone> <BiSearchAlt size={30}/> </Icone></Tooltip>
  </Link>

  <Link to='/categories'>
  <Tooltip title="Categorias"> <Icone> <BiCategoryAlt size={30}/> </Icone></Tooltip>
   </Link>

  <Link to='/'>
  <Tooltip title="Sobre Nós"><Icone> <BiBookAlt size={30}/> </Icone></Tooltip>
   </Link>

  <Link to='/'>
  <Tooltip title="Pedidos de Prece"> <Icone> <FaPrayingHands size={30}/> </Icone></Tooltip>
  </Link>
  
  </ShortMenu>
  <MenuLinks>
      <Tooltip title="Links">
      <CgMenuGridR size={35}/>
      </Tooltip>
      </MenuLinks>
    </AppMenu>
  )
}

export default MenuLateral
