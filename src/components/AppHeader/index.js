import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import PrivateNoteModeButton from './PrivateNoteModeButton';
import SearchBar from './SearchBar';
import ProfileIcon from './ProfileIcon';

const Header = styled.header`
  position: fixed;
  min-width: 576px;
  width: 100%;
  top: 0;
  left: 0;
  height: 75px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
  }
`;

export default function AppHeader({ onLogout, buttonMode, handleOnClick }) {
  const history = useHistory();

  async function logoutClickHandler() {
    await auth.signOut();
    localStorage.removeItem(process.env.REACT_APP_GOOGIT_LOGIN_TOKEN);
    onLogout();
    history.push('/login');
  }

  return (
    <Header>
      <section>
        <PrivateNoteModeButton buttonMode={buttonMode} handleOnClick={handleOnClick} />
        {/* 메인 뿌리는 에피아이부터 */}
        <SearchBar />
        <ProfileIcon handleOnClick={logoutClickHandler} />
      </section>
    </Header>
  );
}
