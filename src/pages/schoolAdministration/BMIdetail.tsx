import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';

function BMIdetail() {
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <SchoolAdminSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
             
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   School Administration BMI Functions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default BMIdetail