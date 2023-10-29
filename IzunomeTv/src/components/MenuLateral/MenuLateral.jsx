import React, {useState} from 'react';
import {AppMenu, Icone, MenuLinks, ShortMenu} from './Styles';
import {Avatar} from 'antd';
import {Link} from 'react-router-dom';
import user from '../../assets/user.jpg'
import HomeIcon from '../../assets/icons/home';
import CategoryIcon from '../../assets/icons/category';
import SearchIcon from '../../assets/icons/search';
import AboutIcon from '../../assets/icons/about';
import LogoutIcon from '../../assets/icons/logout';
import PayingIcon from '../../assets/icons/praying';
import NotificationIcon from '../../assets/icons/notification';
import WhatchlistIcon from '../../assets/icons/watchlist';

const MenuLateral = () => {
    const [isHovered,
        setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <AppMenu
             isHovered={isHovered} 
                style={{
                width: isHovered
                    ? '187px'
                    : '65px'
            }}>
                <MenuLinks>
                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none',
                        display: 'flex'
                    }}>
                        <Avatar
                            size={50}
                            style={{
                            marginLeft: '-16px'
                        }}
                            src={user}/> {isHovered && <> <p
                            style={{
                            marginTop: '16px'
                        }}>Meu Perfil</p> </>}
                    </Link>
                </MenuLinks>
                <ShortMenu>
                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <HomeIcon color="#5568a0" size={19}/> {isHovered && <p>Página Inicial</p>}
                        </Icone>
                    </Link>

                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <SearchIcon color="#5568a0" size={19}/> {isHovered && <p>Pesquisar</p>}
                        </Icone>
                    </Link>

                    <Link
                        to='/categories'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <CategoryIcon color="#5568a0" size={19}/> {isHovered && <p>Categorias</p>}
                        </Icone>
                    </Link>
                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <WhatchlistIcon color="#5568a0" size={19}/> {isHovered && <p>Minha lista</p>}
                        </Icone>
                    </Link>

                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <AboutIcon color="#5568a0" size={19}/> {isHovered && <p>Sobre Nós</p>}
                        </Icone>
                    </Link>
                    <Link
                        to='/'
                        style={{
                        textDecoration: 'none'
                    }}>
                        <Icone>
                        <NotificationIcon color="#5568a0" size={19}/> {isHovered && <p>Notificações</p>}
                        </Icone>
                    </Link>

                </ShortMenu>
                <MenuLinks style={{
                    marginBottom: '14px',
                    marginLeft:'8px'
                }}>
                    <LogoutIcon color="#5568a0"
                     size={19}
                    /> {isHovered && <p>Sair</p>}
                </MenuLinks>
            </AppMenu>
        </div>
    );
};

export default MenuLateral;
