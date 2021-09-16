import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
}));

export default function DropdownList(props) {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  // const [demo,setDemo] = React.useState(props.data);


  
  const getDataId= (id) =>{
    props.getData(id)
  }


  useEffect(() => {
    setData(props.data);
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
    getDataId(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl} style={{ color: "#fff" }}>
        <InputLabel
          id="demo-controlled-open-select-label"
          style={{ color: "#fff" }}
        >
          {props.title}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={name}
          onChange={handleChange}
          style={{ color: "#fff" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
           {props.data.length &&
            props.data.map((item, index) => (
              <MenuItem value={item.id} test={item.id}>{item.displayName}</MenuItem>
            ))}

            {/* {console.log(name)} */}
        </Select>
      </FormControl>
    </div>
  );
}
