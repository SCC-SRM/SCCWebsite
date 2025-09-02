export default function ProjectCard(props) {
  return (
    <div className="md:w-[550px] w-[270px] relative flex flex-col just md:h-[430px] h-[470px]">
      <h1 className="text-3xl pb-3">{props.title}</h1>
      <p className="font-light">{props.description}</p>
      <img className="absolute bottom-0" src={props.image}></img>
    </div>
  );
}
