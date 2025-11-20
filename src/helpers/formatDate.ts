const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleString("es", { timeZone: "America/Argentina/Buenos_Aires" });
};

export default formatDate;
