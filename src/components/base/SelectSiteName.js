import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectSiteName({ setSiteNamee }) {
  const [site, setSite] = React.useState("Argillite Site");

  const handleChange = (event) => {
    setSite(event.target.value);
    setSiteNamee(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          style={{ color: "white" }}
          id="demo-simple-select-standard-label"
        >
          Site Name
        </InputLabel>
        <Select
          style={{ color: "white" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={site}
          onChange={handleChange}
          label="Site Name"
        >
          <MenuItem value={"River Rock Site"}>River Rock Site</MenuItem>
          <MenuItem value={"Blue Gray Site"}>Blue Gray Site</MenuItem>
          <MenuItem value={"Argillite Site"}>Argillite</MenuItem>
          <MenuItem value={"Argillite Multi Color Site"}>
            Argillite Multi Color
          </MenuItem>
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
