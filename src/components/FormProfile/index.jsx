import React from 'react';
import {Avatar, Form, Input, Space} from 'antd';
import {ButtonSave, Flex, TextProfile} from './styles';
import user from '../../assets/user.jpg'

const FormProfile = () => {
    const inputStyle = {
        backgroundColor: 'var(--medium-gray)',
        padding: '10px 15px',
        height: '40px',
        border: 'none',
        marginRight:'0',
        width:'260px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        color: 'var(--light-gray)'
    };
    return (
        <Form
            labelCol={{
            span: 24
        }}
            wrapperCol={{
            span: 19
        }}
            layout="horizontal"
            style={{
            display:'flex',
            marginLeft: '60px',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>

            <Avatar
                size={120}
                style={{
                marginLeft: '-16px',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
                src={user}/>
                <TextProfile><a>Clique aqui</a> para mudar imagem de perfil</TextProfile>
            <Flex>
                <div>
                    <Form.Item
                        label="Nome de usuário"
                        name="nickname"
                        valuePropName="checked"
                        labelAlign="left">
                        <Input
                            type="text"
                            placeholder="Seu nome..."
                            defaultValue="Pedro Lucas"
                            style={inputStyle}
                            maxLength={14}/>
                    </Form.Item>

                    <Form.Item
                        label="Nome Completo"
                        name="name"
                        valuePropName="checked"
                        labelAlign="left">
                        <Input
                            placeholder="Seu nome..."
                            type="text"
                            defaultValue="Pedro Lucas de Oliveira Gonçalves"
                            maxLength={200}
                            style={inputStyle}/>
                    </Form.Item>

                    <Form.Item label="Email" name="email" valuePropName="checked" labelAlign="left">
                        <Input
                            placeholder="email..."
                            defaultValue="pedrinho2020@gmail.com"
                            style={inputStyle}
                            maxLength={200}
                            type="email"/>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        label="Telefone"
                        name="phone"
                        valuePropName="checked"
                        labelAlign="left">
                        <Space.Compact>
                            <Input
                                style={{
                                width: '60px',
                                backgroundColor: 'var(--medium-gray)',
                                padding: '10px 15px',
                                height: '40px',
                                border: 'none',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                color: 'var(--light-gray)'
                            }}
                                defaultValue="11"
                                maxLength={2}/>
                            <Input
                                style={{
                                width: '200',
                                backgroundColor: 'var(--medium-gray)',
                                padding: '10px 15px',
                                height: '40px',
                                border: 'none',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                color: 'var(--light-gray)'
                            }}
                                defaultValue="981234565"
                                maxLength={9}/>
                        </Space.Compact>
                    </Form.Item>

                    <Form.Item
                        label="Igreja"
                        name="church"
                        valuePropName="checked"
                        labelAlign="left">
                        <Input style={inputStyle} defaultValue="Natal" placeholder="Igreja"/>
                    </Form.Item>

                    <Form.Item
                        label="Johrei Center"
                        name="johreicenter"
                        valuePropName="checked"
                        labelAlign="left">
                        <Input style={inputStyle} defaultValue="Orla Sul" placeholder="Johrei Center"/>
                    </Form.Item>
                </div>
            </Flex>
            <ButtonSave>Salvar</ButtonSave>
            {/* Resto do seu código aqui */}
        </Form>
    );
};

export default FormProfile;
