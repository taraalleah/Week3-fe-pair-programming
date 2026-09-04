    const SocialLink = ({ link, itemClass }) => {
      return (
        <li>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={itemClass}
          >
          <i className={link.icon} />
        </a>
        </li>
      )
    }
    export default SocialLink