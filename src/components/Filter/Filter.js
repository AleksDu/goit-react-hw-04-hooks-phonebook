import PropTypes from "prop-types";

import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        // name="filter"
        placeholder="Find?"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
