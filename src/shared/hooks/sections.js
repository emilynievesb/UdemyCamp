function getSourceTitle(source) {
  switch (source.type) {
    case "video":
      return source.videoTitle;
    case "video-recursos":
      return source.videoTitle; // Puedes ajustar esto según tus datos
    case "texto":
      return source.Title; // Ajusta esto según tus datos
    default:
      return "No hay un título cargado:("; // Puedes proporcionar un valor predeterminado si es necesario
  }
}
export { getSourceTitle };
