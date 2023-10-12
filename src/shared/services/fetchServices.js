async function userFetch() {
  try {
    let URLapi = `http://${import.meta.env.VITE_BACK_HOST}/auth/status`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Especifica el tipo de contenido JSON
      },
      credentials: "include",
    });
    const data = response;
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}
async function LogoutFetch() {
  try {
    let URLapi = `http://${import.meta.env.VITE_BACK_HOST}/auth/logout`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Especifica el tipo de contenido JSON
      },
      credentials: "include",
    });
    const data = response;
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

async function sectionsFetch(course) {
  try {
    let URLapi = `http://${
      import.meta.env.VITE_BACK_HOST
    }/api/get/getSections?course=${course}`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Puedes optar por relanzar el error si lo deseas
  }
}
async function sourcesFetch(course, section) {
  try {
    let URLapi = `http://${
      import.meta.env.VITE_BACK_HOST
    }/api/get/getSources?course=${course}&section=${section}`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Puedes optar por relanzar el error si lo deseas
  }
}
async function commentsFetch(type, course, sectionID, videoTitle) {
  try {
    let URLapi = type
      ? `http://${
          import.meta.env.VITE_BACK_HOST
        }/api/get/getComments?type=${type}&sectionID=${sectionID}&course=${course}&videoTitle=${videoTitle}`
      : `http://${
          import.meta.env.VITE_BACK_HOST
        }/api/get/getComments?sectionID=${sectionID}&course=${course}&videoTitle=${videoTitle}`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Puedes optar por relanzar el error si lo deseas
  }
}

async function postCommentFetch({
  type,
  course,
  sectionID,
  videoTitle,
  requestBody,
}) {
  try {
    let URLapi = type
      ? `http://${
          import.meta.env.VITE_BACK_HOST
        }/api/post/postComment?type=${type}&sectionID=${sectionID}&course=${course}&videoTitle=${videoTitle}`
      : `http://${
          import.meta.env.VITE_BACK_HOST
        }/api/post/postComment?sectionID=${sectionID}&course=${course}&videoTitle=${videoTitle}`;
    const response = await fetch(URLapi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Puedes optar por relanzar el error si lo deseas
  }
}

export {
  userFetch,
  sectionsFetch,
  sourcesFetch,
  LogoutFetch,
  commentsFetch,
  postCommentFetch,
};
