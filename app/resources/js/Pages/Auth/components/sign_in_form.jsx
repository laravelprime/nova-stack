import { Box, TextField, Button } from "@mui/material"

import CheckBox from "./checkbox"

export default function SignInForm() {
  return <Box 
    component="form" 
    action="#"
    sx={{
      display: "flex",
      flexDirection: 'column',
      rowGap: 1
    }}
  >
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <Box>
      <CheckBox label={'Remember Me'}/>
    </Box>
    <Button variant="contained">
      Sign In
    </Button>
  </Box>
}