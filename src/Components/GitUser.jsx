
import { useState} from "react";

function GitUser(){

    const [searchInput, setSearchInput] = useState('')
    const [UserData, setUserData] = useState([])
    const [error, setError] = useState(false)

    function submitHandler(e){

        e.preventDefault();


        if (searchInput.length === 0){
            return;
        }

        const fetchUrl = `https://api.github.com/users/${searchInput}`;


        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (data.message){
                    setError(true)
                }else {
                    setError(false)
                }

                setUserData(data);
            })

    }

    return (

        <div className={"w-1/2"}>
            <h1 className={"font-bold text-3xl text-blue-500 text-center p-4 "}>Search Git Users</h1>

            <form onSubmit={submitHandler} className={"flex gap-2"}>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={"Search for User"} className={"p-2 border rounded border-black w-full"} />
                <button type={"submit"} className={"bg-blue-500 text-white p-2 rounded"}>Search</button>
            </form>

            {UserData.length === 0 ? (
                <h1>No Result Yet.</h1>
            ) : (
                error ? (
                    <h1>User not found</h1>
                ) : (
                    <div className={"flex flex-wrap gap-3 "}>
                        <div className={"p-3"}>
                            <img src={UserData?.avatar_url} width={100} height={100} alt="User Avatar" />
                            <h1 className={'font-bold'}>{UserData?.login}</h1>
                        </div>

                        <div className={"p-3"}>
                            <img src={UserData?.avatar_url} width={100} height={100} alt="User Avatar" />
                            <h1 className={'font-bold'}>{UserData?.login}</h1>
                        </div>

                        <div className={"p-3"}>
                            <img src={UserData?.avatar_url} width={100} height={100} alt="User Avatar" />
                            <h1 className={'font-bold'}>{UserData?.login}</h1>
                        </div>


                    </div>
                )
            )}

        </div>
    )


}


export default GitUser;