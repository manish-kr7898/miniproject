import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import Typed from 'react-typed';
 
import  {Decorator}  from "../common/commonComponents";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <Typography varinat='h4' component='h5' className={classes.headerTitle}>
          Mindpxyle <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={[" Webdeveloper,", " UI/UX Designer,", " Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop>
              
            </Typed>
          
        </Typography>
        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
           Create Website And Application,
          <br />
          Based On Your Needs...
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  );
}