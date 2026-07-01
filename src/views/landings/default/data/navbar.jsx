// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  DEFAULT - NAVBAR  ***************************/

export const navbar = {
  customization: false,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-whatsapp" color="primary.main" size={18} />,
    href: 'https://wa.me/5511999999999',
    target: '_blank',
    rel: 'noopener noreferrer',
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Reservar Agora', href: '#planos' },
  navItems: [
    { id: 'home', title: 'Início', link: '#home' },
    { id: 'como-funciona', title: 'Como Funciona', link: '#como-funciona' },
    { id: 'planos', title: 'Planos', link: '#planos' },
    { id: 'contato', title: 'Contato', link: '#contato' }
  ]
};
