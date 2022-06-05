import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PartnerCard() {
    return(
        <Card sx={{minWidth: 370, height: 400}}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    <strong>Empresa 1</strong>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PartnerCard