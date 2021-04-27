//material ui

//acordian 
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function ControlledAccordions() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div className={classes.root}>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography className={classes.heading}>General settings</Typography>
//           <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
//             maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography className={classes.heading}>Users</Typography>
//           <Typography className={classes.secondaryHeading}>
//             You are currently not an owner
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
//             diam eros in elit. Pellentesque convallis laoreet laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography className={classes.heading}>Advanced settings</Typography>
//           <Typography className={classes.secondaryHeading}>
//             Filtering has been entirely disabled for whole web server
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
//             vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography className={classes.heading}>Personal data</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
//             vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
//end of accordion

//Icons
//my profile
//import { mdiAccount } from '@mdi/js';
//inline svg for html
//<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    //<path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
//</svg> 
//end of my Profile

//email
//import { mdiEmailOutline } from '@mdi/js';
//inline svg for html
//<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    //<path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
//</svg>
//end of eamil

//home
//import { mdiHomeCircle } from '@mdi/js';
//inline svg for html
//<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    //<path fill="currentColor" d="M19.07,4.93C17.22,3 14.66,1.96 12,2C9.34,1.96 6.79,3 4.94,4.93C3,6.78 1.96,9.34 2,12C1.96,14.66 3,17.21 4.93,19.06C6.78,21 9.34,22.04 12,22C14.66,22.04 17.21,21 19.06,19.07C21,17.22 22.04,14.66 22,12C22.04,9.34 21,6.78 19.07,4.93M17,12V18H13.5V13H10.5V18H7V12H5L12,5L19.5,12H17Z" />
//</svg>
//end of home

//projects
//import { mdiTableEye } from '@mdi/js';
//inline svg for html
//<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    //<path fill="currentColor" d="M17 16.88C17.56 16.88 18 17.32 18 17.88S17.56 18.88 17 18.88 16 18.43 16 17.88 16.44 16.88 17 16.88M17 13.88C19.73 13.88 22.06 15.54 23 17.88C22.06 20.22 19.73 21.88 17 21.88S11.94 20.22 11 17.88C11.94 15.54 14.27 13.88 17 13.88M17 15.38C15.62 15.38 14.5 16.5 14.5 17.88S15.62 20.38 17 20.38 19.5 19.26 19.5 17.88 18.38 15.38 17 15.38M18 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H9.42C9.26 18.68 9.12 18.34 9 18C9.12 17.66 9.26 17.32 9.42 17H4V13H10V15.97C10.55 15.11 11.23 14.37 12 13.76V13H13.15C14.31 12.36 15.62 12 17 12C18.06 12 19.07 12.21 20 12.59V5C20 3.9 19.1 3 18 3M10 11H4V7H10V11M18 11H12V7H18V11Z" />
//</svg>
//end of projects

//github
//import GitHubIcon from '@material-ui/icons/GitHub';

//LinkedIn
//import LinkedInIcon from '@material-ui/icons/LinkedIn';

//Profile
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//emial
//import MailOutlineIcon from '@material-ui/icons/MailOutline';

//home
//import HomeIcon from '@material-ui/icons/Home';

//facebook
//import FacebookIcon from '@material-ui/icons/Facebook';

//instagram
//import InstagramIcon from '@material-ui/icons/Instagram';

