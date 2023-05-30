import User from "@/components/user"

function userlist({ users }) {
    return (
        <>
            <h1 className="text-5xl">users list from json</h1>
            {
                users.map((user) => {
                    return (
                        <>
                            <div key={user.id}>
                                <User user={user} />
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default userlist
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        }
    }
}