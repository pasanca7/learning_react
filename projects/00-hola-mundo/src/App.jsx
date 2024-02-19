import {TwitterFollowCard} from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "StephenCurry30",
        name: "Stephen Curry",
        imageSource: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg",
        userIsFollowing: false
    },

    {
        userName: "alo_oficial",
        name: "Fernando Alonso",
        imageSource: "https://pbs.twimg.com/profile_images/1744424284234141696/WpSHjTmK_400x400.jpg",
        userIsFollowing: true
    },

    {
        userName: "ali_mari",
        name: "Alina Hansen",
        imageSource: "https://media.licdn.com/dms/image/C4D03AQH9ZwLnq0qIcA/profile-displayphoto-shrink_800_800/0/1642695481043?e=2147483647&v=beta&t=2nwvo25Odutf5DiEi5RamJMC5wMxyqDki5GuO0e2HvQ",
        userIsFollowing: false
    },

    {
        userName: "ger_chanMerk",
        name: "Angela Merkel",
        imageSource: "https://cdn.britannica.com/17/172817-050-B5A3AE9B/Angela-Merkel-2012.jpg",
        userIsFollowing: false
    },
]

export function App() {
    const formatUserName = (username) => `@${username}`
    return(
        <>
            <section className='App'>
                {
                    users.map(user =>{
                        const { username, name, userIsFollowing } = user
                        return (
                            <TwitterFollowCard
                                key={username}
                                formatUserName={formatUserName}
                                name={name}
                                userName={username}
                                userIsFollowing={userIsFollowing}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}