const catchErrors = (error, displayError) => {
  let errorMessage;
  if (error.response) {
    errorMessage = error.response.data;
    if (error.response.data.error) {
      errorMessage = error.response.data.error.message;
    }
  } else if (error.request) {
    errorMessage = error.request;
  } else {
    errorMessage = error.message;
  }
  displayError(errorMessage);
};

export default catchErrors;
