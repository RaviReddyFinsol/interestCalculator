import React, { useState } from 'react'
import { Button, Paper, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import AddUpdateRatio from './AddUpdateRatio'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import _ from 'lodash'

const useStyles = makeStyles({
    tableContainer: {
        maxHeight: 500,
        margin: 7,
        width: '95%'
    },
    fieldControl: {
        width: '80%',
        maxWidth: 300,
        marginTop: 10
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'dodgerBlue',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,
        fontWeight: "600"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
function RatioStrategy() {

    const [dialogDetails, setDialogDetails] = useState({ state: false, strategyDetails: null })
    const [strategies, setStrategies] = useState([])

    const openDialog = () => {
        setDialogDetails({ ...dialogDetails, state: true })
    }

    const openDialogForEdit = (strategy) => {
        setDialogDetails({ strategyDetails: { ...strategy }, state: true })
    }

    const closeDialog = () => {
        setDialogDetails({ state: false, strategyDetails: null })
    }

    const addStrategy = (strategy) => {
        let newStrategy = { ...strategy }
        newStrategy.id = newStrategy.teamOne + newStrategy.teamTwo
        calculateProfitLoss(newStrategy);
        setStrategies(_.orderBy([...strategies, newStrategy], 'id'))
        closeDialog();
    }

    const updateStrategy = (strategy) => {
        let filteredStrategies = strategies.filter(i => i.id !== strategy.id);
        let newStrategy = { ...strategy }
        calculateProfitLoss(newStrategy);
        filteredStrategies.push(newStrategy);
        setStrategies(_.orderBy(filteredStrategies, 'id'))
        closeDialog();
    }

    const deleteStrategy = (id) => {
        let filteredStrategies = strategies.filter(i => i.id !== id);
        setStrategies(filteredStrategies)
    }

    const calculateProfitLoss = newStrategy => {
        newStrategy.teamOneWin = 0;
        newStrategy.teamTwoWin = 0;
        for (let leg of newStrategy.legs) {
            const profit = leg.amount * leg.ratio;
            if (leg.legSide === '1') {
                newStrategy.teamOneWin += profit
                newStrategy.teamTwoWin -= leg.amount
            }
            else {
                newStrategy.teamOneWin -= leg.amount
                newStrategy.teamTwoWin += profit
            }
        }
    }

    const classes = useStyles();

    return (
        <>
            <div>
                <Button variant='contained' color='primary' size='small' onClick={openDialog} style={{ marginTop: '10px', marginLeft: '20px' }}>Add Team</Button>
                <Paper >
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Teams</StyledTableCell>
                                    <StyledTableCell>Team 1 Profit</StyledTableCell>
                                    <StyledTableCell>Team 2 Profit</StyledTableCell>
                                    {
                                        strategies.length > 0 && strategies[0].legs.map(leg => (
                                            <React.Fragment key={leg.legType}>
                                                <StyledTableCell>
                                                    {leg.legType}
                                                </StyledTableCell>
                                            </React.Fragment>
                                        ))
                                    }
                                    <StyledTableCell>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {strategies.map((strategy) => (
                                    <StyledTableRow key={strategy.id}>
                                        <StyledTableCell>
                                            {strategy.teamOne} vs {strategy.teamTwo}
                                        </StyledTableCell>
                                        <StyledTableCell style={strategy.teamOneWin < 0 ? { color: 'red' } : { color: 'blue' }}>
                                            {strategy.teamOneWin}
                                        </StyledTableCell>
                                        <StyledTableCell style={strategy.teamTwoWin < 0 ? { color: 'red' } : { color: 'blue' }}>
                                            {strategy.teamTwoWin}
                                        </StyledTableCell>
                                        {
                                            strategy.legs.map(leg => (
                                                <React.Fragment key={leg.legType}>
                                                    <StyledTableCell>
                                                        {leg.legSide === '1' ? strategy.teamOne : strategy.teamTwo} / {leg.ratio} / {leg.amount} / {leg.legName}
                                                    </StyledTableCell>
                                                </React.Fragment>
                                            ))
                                        }
                                        <StyledTableCell>
                                            <IconButton size="small" onClick={() => openDialogForEdit(strategy)}>
                                                <Edit size="small" color="primary" />
                                            </IconButton>
                                            <IconButton size="small" onClick={() => deleteStrategy(strategy.id)}>
                                                <Delete size="small" color="secondary" />
                                            </IconButton>
                                        </StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
            {
                dialogDetails.state && (
                    <AddUpdateRatio details={dialogDetails} closeDialog={closeDialog} addStrategy={addStrategy} updateStrategy={updateStrategy} />
                )}
        </>
    )
}

export default RatioStrategy
