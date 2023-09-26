import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    p: 4,
};

export default function ButtonAppBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <AppBar position="static"
            style={{
                background: 'transparent',
                boxShadow: 'none',
                padding: '1rem 0'
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to='/'>
                            <img
                                src="/images/brand.png"
                                alt="logo"
                                loading="lazy"
                                style={{ width: '70px' }}
                            />
                        </Link>
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        MovieApp
                    </Typography>
                </Box>
                <TextField
                    id="outlined-textarea"
                    label="Search Movie"
                    placeholder="Search..."
                    multiline
                    sx={{ minWidth: '757px' }}
                />
                <Typography variant="h5" component="h5" sx={{ color: 'black', cursor: 'pointer' }} onClick={handleOpen}>
                    Sign in
                </Typography>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >

                            <img
                                src="/images/brand.png"
                                alt="logo"
                                loading="lazy"
                                style={{ width: '60px' }}
                            />
                            <Typography variant="h5" component="div" ml={1}>
                                MilanTv
                            </Typography>
                        </Box>
                        <Box mx={5}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Email
                            </Typography>
                            <TextField fullWidth/>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Password
                            </Typography>
                            <TextField fullWidth/>
                            <Button >Sign In</Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>

        </AppBar>
    )
}
