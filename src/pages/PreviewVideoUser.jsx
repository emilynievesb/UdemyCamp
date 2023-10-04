import { Header } from "../components/HeaderHome";
import { PreviewVideo } from "../components/PreviewVideo";
function PreviewVideoUser({ username, id, avatar, course }) {
  return (
    <>
      <Header username={username} id={id} avatar={avatar}></Header>
      <PreviewVideo
        username={username}
        id={id}
        avatar={avatar}
        course={course}
      ></PreviewVideo>
    </>
  );
}
export { PreviewVideoUser };
