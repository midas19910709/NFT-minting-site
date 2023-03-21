import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectNftName({ setNftNamee }) {
  const [nftName, setNftName] = React.useState("Apprentice");

  const handleChange = (event) => {
    setNftName(event.target.value);
    setNftNamee(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          style={{ color: "white" }}
          id="demo-simple-select-standard-label"
        >
          Nft Name
        </InputLabel>
        <Select
          style={{ color: "white" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={nftName}
          onChange={handleChange}
          label="Nft Name"
        >
          <MenuItem value={"Apprentice"}>Apprentice</MenuItem>
          <MenuItem value={"Foreman"}>Foreman</MenuItem>
          <MenuItem value={"Hewer"}>Hewer</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={site}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>River Rock Site</MenuItem>
          <MenuItem value={20}>Blue Gray Site</MenuItem>
          <MenuItem value={30}>Agillite</MenuItem>
          <MenuItem value={40}>Agillite Multi Color</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}
