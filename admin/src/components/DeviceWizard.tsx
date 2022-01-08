import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { clearConfig } from '../lib/Config';
import { SelectDeviceType } from '../options/DeviceTypeOptions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

export default function AddDeviceDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		clearConfig();
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Add new Device
			</Button>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Add Device
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<SelectDeviceType />
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Save changes
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}

/* import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useI18n } from 'iobroker-react/hooks';
import React from 'react';

const steps = ['Device Usage', 'Select IoDP', 'Create an add'];

export default function HorizontalNonLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState<{
		[k: number]: boolean;
	}>({});
	const { translate: _ } = useI18n();

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step: number) => () => {
		setActiveStep(step);
		console.log('test');
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((label, index) => (
					<Step key={label} completed={completed[index]}>
						<StepButton color="inherit" onClick={handleStep(index)}>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>
			<div>
				{allStepsCompleted() ? (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>{_('All steps completed - youre finished')}</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleNext} sx={{ mr: 1 }}>
								Next
							</Button>
							{activeStep !== steps.length &&
								(completed[activeStep] ? (
									<Typography variant="caption" sx={{ display: 'inline-block' }}>
										Step {activeStep + 1} already completed
									</Typography>
								) : (
									<Button onClick={handleComplete}>
										{completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
									</Button>
								))}
						</Box>
					</React.Fragment>
				)}
			</div>
		</Box>
	);
} */
