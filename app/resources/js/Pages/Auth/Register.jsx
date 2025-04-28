import { 
	Box, 
	Grid, 
	Typography, 
	Button, 
	Paper, 
	Divider,
	useTheme, 
	useMediaQuery
} from "@mui/material"

import { Link } from "@inertiajs/react"

import Logo from "./components/logo"
import RegisterForm from "./components/register_form"
import GoogleIcon from "./components/google_icon"
import ForgotPassword from "./components/forgot_password"

export default function Register() {
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
						rowGap: theme.space.s1,
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
					<Typography variant="h3" sx={theme => ({ mb: theme.space.s1_5 })}>
						Register
					</Typography>
					<RegisterForm action={'#!'}/>
					<Divider flexItem>
						<Typography variant="body2">
							or
						</Typography>
					</Divider>
					<Link href={'#!'}>
						<Button 
							variant="outlined" 
							sx={theme => ({ 
								width: '100%', 
								display: "inline-flex", 
								columnGap: theme.space.s1, 
								alignItems: "center" 
							})}
						>
							<GoogleIcon/>
							Register with Google
						</Button>
					</Link>
					<Box sx={theme => ({ display: 'flex', justifyContent: "center", columnGap: theme.space.s0_5 })}>
						<Typography>
							Already have an account?
						</Typography>
						<Link href={route('login')} style={{ textDecorationLine: 'none', }}>
							<Typography color="primary" variant="body1">
								Log in
							</Typography>
						</Link>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	</Box>
}