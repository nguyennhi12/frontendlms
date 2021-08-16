import React from 'react'
import CardItem from './CardItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    gridContainer:{
        paddingLeft:'6%',
        paddingRight: '20px'
    },
    listText:{
        fontSize:'1.5rem',
        color:'#363740',
        display:'block',
        marginTop:'20px',
        marginLeft:'20px'
        
    }

});
function CardList() {
    const classes = useStyles()
    return (
        
        <>
        {/* <span className={classes.listText}>Danh sách các khóa học </span> */}
        <Grid container  className={classes.gridContainer}>
          
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            <Grid item xs={12} sm={3} md ={3}>
                <CardItem/>
            </Grid>
            
        </Grid>
   
        </>
    )
}

export default CardList;
