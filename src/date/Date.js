import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
      <DateTimePicker
        autoOk
        ampm={false}
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
        label="24h clock"
      />
  );
}

export default BasicDateTimePicker;
