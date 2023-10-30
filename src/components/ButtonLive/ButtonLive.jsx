import React from 'react'
import { AppMenu} from './styles'
import { BiWifi } from 'react-icons/bi';

const ButtonLive = () => {
  return (
    <AppMenu>
      <div className="rainbow">
      <BiWifi/>
      AO VIVO
      </div>
    </AppMenu>
  )
}

export default ButtonLive