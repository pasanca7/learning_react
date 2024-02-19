import { useState } from 'react'

export function TwitterFollowCard({formatUserName,userName="Unknown", name, imageSource, userIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(userIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = imageSource
    const text = isFollowing ? 'Following': 'Follow'
    const buttonClass = isFollowing
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={imageSrc} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong >{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    {text}
                    <span className='tw-followCard-stopFollow'></span>
                </button>
            </aside>
        </article>
    )
}