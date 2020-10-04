import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const Header = () => {
    const { userName, repositoryName } = useParams()
    return (
    <div className="App-header">
        <div id="repository-name">Имя пользователя: { userName }</div>
        <Link to="/" id="go-back">Обратно на страницу поиска</Link>
        {repositoryName && <Link to={`/${userName}`} id="go-repository-list">Обратно к списку репозиториев</Link>}
    </div>
    )
}


export default Header;
