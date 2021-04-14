import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, Grid, TextField, Button, Typography, Divider, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
    fieldControl: {
        width: '80%',
        maxWidth: 300
    },
    buttonControl: {
        width: '40%',
    },
    container: {
        width: 500,
        height: 650,
        minHeight: '100%',
        margin: 10,
    },
}));

function AddUpdateRatio({ details, closeDialog, addStrategy, updateStrategy }) {

    const [strategy, setStrategy] = useState({ teamOne: '', teamTwo: '', legs: [{ legType: 'Leg 1', legName: '', legSide: '1', ratio: 0, amount: 0 }, { legType: 'Leg 2', legName: '', legSide: '2', ratio: 0, amount: 0 }, { legType: 'Leg 3', legName: '', legSide: '2', ratio: 0, amount: 0 },], teamOneWin: 0, teamTwoWin: 0 })

    useEffect(() => {
        if (details.strategyDetails) {
            setStrategy(details.strategyDetails);
        }
    }, [details.strategyDetails])

    const onValueChangeEvent = e => {
        setStrategy({ ...strategy, [e.target.name]: e.target.value })
    }

    const onLegValueChangeEvent = (e, leg) => {
        let existingLegs = strategy.legs.filter(i => i.legType !== leg.legType);
        let newLeg = { ...leg }
        newLeg[e.target.name] = e.target.value;
        existingLegs.push(newLeg);
        setStrategy({ ...strategy, legs: _.orderBy(existingLegs, 'legType') })
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Dialog open={details.state} onClose={closeDialog}>
                <DialogTitle>{details.strategyDetails ? 'Update' : 'Add'} Strategy</DialogTitle>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.container}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="Team 1 name" size="small" fullWidth={true} name="teamOne" value={strategy.teamOne} onChange={onValueChangeEvent} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="Team 2 name" size="small" fullWidth={true} name="teamTwo" value={strategy.teamTwo} onChange={onValueChangeEvent} />
                    </Grid>
                    {
                        strategy.legs.map(leg => (
                            <React.Fragment key={leg.legType}>
                                <Grid item xs={12}>
                                    <Divider />
                                    <Typography color="secondary">{leg.legType}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">My Team</FormLabel>
                                        <RadioGroup aria-label="team" name="legSide" value={leg.legSide} row onChange={(e) => onLegValueChangeEvent(e, leg)}>
                                            <FormControlLabel value="1" control={<Radio />} label="Team1" />
                                            <FormControlLabel value="2" control={<Radio />} label="Team2" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="outlined" label="Leg Name" size="small" fullWidth={true} name="legName" value={leg.legName} onChange={(e) => onLegValueChangeEvent(e, leg)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="outlined" label="Ratio" size="small" fullWidth={true} name="ratio" value={leg.ratio} onChange={(e) => onLegValueChangeEvent(e, leg)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="outlined" label="Invested" size="small" fullWidth={true} name="amount" value={leg.amount} onChange={(e) => onLegValueChangeEvent(e, leg)} />
                                </Grid>
                            </React.Fragment>
                        ))
                    }

                    <Grid item container justify="space-around" alignItems="center" direction="row">
                        <>
                            {
                                details.strategyDetails ? (<Button variant="contained" color="primary" size="small" className={classes.buttonControl} onClick={() => updateStrategy(strategy)} >Update</Button>) : (
                                    <Button variant="contained" color="primary" size="small" className={classes.buttonControl} onClick={() => addStrategy(strategy)} >Save</Button>
                                )
                            }
                            <Button variant="contained" color="secondary" size="small" className={classes.buttonControl} onClick={closeDialog}>Cancel</Button>
                        </>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}

export default AddUpdateRatio
