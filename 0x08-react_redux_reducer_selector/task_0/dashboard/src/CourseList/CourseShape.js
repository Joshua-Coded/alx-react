// import React from 'react';
import PropTypes from 'prop-types';

// const CourseShape = ({id, name, credit}) => {

// }

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
})

export default CourseShape;
