'use client';
import PropTypes from 'prop-types';

// @mui
import CardMedia from '@mui/material/CardMedia';

// @project
import branding from '@/branding.json';

/***************************  LOGO - FAB  ***************************/

export default function LogoFab({ size = 24 }) {
  const logoFabPath = branding.logo.logoFab || '/assets/images/favicon.png';

  return (
    <CardMedia src={logoFabPath} component="img" alt="logo" sx={{ height: 1 }} loading="lazy" />
  );
}

LogoFab.propTypes = { size: PropTypes.number };
