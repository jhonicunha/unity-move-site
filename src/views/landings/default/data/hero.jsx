// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Locadora de Carros
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Unity Move
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/favicon.png"
              sx={{ width: 16, height: 16 }}
              alt="logo"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Aluguel de Carros com Praticidade e Flexibilidade',
  captionLine: 'Viva a melhor experiência de locação com aprovação rápida, seguro completo e suporte 24 horas. Dirija o carro perfeito para a sua jornada.',
  primaryBtn: { children: 'Escolher Carro & Reservar', href: '#planos' },
  videoSrc: '',
  videoThumbnail: '/assets/images/heroimg.png',
  listData: [
    { image: '/assets/images/shared/car.svg', title: 'Frota 100% Nova' },
    { image: '/assets/images/shared/shield.svg', title: 'Seguro Completo Incluso' },
    { image: '/assets/images/shared/document.svg', title: 'Sem Burocracia' },
    { image: '/assets/images/shared/phone.svg', title: 'Assistência 24/7' }
  ]
};
