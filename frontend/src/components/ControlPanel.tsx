import Switch from '@mui/material/Switch';






import { useState } from 'react';

function ControlPanel({ onRead }: { 
    onRead: () => void;
    
}) {
    const [label, setLabel] = useState("Enabled");

    return (
        <div className="control-panel">
            <label>
                <Switch
                    defaultChecked
                    onChange={(event) => {
                        if (event.target.checked) {
                            // Handle enabled state
                            setLabel("Enabled");
                        } else {
                            // Handle disabled state
                            setLabel("Disabled");
                        }
                    }}
                />
                {label}
            </label>

            {/* Add spacing here */}
            <div className="spacing"></div>

            <button onClick={onRead}>Read</button>
        </div>
    );
}

export default ControlPanel;
