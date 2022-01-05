genDSUID() {
    const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
    return genRanHex(34).toUpperCase();
}


handleCreateDevice() {
    // const dsDevices = this.props.native.dsDevices;
    const dsDevices: Array<any> = [];
    // this.setState({ showCreateConfirmation: true });
    this.setState({ toast: "", showCreateConfirmation: true });
    // this.setConfirmationCheckbox();
    if (this.state.addDeviceDeviceType == "lamp") {
        // TODO fix objName
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { light: this.state.basicLampPowerSwitch },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 1,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    blink: true,
                    dontcare: true,
                    identification: true,
                    outmode: true,
                    outvalue8: true,
                    transt: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                channelDescriptions: [
                    {
                        brightness: {
                            channelType: 1,
                            dsIndex: 0,
                            max: 100,
                            min: 0,
                            name: "brightness",
                            resolution: 0.39215686274509803,
                            siunit: "percent",
                            symbol: "%",
                        },
                    },
                ],
                outputDescription: [
                    {
                        name: "light",
                        dsIndex: 0,
                        maxPower: -1,
                        function: 1,
                        outputUsage: 0,
                        type: "output",
                        variableRamp: false,
                    },
                ],
                outputSettings: [
                    {
                        dimTimeDown: 15,
                        dimTimeDownAlt1: 162,
                        dimTimeDownAlt2: 104,
                        dimTimeUp: 15,
                        dimTimeUpAlt1: 162,
                        dimTimeUpAlt2: 104,
                        minBrightness: 0.39215686274509803,
                        onThreshold: 50,
                        pushChanges: false,
                        mode: 2,
                        groups: [0, 1],
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "rgbLamp") {
        // TODO fix objName
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            id: this.genDSUID(),
            watchStateID: {
                switch: this.state.addDeviceRGBLampPowerSwitch,
                switchModeColor: this.state.addDeviceRGBLampColormode,
                brightness: this.state.addDeviceRGBLampDimmer,
                colortemp: this.state.addDeviceRGBLampColortemp,
                hue: this.state.addDeviceRGBLampHue,
                saturation: this.state.addDeviceRGBLampSaturation,
                rgb: this.state.addDeviceRGBLampRGB,
            },
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 1,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    blink: true,
                    dontcare: true,
                    identification: true,
                    outmode: true,
                    outputchannels: true,
                    outvalue8: true,
                    transt: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                channelDescriptions: [
                    {
                        brightness: {
                            channelType: 1,
                            dsIndex: 0,
                            max: 100,
                            min: 0,
                            name: "brightness",
                            resolution: 0.39215686274509803,
                            siunit: "percent",
                            symbol: "%",
                        },
                        colortemp: {
                            channelType: 4,
                            dsIndex: 3,
                            max: 1000,
                            min: 100,
                            name: "color temperature",
                            resolution: 1,
                            siunit: "mired",
                            symbol: "mired",
                        },
                        hue: {
                            channelType: 2,
                            dsIndex: 1,
                            max: 360,
                            min: 0,
                            name: "hue",
                            resolution: 0.1,
                            siunit: "degree",
                            symbol: "°",
                        },
                        saturation: {
                            channelType: 3,
                            dsIndex: 2,
                            max: 100,
                            min: 0,
                            name: "saturation",
                            resolution: 0.1,
                            siunit: "percent",
                            symbol: "%",
                        },
                        x: {
                            channelType: 5,
                            dsIndex: 4,
                            max: 1,
                            min: 0,
                            name: "CIE x",
                            resolution: 0.01,
                            siunit: "none",
                            symbol: "",
                        },
                        y: {
                            channelType: 6,
                            dsIndex: 5,
                            max: 1,
                            min: 0,
                            name: "CIE y",
                            resolution: 0.01,
                            siunit: "none",
                            symbol: "",
                        },
                    },
                ],
                outputDescription: [
                    {
                        name: "rgblight",
                        dsIndex: 0,
                        maxPower: -1,
                        function: 4,
                        outputUsage: 0,
                        type: "output",
                        variableRamp: true,
                    },
                ],
                outputSettings: [
                    {
                        dimTimeDown: 15,
                        dimTimeDownAlt1: 162,
                        dimTimeDownAlt2: 104,
                        dimTimeUp: 15,
                        dimTimeUpAlt1: 162,
                        dimTimeUpAlt2: 104,
                        minBrightness: 0.39215686274509803,
                        onThreshold: 50,
                        pushChanges: false,
                        mode: 2,
                        groups: [0, 1],
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "sensor") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { sensor_0: this.state.addDeviceSensorState },
            modifiers: {
                sensor_0: this.state.sensorMultiplier,
            },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: this.state.addDeviceSensorColorClass,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    // highlevel: true,
                    // akmsensor: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                sensorDescriptions: [
                    {
                        objName: "sensor_0",
                        aliveSignInterval: 0,
                        dsIndex: 0,
                        max: this.state.addDeviceSensorMax,
                        maxPushInterval: 0,
                        min: this.state.addDeviceSensorMin,
                        name: "sensor_0",
                        resolution: this.state.addDeviceSensorResolution,
                        sensorType: this.state.addDeviceSensorType,
                        sensorUsage: this.state.addDeviceSensorUsage,
                        siunit: this.state.unitValue.unit,
                        symbol: this.state.unitValue.symbol,
                        type: "sensor",
                        updateInterval: "0",
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "multiSensor") {
        interface watchStateID {
            [key: string]: string;
        }
        interface sensorDescription {
            objName: string;
            aliveSignInterval: number;
            dsIndex: number;
            max: string;
            maxPushInterval: number;
            min: string;
            name: string;
            resolution: string;
            sensorType: string;
            sensorUsage: string;
            siunit: string;
            symbol: string;
            type: string;
            updateInterval: string;
        }
        interface sensorSetting {
            group: string;
            minPushInterval: number;
            changesOnlyInterval: number;
            objName: string;
        }
        interface sensorModifier {
            [key: string]: string;
        }
        const watchStateID: watchStateID = {};
        const sensorDescription: Array<sensorDescription> = [];
        const sensorSetting: Array<sensorSetting> = [];
        const sensorModifiers: sensorModifier = {};
        this.state.sensorList.forEach((s, i) => {
            watchStateID[`sensor_${i}`] = s.selectSensor;
            sensorModifiers[`sensor_${i}`] = s.modifier;
            sensorDescription.push({
                objName: `sensor_${i}`,
                aliveSignInterval: 0,
                dsIndex: i,
                max: s.addDeviceSensorMax,
                maxPushInterval: 0,
                min: s.addDeviceSensorMin,
                name: `sensor_${i}`,
                resolution: s.addDeviceSensorResolution,
                sensorType: s.sensorType,
                sensorUsage: s.sensorUsage,
                siunit: s.addDeviceSensorSIUnit,
                symbol: s.addDeviceSensorSymbol,
                type: "sensor",
                updateInterval: "10",
            });
            sensorSetting.push({
                group: s.colorClass,
                minPushInterval: 2,
                changesOnlyInterval: 0,
                objName: `sensor_${i}`,
            });
        });
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: watchStateID,
            modifiers: sensorModifiers,
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: this.state.addDeviceSensorColorClass,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    // highlevel: true,
                    // akmsensor: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                sensorDescriptions: sensorDescription,
                sensorSettings: sensorSetting,
            },
        });
    } else if (this.state.addDeviceDeviceType == "smokeAlarm") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { generic_0: this.state.addDeviceSensorState },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 8,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    highlevel: true,
                    jokerconfig: true,
                    akmsensor: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                vendorId: "vendorname:kyuka.ch",
                binaryInputDescriptions: [
                    {
                        name: "generic_0",
                        objName: "generic_0",
                        dsIndex: 0,
                        inputType: 0,
                        inputUsage: 0,
                        sensorFunction: 7,
                        updateInterval: 0,
                        type: "binaryInput",
                    },
                ],
                binaryInputSettings: [
                    {
                        // changesOnlyInterval: 1800,
                        group: 8,
                        // minPushInterval: 2,
                        sensorFunction: 7,
                        inputName: "generic_0",
                        objName: "generic_0",
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "presenceSensor") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { generic_0: this.state.addDeviceSensorState },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 8,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    highlevel: true,
                    akmsensor: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                binaryInputDescriptions: [
                    {
                        // aliveSignInterval: 360,
                        name: "generic_0",
                        objName: "generic_0",
                        dsIndex: 0,
                        inputType: 0,
                        inputUsage: 0,
                        // maxPushInterval: 3300,
                        updateInterval: 0,
                        sensorFunction: 5,
                        // type: "binaryInput",
                    },
                ],
                binaryInputSettings: [
                    {
                        // changesOnlyInterval: 1800,
                        group: 8,
                        inputName: "generic_0",
                        objName: "generic_0",
                        // minPushInterval: 2,
                        sensorFunction: 5,
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "button") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { button_0: this.state.basicButton },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 8,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    highlevel: true,
                    jokerconfig: true,
                    pushbadvanced: true,
                    pushbarea: true,
                    pushbutton: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                vendorId: "vendorname:kyuka.ch",
                buttonInputDescriptions: [
                    {
                        buttonElementID: 0,
                        buttonID: 0,
                        buttonType: 1,
                        combinables: 0,
                        dsIndex: 0,
                        name: "button_id0_el0",
                        supportsLocalKeyMode: 0,
                        type: "buttonInput",
                        objName: "button_0",
                        // "x-p44-behaviourType": "buttonInput",
                    },
                ],
                buttonInputSettings: [
                    {
                        callsPresent: 0,
                        channel: 0,
                        function: 0,
                        group: 1,
                        mode: 0,
                        setsLocalPriority: 0,
                        objName: "button_0",
                        // "x-p44-buttonActionId": 0,
                        // "x-p44-buttonActionMode": 255,
                        // "x-p44-longFunctionDelay": "",
                        // "x-p44-stateMachineMode": 0,
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "awayButton") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { button_0: this.state.basicButton },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 8,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    highlevel: true,
                    jokerconfig: true,
                    pushbadvanced: true,
                    pushbarea: true,
                    pushbutton: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                vendorId: "vendorname:kyuka.ch",
                buttonInputDescriptions: [
                    {
                        buttonElementID: 0,
                        buttonID: 0,
                        buttonType: 1,
                        combinables: 0,
                        dsIndex: 0,
                        name: "button_id0_el0",
                        supportsLocalKeyMode: 0,
                        type: "buttonInput",
                        objName: "button_0",
                        // "x-p44-behaviourType": "buttonInput",
                    },
                ],
                buttonInputSettings: [
                    {
                        callsPresent: 0,
                        channel: 0,
                        function: 3,
                        group: 0,
                        mode: 0,
                        setsLocalPriority: 0,
                        objName: "button_0",
                        // "x-p44-buttonActionId": 0,
                        // "x-p44-buttonActionMode": 255,
                        // "x-p44-longFunctionDelay": "",
                        // "x-p44-stateMachineMode": 0,
                    },
                ],
            },
        });
    } else if (this.state.addDeviceDeviceType == "doorbell") {
        dsDevices.push({
            name: this.state.addDeviceName,
            deviceType: this.state.addDeviceDeviceType,
            watchStateID: { button_0: this.state.basicDoorbell },
            id: this.genDSUID(),
            dsConfig: {
                dSUID: this.genDSUID(),
                primaryGroup: 8,
                name: this.state.addDeviceName,
                configURL: this.state.addDeviceConfigURL,
                modelFeatures: {
                    highlevel: true,
                    jokerconfig: true,
                    pushbadvanced: true,
                    pushbarea: true,
                    pushbutton: true,
                },
                displayId: "",
                model: "ioBroker",
                modelUID: this.genDSUID(),
                modelVersion: "0.0.1",
                vendorName: "KYUKA",
                vendorId: "vendorname:kyuka.ch",
                buttonInputDescriptions: [
                    {
                        buttonElementID: 0,
                        buttonID: 0,
                        buttonType: 1,
                        /// combinables: 0,
                        dsIndex: 0,
                        name: "button_id0_el0",
                        supportsLocalKeyMode: 0,
                        type: "buttonInput",
                        objName: "button_0",
                        // "x-p44-behaviourType": "buttonInput",
                    },
                ],
                buttonInputSettings: [
                    {
                        callsPresent: 0,
                        channel: 0,
                        function: 5,
                        group: 8,
                        mode: 0,
                        setsLocalPriority: 0,
                        objName: "button_0",
                        // "x-p44-buttonActionId": 0,
                        // "x-p44-buttonActionMode": 255,
                        // "x-p44-longFunctionDelay": "",
                        // "x-p44-stateMachineMode": 0,
                    },
                ],
            },
        });
    }
    // this.props.onChange("dsDevice", dsDevices);
    this.props.sendToAddDevice(dsDevices[0]).then(() => {
        setTimeout(() => {
            this.props.updateLastDeviceUpdate();
        }, 3 * 1000);
    });

    this.setState({ sensorList: [] });

    // console.log("confirmMsg", this.state.showCreateConfirmation);

    // switch tab back to device settings
    // this.props.onChange("tabValue", 0);
}