import { Header } from "../components/HeaderHome";
import { ContentHome } from "../components/ContentHome";

function HomeUser({ username, id, avatar }) {
  return (
    <>
      <Header username={username} id={id} avatar={avatar}></Header>
      <ContentHome></ContentHome>
    </>
  );
}
export { HomeUser };
