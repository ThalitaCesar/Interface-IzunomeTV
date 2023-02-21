import { Avatar, Button } from 'antd';
import React from 'react'
import { BiSend } from 'react-icons/bi';
import Container from './styles';

const Comments = () => {

return (
    <Container>
    <div className="answer">

    <label className="input">
    <textarea className="input__field"
    value=""
    type="text" placeholder="Adicione um comentário..." />
    </label>

  <BiSend size={35} style={{color:"var(--blue)"}}/>
    </div>
    </Container>
  )
}

export default Comments
