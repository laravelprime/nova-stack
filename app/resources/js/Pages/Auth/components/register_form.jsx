import { Box, TextField, Button } from "@mui/material"

export default function RegisterForm({action}) {
  return <Box 
    component="form" 
    action={action}
    sx={theme => ({
      display: "flex",
      flexDirection: 'column',
      rowGap: theme.space.s2
    })}
  >
    <TextField id="name" type="text" label="Name" variant="outlined" error={false} helperText={''}/>
    <TextField id="email" type="email" label="Email" variant="outlined" error={false} helperText={''}/>
    <TextField id="password" type="password" label="Password" variant="outlined" error={false} helperText={''}/>
    <TextField id="password_confirmation" type="password" label="Confirm Password" variant="outlined" error={false} helperText={''}/>
    <Button variant="contained">
      Register
    </Button>
  </Box>
}