const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      lastName: "",
      yourEmail: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      questions: "",
      _wpcf7_unit_tag: "wpcf7-f858-965",
    };
  });
};

export default clearFormFields;
