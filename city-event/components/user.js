function User({ user }) {
    return (
        <>
            <div className="text-neutral-50 mt-2 flex text-center">
                <p className="text-lg bg-gray-800 w-[250px] py-2 border rounded-lg">{user.name}</p>
                <p className="w-7 h-2 border rounded-full bg-emerald-700"></p>
                <p className="text-lg bg-green-700 hover:scale-105  transition ease-out w-[250px] py-2 border rounded-lg">{user.email}</p>
                <p className="w-7 h-2 border rounded-full bg-emerald-700"></p>
                <p className="text-lg bg-gray-800 w-[250px] py-2 border rounded-lg">{user.username}</p>
            </div>
        </>
    )
}

export default User;