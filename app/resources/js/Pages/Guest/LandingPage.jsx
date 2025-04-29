import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Box, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme 
} from '@mui/material';
import {
  CheckCircle,
  Dashboard,
  Code,
  Speed,
  Devices,
  Menu as MenuIcon,
  ArrowForward,
  GitHub,
  Twitter,
  LinkedIn
} from '@mui/icons-material';

export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="static" color="primary" elevation={0}>
        <Container>
          <Toolbar sx={{ padding: theme.spacing(1, 0) }}>
            {isMobile ? (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                  NovaStack
                </Typography>
                <IconButton 
                  edge="end" 
                  color="inherit" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <MenuIcon />
                </IconButton>
                {mobileMenuOpen && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: '100%', 
                      left: 0, 
                      right: 0, 
                      bgcolor: 'primary.main',
                      zIndex: 999
                    }}
                  >
                    <List component="nav">
                      <ListItem button component="a" href="#features">
                        <ListItemText primary="Features" />
                      </ListItem>
                      <ListItem button component="a" href="#pricing">
                        <ListItemText primary="Pricing" />
                      </ListItem>
                      <ListItem button component="a" href="https://github.com/novastack">
                        <ListItemText primary="GitHub" />
                      </ListItem>
                      <ListItem button component="a" href="/docs">
                        <ListItemText primary="Documentation" />
                      </ListItem>
                    </List>
                  </Box>
                )}
              </>
            ) : (
              <>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                  NovaStack
                </Typography>
                <Button color="inherit" href="#features">Features</Button>
                <Button color="inherit" href="#pricing">Pricing</Button>
                <Button color="inherit" href="https://github.com/novastack" startIcon={<GitHub />}>GitHub</Button>
                <Button color="inherit" href="/docs">Documentation</Button>
                <Button 
                  variant="contained" 
                  color="secondary"
                  href="/register"
                  sx={{ ml: 2 }}
                >
                  Get Started
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Material UI + Laravel Starter Kit for Solo Developers
              </Typography>
              <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                Build production-ready web applications faster with a complete React + Material UI integration for Laravel.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  href="/register"
                  sx={{ mr: 2, py: 1.5, px: 4 }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  href="https://github.com/novastack"
                  sx={{ py: 1.5, px: 4 }}
                >
                  View on GitHub
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/api/placeholder/600/400"
                alt="NovaStack dashboard preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Offerings */}
      <Container maxWidth="lg" id="features" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
          Everything You Need to Build Faster
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Dashboard fontSize="large" color="primary" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Ready-to-use Dashboard
                </Typography>
                <Typography variant="body1">
                  Complete with authentication, user management, and responsive layouts. 
                  Skip weeks of initial setup and dive straight into building your app's unique features.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Code fontSize="large" color="primary" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Material UI Integration
                </Typography>
                <Typography variant="body1">
                  Access the entire Material UI component library, perfectly integrated 
                  with Laravel and Inertia.js. All components work seamlessly with Laravel's 
                  backend functionality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Speed fontSize="large" color="primary" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Developer Experience
                </Typography>
                <Typography variant="body1">
                  Built with the solo developer in mind. Hot-reloading, type hints, and 
                  well-documented code let you focus on building features, not fixing configuration issues.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Complete Feature Set
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Authentication System" 
                    secondary="Login, registration, password reset, and email verification" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Profile Management" 
                    secondary="Edit profile, change password, and account deletion" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Material UI Component Library" 
                    secondary="Buttons, forms, tables, modals, and more" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Inertia.js Integration" 
                    secondary="SPA-like experience with server-side rendering" 
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Responsive Dashboard Layout" 
                    secondary="Works perfectly on mobile, tablet, and desktop" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Dark Mode Support" 
                    secondary="Complete theme system with light and dark mode" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Form Validation" 
                    secondary="Client and server-side validation working together" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Comprehensive Documentation" 
                    secondary="Step-by-step guides for customization" 
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Built For Real-World Applications
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            NovaStack is designed for solo developers who need to launch production apps quickly
            without sacrificing quality or features. Stop reinventing the wheel and focus on what makes
            your application unique.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            endIcon={<ArrowForward />}
            href="/docs/getting-started"
            sx={{ py: 1.5, px: 4 }}
          >
            View Documentation
          </Button>
        </Box>
      </Container>

      {/* Pricing */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }} id="pricing">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
            Simple, Transparent Pricing
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" color="primary">
                    COMMUNITY
                  </Typography>
                  <Typography variant="h3" component="div" gutterBottom>
                    Free
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    For individual developers and open source projects
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Full source code access" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Authentication & user management" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Material UI components" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Community support" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    href="https://github.com/novastack"
                  >
                    Download on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                border: 2, 
                borderColor: 'primary.main',
                boxShadow: 5,
                position: 'relative'
              }}>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 0,
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}
                >
                  RECOMMENDED
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" color="primary">
                    PRO
                  </Typography>
                  <Typography variant="h3" component="div" gutterBottom>
                    $49
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    One-time payment, lifetime updates
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Everything in Community" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Advanced components (charts, data grids)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Admin dashboard template" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Email templates" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Priority email support (3 months)" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    href="/checkout/pro"
                  >
                    Get Pro License
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body1">
              Looking for custom development or support? <Button color="primary">Contact us</Button>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                NovaStack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Material UI starter kit for Laravel
                that helps solo developers build
                professional web applications faster.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton color="primary" aria-label="GitHub" component="a" href="https://github.com/novastack">
                  <GitHub />
                </IconButton>
                <IconButton color="primary" aria-label="Twitter" component="a" href="https://twitter.com/novastack">
                  <Twitter />
                </IconButton>
                <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://linkedin.com/company/novastack">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 700 }}>
                Product
              </Typography>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <Button color="inherit" href="/features">Features</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/pricing">Pricing</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/docs">Documentation</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/releases">Releases</Button>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 700 }}>
                Resources
              </Typography>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <Button color="inherit" href="/blog">Blog</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/tutorials">Tutorials</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/community">Community</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/showcase">Showcase</Button>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 700 }}>
                Company
              </Typography>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <Button color="inherit" href="/about">About</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/contact">Contact</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/privacy">Privacy</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/terms">Terms</Button>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 700 }}>
                Support
              </Typography>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <Button color="inherit" href="/faq">FAQ</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="/help">Help Center</Button>
                </ListItem>
                <ListItem disableGutters>
                  <Button color="inherit" href="https://github.com/novastack/issues">Issues</Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 5 }}>
            <Divider />
            <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
              © {new Date().getFullYear()} NovaStack. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}