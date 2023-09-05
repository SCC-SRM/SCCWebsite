import { NavLink } from 'react-router-dom'

function Link({ href, ...props }) {
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink)
    return <NavLink to={href} {...props}></NavLink>

  return <a href={href} rel="noopener noreferrer" {...props}></a>
}

export { Link }
