import { Box, TextField, Button } from "@mui/material"

import CheckBox from "./checkbox"

export default function SignInForm({action}) {
  return <Box 
    component="form" 
    action={action}
    sx={theme => ({
      display: "flex",
      flexDirection: 'column',
      rowGap: theme.space.s2
    })}
  >
    <TextField id="outlined-1" type="email" label="Email" variant="outlined" error={false} helperText={''}/>
    <TextField id="outlined-2" type="password" label="Password" variant="outlined" error={false} helperText={''}/>
    <CheckBox label={'Remember Me'}/>
    <Button variant="contained">
      Sign In
    </Button>
  </Box>
}