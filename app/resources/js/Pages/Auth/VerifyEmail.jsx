import { 
	Box, 
	Grid, 
	Typography,  
	Paper,
  Button,
	useTheme, 
	useMediaQuery
} from "@mui/material"

import { Link } from "@inertiajs/react";

import Logo from "../../components/logo"

export default function VerifyEmail() {
	const theme = useTheme();
	const isSm = useMediaQuery(theme.breakpoints.up('sm'));

	return <Box sx={{
		height: '100vh',
	}}>
		<Grid 
			container 
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Grid size={{ xs: 12, sm: 6, md: 4 }} >
				<Paper
					sx={(theme)=>({
						display: "flex",
						flexDirection: 'column',
						alignItems: 'center',
						rowGap: theme.space.s1,
            textAlign: 'center',
						p: {
							xs: theme.space.s2,
							sm: theme.space.s3
						},
						my: {
							sm: theme.space.s3
						},
						borderRadius: {
							sm: theme.radius.r2
						}
					})}
					
					variant={isSm ? 'outlined' : 'elevation'}
					elevation={0}
				>
					<Logo/>
					<Typography variant="h5" sx={theme => ({ mb: theme.space.s0 })}>
						Verify your email
					</Typography>
					<Typography variant="body2">
					  We have sent an email to
            <strong> john@example.com </strong> 
            with a link to verify your account. (No luck. Try the spam folder.)
					</Typography>
          <Link style={{ width: '100%' }} href={'#!'}>
            <Button variant="outlined" sx={{ width: '100%' }}>
              Resend Email
            </Button>
          </Link>
				</Paper>
			</Grid>
		</Grid>
	</Box>
}