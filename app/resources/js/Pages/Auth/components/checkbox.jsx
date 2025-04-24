import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function CheckBox({
    label
}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormGroup>
  );
}
