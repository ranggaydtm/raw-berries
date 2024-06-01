/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { Link } from 'react-router-dom';
import { ButtonBase, Stack, Typography } from '@mui/material';

import config from 'config';
import logo from 'assets/images/logo/logoKemlu.png';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Logo />
        {/* <Stack container>
            <Stack direction="row" alignItems="center" spacing={2}>
                <img src={logo} alt="Logo Kemlu" width="160" />
                <Typography variant="h6" width="160px" sx={{ color: 'black' }}>
                    Website Title
                </Typography>
            </Stack>
        </Stack> */}
    </ButtonBase>
);

export default LogoSection;
