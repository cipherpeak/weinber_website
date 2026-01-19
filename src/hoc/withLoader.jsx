import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';

const withLoader = (WrappedComponent, loaderProps = {}) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust timing as needed

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loader {...loaderProps} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;