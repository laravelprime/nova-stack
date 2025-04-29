import { 
  Grid, 
  Box, 
  Typography, 
  Button,
  useTheme, 
  useMediaQuery 
} from "@mui/material"

import {
  GitHub
} from '@mui/icons-material';

import background from '../../../../assets/img/bg.png'
import profilePage from '../../../../assets/img/profile-page-img.webp'

export default function Hero({}) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return <Grid 
    container
    direction="column"
    sx={{
      height: {
        sm: '28rem'
      }
    }}
  >
    <Grid 
      size={isSm ? 6 : 12} 
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: theme.space.s1_5,
        pl: {
          sm: theme.space.s3,
        },
        [theme.breakpoints.down('sm')]: {
          p: theme.space.s2   
        },
        height: '100%'
      })}
    >
      <Typography 
        variant='h1'
        sx={{
          fontSize: {
            xs: '1.5rem', //h1 fontSize
            md: '3rem' //h2 fontSize
          }
        }}
      >
        Material UI + Laravel Starter Kit for Solo Developers
      </Typography>
      <Typography variant="body1">
        Build production-ready web applications faster with a complete React + Material UI starter kit for Laravel.
      </Typography>
      <Box>
        <Button 
          variant="contained"
          sx={theme => ({
            display: 'inline-flex',
            alignItems: 'center',
            columnGap: theme.space.s0_5
          })}
        >
          <GitHub/>
          View on Github
        </Button>
      </Box>
    </Grid>
    <Grid 
      size={isSm ? 6 : 12}
      sx={{
        height: '100%',
        position: 'relative'
      }}
    >
      <Box 
        component="img" 
        src={background} 
        alt="NovaStack hero image"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          width: '100%',
          height: '100%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box 
          sx={theme => ({ 
            backgroundColor: 'green', 
            height: '70%', 
            width: '90%',
            borderRadius: theme.radius.r2,
            overflow: 'hidden',
          })}
        >
          <Box 
            component="img" 
            src={profilePage} 
            alt="NovaStack profile page"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Grid>
  </Grid>
}