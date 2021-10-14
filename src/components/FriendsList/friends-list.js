import React from 'react';
import style from './friends.module.css';
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
    return (
        <section className={style.heads}>
        <ul className={style.friend}>
            {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className={style.item} >
                <span className={isOnline ? style.online : style.offline}></span>
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
            </li>))}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  export default FriendList;