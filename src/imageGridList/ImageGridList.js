import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 450,
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


const imgData = [
    {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    }
];

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {imgData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
