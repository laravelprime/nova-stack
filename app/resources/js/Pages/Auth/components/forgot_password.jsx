import { Link } from "@inertiajs/react"
import { Typography } from "@mui/material"

export default function ForgotPassword({
  href
}) {
	return <Link 
		href={href} 
		style={{
			textDecorationLine: 'none',
			textAlign: 'center' 
		}}>
		<Typography color="primary" variant="body1">
			Forgot password?
		</Typography>
	</Link>
}