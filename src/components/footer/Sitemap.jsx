'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

/***************************  SITEMAP - DATA  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const menuItems = [
  {
    id: 'navigation',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Menu',
    menu: [
      {
        label: 'Início',
        link: { href: '#home' }
      },
      {
        label: 'Como Funciona',
        link: { href: '#como-funciona' }
      },
      {
        label: 'Planos',
        link: { href: '#planos' }
      },
      {
        label: 'Contato',
        link: { href: '#contato' }
      }
    ]
  },
  {
    id: 'contact',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Contato',
    menu: [
      {
        label: 'WhatsApp',
        link: { href: 'https://wa.me/5511999999999', target: '_blank', rel: 'noopener noreferrer' }
      },
      {
        label: 'Telefone: +55 (11) 99999-9999',
        link: { href: 'tel:+5511999999999' }
      },
      {
        label: 'E-mail: contato@unitymove.com.br',
        link: { href: 'mailto:contato@unitymove.com.br' }
      }
    ]
  }
];

/***************************  FOOTER - SITEMAP  ***************************/

export default function Sitemap({ list, isMenuDesign }) {
  const theme = useTheme();

  const menuItemStyle = {
    color: 'text.secondary',
    justifyContent: 'flex-start',
    px: 0,
    minHeight: { xs: 36, sm: 40 },
    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
    '&.Mui-focusVisible': { bgcolor: 'transparent', ...generateFocusVisibleStyles(theme.vars.palette.primary.main) }
  };

  return (
    <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ justifyContent: 'space-between' }}>
      {(list || menuItems).map((item, index) => (
        <Grid key={index} {...item.grid}>
          <Stack sx={{ alignItems: 'flex-start', gap: { md: 3 } }}>
            <Typography variant="h4">{item.title}</Typography>
            <MenuList>
              {item?.menu &&
                item?.menu.map((menu, i) => (
                  <MenuItem
                    key={i}
                    disableRipple
                    sx={{ ...menuItemStyle, ...(isMenuDesign && { typography: 'caption2', fontWeight: 400, my: 0.25 }) }}
                    {...(menu.link && { component: NextLink, ...menu.link })}
                    tabIndex={0}
                    aria-label={menu.label}
                  >
                    {menu.label}
                  </MenuItem>
                ))}
            </MenuList>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

Sitemap.propTypes = { list: PropTypes.array, isMenuDesign: PropTypes.bool };
