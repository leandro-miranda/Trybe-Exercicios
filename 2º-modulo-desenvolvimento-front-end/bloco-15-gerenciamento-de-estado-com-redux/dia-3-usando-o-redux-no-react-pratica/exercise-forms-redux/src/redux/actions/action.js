export function setProfessionalData(professionalData) {
  return {
    type: 'SET_PROFESSIONAL_DATA',
    professionalData,
  };
}

export function setPersonalData(personalData) {
  return {
    type: 'SET_PERSONAL_DATA',
    personalData,
  };
}
