import React, { useState } from 'react';
// import { Radio, RadioGroup, FormControlLabel, Slider, Button } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, Slider } from '@mui/material';
enum TextSize {
  Concise = 'concise',
  Detailed = 'detailed',
  Expressive = 'expressive',
}

const SettingsPage: React.FC = () => {
  const [textSize, setTextSize] = useState<TextSize>(TextSize.Concise);
const volume = 50; // Declare and assign a value to the 'volume' variable

  const handleTextSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(event.target.value as TextSize);
  };

  return (
    <div>
      {/* <h1>Settings</h1> */}

      <div>
        {/* <h2>Text Size</h2> */}
        <RadioGroup value={textSize} onChange={handleTextSizeChange}>
          <FormControlLabel value={TextSize.Concise} control={<Radio />} label="Concise" />
          <FormControlLabel value={TextSize.Detailed} control={<Radio />} label="Detailed" />
          <FormControlLabel value={TextSize.Expressive} control={<Radio />} label="Expressive" />
        </RadioGroup>
      </div>


      <div>
        <button>key binds</button>
        <button>more settings</button>
        <h2>Volume</h2>
        <Slider min={0} max={100} value={volume} />
      </div>

      <div>
        {/* Add other adjustable settings relevant for a screen reader here */}
      </div>

      <div>
        {/* <Button variant="contained" color="primary">Save</Button>
        <Button variant="contained" color="secondary">Cancel</Button> */}
      </div>
    </div>
  );
};

export default SettingsPage;
