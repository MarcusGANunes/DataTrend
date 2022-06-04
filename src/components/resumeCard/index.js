import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ResumeCard() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Resumo
        </Typography>
        <Typography variant="h5" component="div">
          Consumo atual
        </Typography>
        <br/>
        <Typography variant="body2">
          14000 MWh
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalhes</Button>
      </CardActions>
    </Card>
  );
}
