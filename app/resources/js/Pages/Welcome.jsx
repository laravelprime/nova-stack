import { Typography, Box } from "@mui/material"


export default function Welcome() {
    return <>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography variant="h1">
                Display 1
            </Typography>
            <Typography variant="h2">
                Display 1
            </Typography>
            <Typography variant="h3">
                Display 1
            </Typography>
            <Typography variant="h4">
                Display 1
            </Typography>
            <Typography variant="h5">
                Display 1
            </Typography>
            <Typography variant="h6">
                Display 1
            </Typography>
            <Typography variant="subtitle1">
                Subtitle 1
            </Typography>
            <Typography variant="subtitle2">
                Subtitle 2
            </Typography>
            <Typography variant="body1">
                Body 1
            </Typography>
            <Typography variant="body2">
                Body 2
            </Typography>
            <Typography variant="button">
                Button
            </Typography>
            <Typography variant="caption">
                Caption
            </Typography>
            <Typography variant="overline">
                Overline
            </Typography>
            <Typography variant="inherit">
                Inherit
            </Typography>
        </Box>
    </>
}