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
        alt="Walter Melhado Arbiol Forné"
        height="140"
        image="walter.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <strong>Walter Melhado Arbiol Forné</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Beyounds the college, works mainly in web scraping services and in its
          free time studies about development and web 3.0 technologies. Got some
          prizes in scientific olympics on high school, as honorable mension in
          brazilian computer olympics or a silver medal into Canguru's
          Mathmatics Olimpics, and as the others 2 pass into the hardest
          entrance exam of the Latin America (the ITA exam).
        </Typography>
      </CardContent>
    </Card>
  );
}
