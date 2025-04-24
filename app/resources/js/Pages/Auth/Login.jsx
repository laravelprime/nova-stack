import { Box, Grid, Typography, TextField, Button } from "@mui/material"

import { Link } from "@inertiajs/react"

import Logo from "./components/logo"
import SignInForm from "./components/sign_in_form"
import GoogleIcon from "./components/google_icon"

export default function Login() {
	return <Box sx={{
		height: '100vh',
	}}>
		<Grid 
			container 
			spacing={2}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Grid 
				size={4}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: 'column',
						rowGap: 1,
					}}
				>
					<Logo/>
					<Typography variant="h3">
						Sign In
					</Typography>
					<SignInForm/>
					<Link 
						href={'#'} 
						style={{ 
							textDecorationLine: 'none',
							textAlign: 'center' 
						}}>
						<Typography color="primary" variant="body1">
							Forgot password?
						</Typography>
					</Link>
					<Box sx={{
						display: 'flex',
						alignItems: 'center'
					}}>
						<Box sx={{ flexGrow: '1' }}> <hr /> </Box>
						<Box sx={{ mx: 0.5 }}>
							<Typography variant="body2">
								or
							</Typography>
						</Box>
						<Box sx={{ flexGrow: '1' }}> <hr /> </Box>
					</Box>
					<Box>
						<Button 
							variant="outlined" 
							sx={{ width: '100%', display: "inline-flex", columnGap: 1, alignItems: "center" }}
						>
							<GoogleIcon/>
							Sign in with Google
						</Button>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: "center", columnGap: 0.5 }}>
						<Typography>
							Dont have an account?
						</Typography>
						<Link href='#' style={{ textDecorationLine: 'none', }}>
							<Typography color="primary" variant="body1">
								Sign Up
							</Typography>
						</Link>
					</Box>
				</Box>
			</Grid>
		</Grid>
	</Box>
}