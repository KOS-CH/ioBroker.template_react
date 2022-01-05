import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';
import { SelectColorClaasOptions } from './ColorClassOption';
import { SelectLightOptions } from './LightOptions';
import { SelectSensorFunction } from './SensorFunctionOptions';

//const deviceTypeOptions: { value: string; title: string }[] = [
const deviceTypeOptions = [
	{
		label: 'Select Device type',
		title: 'selectDevice',
		disabled: true,
	},
	{
		label: 'lamp',
		title: 'deviceTypeOptionsLamp',
	},
	{
		label: 'rgbLamp',
		title: 'deviceTypeOptionsRGBLamp',
	},
	{
		label: 'sensor',
		title: 'deviceTypeOptionsSensor',
	},
	{
		label: 'presenceSensor',
		title: 'deviceTypeOptionsMotionDetection',
	},
	{
		label: 'smokeAlarm',
		title: 'deviceTypeOptionsSmokeAlarm',
	},
	{
		label: 'button',
		title: 'deviceTypeOptionsButton',
	},
	{
		label: 'doorbell',
		title: 'deviceTypeOptionsDoorbell',
	},
	{
		label: 'multiSensor',
		title: 'deviceTypeOptionsMultiSensor',
	},
	{
		label: 'awayButton',
		title: 'ddeviceTypeOptionsAwayButton',
	},
];

export const SelectDeviceType = (): JSX.Element => {
	const { translate: _ } = useI18n();
	const [brightnessAstroDay, setBrightnessAstroDay] = useState('selectDevice');

	const handleChangeDay = (event: SelectChangeEvent) => {
		setBrightnessAstroDay(event.target.value);
	};

	const astroSelect = () => {
		const menuItem: JSX.Element[] = [];
		for (const key in deviceTypeOptions) {
			menuItem.push(
				<MenuItem
					disabled={deviceTypeOptions[key].disabled}
					key={key + deviceTypeOptions[key].label}
					value={deviceTypeOptions[key].title}
				>{`${_(deviceTypeOptions[key].label)}`}</MenuItem>,
			);
		}
		return menuItem;
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
					<FormControl>
						<InputLabel id="AddDevice-select-label">{_('Select Device type')}</InputLabel>
						<Select
							labelId="AddDevice-select-label"
							id="AddDevice"
							value={brightnessAstroDay}
							label="astro time day"
							onChange={handleChangeDay}
							sx={{ width: 250 }}
						>
							{astroSelect()}
						</Select>
					</FormControl>
				</Box>
			</React.Fragment>
			{brightnessAstroDay === 'deviceTypeOptionsDoorbell' ? (
				<React.Fragment>
					<Grid
						container
						spacing={1}
						sx={{
							marginTop: '10px',
							paddingBottom: '15px',
							alignItems: 'center',
							justifyContent: 'space-around',
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
						}}
					>
						<React.Fragment>
							<SelectLightOptions />
							<SelectColorClaasOptions />

							<TextField id="outlined-basic" label="Outlined" variant="outlined" />
							<TextField id="outlined-basic" label="Outlined" variant="outlined" />
						</React.Fragment>
					</Grid>
					<Grid
						container
						spacing={1}
						sx={{
							marginTop: '10px',
							paddingBottom: '15px',
							alignItems: 'center',
							justifyContent: 'space-around',
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
						}}
					>
						<h1>test1</h1>
					</Grid>
				</React.Fragment>
			) : null}
			{brightnessAstroDay === 'deviceTypeOptionsMultiSensor' ? (
				<React.Fragment>
					<Grid
						container
						spacing={1}
						sx={{
							marginTop: '10px',
							paddingBottom: '15px',
							alignItems: 'center',
							justifyContent: 'space-around',
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
						}}
					>
						<SelectSensorFunction />
						<h1>test2</h1>
					</Grid>
					<Grid
						container
						spacing={1}
						sx={{
							marginTop: '10px',
							paddingBottom: '15px',
							alignItems: 'center',
							justifyContent: 'space-around',
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
						}}
					>
						<h1>test2</h1>
						<h1>test2</h1>
					</Grid>
				</React.Fragment>
			) : null}
		</React.Fragment>
	);
};
