import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 370, height: 400 }}>
      <CardMedia
        component="img"
        alt="Marcus Gabriel de Almeida Nunes"
        height="140"
        width="100"
        image="marcus.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <strong>Marcus Gabriel de Almeida Nunes</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A FullStack Developer at ITA Júnior and student of Electronic
          Engineering at Aeronautics Institute of Tecnology. Before college,
          owned some medals in Physics and Chemistry Olympiads. Spends the free
          time learning about Tecnology, Crypto and Web Development.
        </Typography>
      </CardContent>
    </Card>
  );
}
