import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '115vh', width: '98%', margin: '20px 10px', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    border:'1px solid rgba(255,255,255, 0.2)', borderRadius: '4px'
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));