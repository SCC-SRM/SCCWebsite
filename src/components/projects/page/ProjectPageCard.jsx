import Button from '../../../assets/button/Button'

export default function ProjectPageCard(props) {
  return (
    <div className="flex gap-2 py-16 pb-28  ">
      <div className="rounded-lg px-16 w-1/2">
        <img src={props.image} className="rounded-lg"></img>
      </div>
      <div className="content w-1/2 px-16">
        <h1 className="capitalize text-center text-5xl">{props.title}</h1>
        <p className="pt-12">{props.description}</p>
        <div className="flex gap-10 justify-center pt-12">
          <a href={props.demolink}>
            <Button title="Demo" />
          </a>
          <a href={props.repolink}>
            <Button title="Repository" />
          </a>
        </div>
      </div>
    </div>
  )
}
