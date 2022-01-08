import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

/* interface SelectColorClassOptions {
	onChange: (value: number) => void;
} */
/* export const SelectColorClaasOptions: React.FC<SelectColorClaasOptions> = ({ onChange }): JSX.Element => { */

export default function VDCSettings() {
	const [vdcname, setVdcname] = React.useState('Name of VDC');
	const [tcpport, setTCPPort] = React.useState('local TCP Port');
	const [ioURL, setioURL] = React.useState('ioBroker URL');
	const [dSUID, setDSUID] = React.useState('dSUID of VDC');
	const handleNameChange = (event) => {
		setVdcname(event.target.value);
		console.log(event.target.value);
		/* Config.name = event.target.value; */
	};

	const handlePortChange = (event) => {
		setTCPPort(event.target.value);
		console.log(event.target.value);
		/* Config.name = event.target.value; */
	};

	const handleioBrokerUrlChange = (event) => {
		setioURL(event.target.value);
		console.log(event.target.value);
		/* Config.name = event.target.value; */
	};

	const handleDSUIDChange = (event) => {
		setDSUID(event.target.value);
		console.log(event.target.value);
		/* Config.name = event.target.value; */
	};

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-name" label="VDC Name" value={vdcname} onChange={handleNameChange} />
			<TextField id="outlined-name" label="local TCP Port" value={tcpport} onChange={handlePortChange} />
			<TextField id="outlined-name" label="Url from ioBroker" value={ioURL} onChange={handleioBrokerUrlChange} />
			<TextField id="outlined-name" label="dSUID from VDC" value={dSUID} onChange={handleDSUIDChange} />
		</Box>
	);
}

function genDSUID() {
	const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
	return genRanHex(34).toUpperCase();
}
