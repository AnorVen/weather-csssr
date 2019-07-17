import React from 'react';

const Country = ({ title, showCity }) => <div onClick={() => showCity(title)}>{title}</div>;

export default Country;
