import { 
	AppBar, 
	Toolbar, 
	Button, 
	Box, 
	List, 
	ListItem, 
	Typography,
	ListItemIcon,
	IconButton
} from "@mui/material"

import {
  GitHub, Menu
} from '@mui/icons-material';

import Logo from "../../../components/logo"
import { Link } from "@inertiajs/react"

export default function Header({}) {
	const navLinks = [
		{
			label: 'Features',
			url: 'features',
			icon: ''
		},
		{
			label: 'Pricing',
			url: 'pricing',
			icon: ''
		},
		{
			label: 'Documentation',
			url: 'documentation',
			icon: ''
		},
		{
			label: 'Github',
			url: 'github',
			icon: (color) => (<GitHub color={color} />)
		}
	]

	return <>
		<AppBar 
			color="background.paper"
			position="static" 
			elevation={0} 
			variant="outlined" 
			sx={{ 
				borderTop: 0, 
				borderLeft: 0,
				borderRight: 0,
			}}
		>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Logo />
				<List 
					component="nav"
					sx={theme => ({ 
						display: {
							xs: 'none',
							sm: "flex"
						},  
						alignItems: 'center',
						columnGap: {
							md: theme.space.s4
						} 
					})}
				>					
					{navLinks.map(link => (
						<ListItem key={link.label} >
							<Link
								href={link.url}
								style={{ 
									textDecoration: "none", 
									display: 'inline-flex', 
									alignItems: 'center',
									columnGap: '0.5rem' 
								}}
							>
								<ListItemIcon sx={{ minWidth: 0 }}>
									{typeof link.icon === 'function' ? link.icon('primary') : link.icon}
								</ListItemIcon>
								<Typography color="primary" variant="body2">
									{link.label}
								</Typography>
							</Link>
						</ListItem>)
					)}
				</List>
				
				<Box sx={theme => ({ 
					display: {
						xs: 'none',
						sm: 'flex'
					}, 
					columnGap: theme.space.s1
				})}>
					<Button variant="outlined" >Login</Button>
					<Button variant="contained" >Register</Button>
				</Box>
				
				<IconButton sx={{ display: { sm: 'none' } }}>
					<Menu />
				</IconButton>
			</Toolbar>
		</AppBar>
	</>
}