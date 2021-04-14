import React, { useState } from 'react'
import {
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField,
    Button, InputLabel, MenuItem, Select, Grid, Typography
} from '@material-ui/core';

const widthStyle = { width: '80%', maxWidth: '700px' }

export default function InterestCalculator() {

    const [interestValues, setInterestValues] = useState({ interestType: "si", amount: 0, interestRate: 0, fromDate: new Date().toJSON().slice(0, 10), toDate: new Date().toJSON().slice(0, 10), compoundInterval: 1, totalDays: 0, calculatedInterest: 0, totalAmount: 0 });

    const interestValueChanged = (event) => {
        setInterestValues({ ...interestValues, [event.target.name]: event.target.value });
    };

    const calculateInterest = () => {
        const fromDate = new Date(interestValues.fromDate);
        const toDate = new Date(interestValues.toDate);
        if (validateInterestValues(fromDate, toDate)) {
            const timeDifference = Math.abs(toDate - fromDate);
            const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            const totalYears = daysDifference / 365;
            interestValues.interestType === "si" ? calculateSimpleInterest(totalYears, daysDifference) : calculateCompoundInterest(totalYears, daysDifference);
        }
    }

    const calculateSimpleInterest = (totalYears, daysDifference) => {
        //debugger;
        const interestValue = Math.round((interestValues.amount * (interestValues.interestRate * totalYears)) / 100);

        setInterestValues({ ...interestValues, calculatedInterest: interestValue, totalAmount: Number(interestValues.amount) + interestValue, totalDays: daysDifference });
    }

    const validateInterestValues = (fromDate, toDate) => {
        if (isNaN(interestValues.amount) || interestValues.amount < 0) {
            // Principal amount should be greater than 0
            return false;
        }
        if (isNaN(interestValues.interestRate) || interestValues.interestRate === 0) {

            // interest should not be 0
            return false;
        }
        if (toDate < fromDate) {
            // to date should be greater than from date
            return false;
        }
        return true;
    }

    const calculateCompoundInterest = (totalYears, daysDifference) => {
        const compoundInterval = interestValues.compoundInterval * (12 / interestValues.compoundInterval);
        const totalAmount = interestValues.amount * ((1 + (interestValues.interestRate / (compoundInterval * 100))) ** (compoundInterval * totalYears))

        setInterestValues({ ...interestValues, calculatedInterest: Number(interestValues.amount) - totalAmount, totalAmount: totalAmount, totalDays: daysDifference });
    }

    return (
        <Grid container spacing={2} direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Interest Type</FormLabel>
                    <RadioGroup aria-label="Interest Type" value={interestValues.interestType} name="interestType" onChange={interestValueChanged} row size="small">
                        <FormControlLabel value="si" control={<Radio color="primary" />} label="SI" />
                        <FormControlLabel value="ci" control={<Radio color="primary" />} label="CI" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" label="Amount" variant="outlined" onChange={interestValueChanged} name="amount" value={interestValues.amount} fullWidth size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" label="Interest Rate (in %)" variant="outlined" name="interestRate" onChange={interestValueChanged} value={interestValues.interestRate} fullWidth size="small" />
            </Grid>
            {interestValues.interestType === "ci" ? (
                <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Interval</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={interestValues.compoundInterval} name="compoundInterval"
                            label="Interval" onChange={interestValueChanged} size="small" fullWidth
                        >
                            <MenuItem value={1}>Monthly</MenuItem>
                            <MenuItem value={3}>Quaterly</MenuItem>
                            <MenuItem value={6}>HalfYearly</MenuItem>
                            <MenuItem value={12}>Yearly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>) : ("")}
            <Grid item xs={12}>
                <TextField label="From Date" type="date" variant="outlined" name="fromDate" value={interestValues.fromDate} onChange={interestValueChanged} fullWidth size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField label="To Date" type="date" name="toDate" variant="outlined" value={interestValues.toDate} onChange={interestValueChanged} fullWidth size="small" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={calculateInterest} fullWidth size="small">Calculate</Button>
            </Grid>
            {
                interestValues.calculatedInterest ? (<Grid item xs={12}>
                    <Typography>
                        Principle Amount : {interestValues.amount} <br />
                        Interest Rate : {interestValues.interestRate} <br />
                        Interest Type : {interestValues.interestType} <br />
                        From date : {interestValues.fromDate} <br />
                        To date : {interestValues.toDate} <br />
                        Total Days : {interestValues.totalDays} <br />
                        Interest Amount: {interestValues.calculatedInterest} <br />
                        Total Amount : {interestValues.totalAmount}
                    </Typography>
                </Grid>) : ("")
            }

        </Grid>
    )
}
