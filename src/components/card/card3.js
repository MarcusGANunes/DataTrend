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
        alt="Rafael Silva de Oliveira"
        height="140"
        image="rafael.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <strong>Rafael Silva de Oliveira</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          18 years-old FullStack developer wannabe, passes most of its free time
          playing games and studying Front and Back-end development. Won gold
          medals at physics and chemistry olympiads and studies at one of the
          most respected universities in Brazil, ITA.
        </Typography>
      </CardContent>
    </Card>
  );
}
