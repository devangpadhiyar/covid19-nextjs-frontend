import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Layout = (props) => {
  const { containerProps, noBox } = props;
  return (
    <div>
      <Navbar />
      <Container maxWidth={'md'} {...containerProps}>
        {!noBox && <Box padding={1} />}
        {props.children}
      </Container>
    </div>
  );
};

Layout.defaultProps = {
  noBox: false
};

Layout.propTypes = {
  children: PropTypes.node,
  containerProps: PropTypes.object,
  noBox: PropTypes.bool
};

export default Layout;
