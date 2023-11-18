import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import img1 from "../../../../assets/home/hero/banners/Rectangle 1241.jpg"
import img2 from "../../../../assets/home/hero/banners/Rectangle 1242.jpg"
import img3 from "../../../../assets/home/hero/banners/Rectangle 1243.jpg"
import img4 from "../../../../assets/home/hero/banners/Rectangle 1244.jpg"


export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={8} md={8}>
                    <Image src={img1} alt="img1" />
                </Grid>
                <Grid xs={4} md={4}>
                    <Image src={img2} alt="img2" />
                </Grid>
                <Grid xs={4} md={4}>
                    <Image src={img3} alt="img3" />
                </Grid>
                <Grid xs={8} md={8}>
                    <Image src={img4} alt="img4" />
                </Grid>
            </Grid>
        </Box>
    );
}


const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    borderRadius: '6px',
})