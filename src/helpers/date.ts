function isBeforeAugust28GMT7(): boolean {
    // Get the current date in GMT+7
    const currentDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  
    // Parse the current date into a Date object
    const currentDateTime = new Date(currentDate);
  
    // Define the target date and time (August 28, 2023, 00:00:00 GMT+7)
    const targetDateTime = new Date("2023-08-28T00:00:00+07:00");
  
    // Compare the current date and time with the target date and time
    if (currentDateTime < targetDateTime) {
      return true; // The current time is before August 28, 2023, in GMT+7
    }
  
    return false; // The current time is on or after August 28, 2023, in GMT+7
  }

  export {isBeforeAugust28GMT7}