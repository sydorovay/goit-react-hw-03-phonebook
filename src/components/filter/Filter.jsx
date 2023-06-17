import PropTypes from 'prop-types';
import styles from './Filter.module.css';

 const Filter = ({ filter,  onChange}) => {
  return (
    <div className={styles.container}>
      <div className={styles.subfilter}>
        <span className={styles.label}>Filter contacts by name:</span>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={`${styles.input} ${styles.placeholder}`}
          placeholder="Please enter name..."
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter