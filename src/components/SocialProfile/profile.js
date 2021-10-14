import styles from '../SocialProfile/profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
    name,
    tag,
    location,
    avatar,
    statsFollowers,
    statsLikes,
    statsViews,
    }) => {
    return (
<div className={styles.heads}>
  <div>
    <img
      src={avatar}
      alt={name}
      width="200"
    />
    <p>{name}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>
  <ul className={styles.stats}>
    <li className={styles.part}>
      <span> Followers </span>
      <span> {statsFollowers} </span>
    </li>
    <li className={styles.part}>
      <span> Views </span>
      <span> {statsViews} </span>
    </li>
    <li className={styles.part}>
      <span> Likes </span>
      <span> {statsLikes} </span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
};

export default Profile;
