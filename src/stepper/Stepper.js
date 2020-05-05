import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['HTML', 'CSS', 'JS', 'React'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The hypertext markup language, Hypertext Markup Language (HTML), controls the content 					and markup of what you see in the browser. Starting with it, you get a user interface 					with which you can interact, and you see the results of your code. When learning more 					complex languages, its importance will increase. You don’t need to code blindly.`;
    case 1:
      return 'CSS, or Cascading Style Sheets. Used to customize the appearance of HTML elements on 						the page. Check out the free tutorial material from Mozilla, and then use the 									CSS-Tricks resource to solve the most complex problems (there is a search at the top 						right).';
    case 2:
      return `JavaScript is the language of the web, and all major browsers (Chrome, Firefox, Safari, 				IE, many others) support it. Each site, each web application that you used most likely 					contains a huge amount of JS code. Not to mention the fact that the language is gaining 				popularity on other platforms - servers, desktop computers, other devices.`;
    case 3:
    	return `Facebook developers created React to work with their Flux architecture. This is a JS 						library for creating interfaces. Not so long ago, she broke into first place in 								popularity, overtaking Angular. Start with React. Here you can find a good free course 					for beginners.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
