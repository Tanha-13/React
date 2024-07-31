
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Tanha-13')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
    // const {name,avatar_url, public_repos} = data;

    const data = useLoaderData();

    return (
    <div className='text-center text-5xl p-4 m-5 text-white 
    bg-slate-600'>
        <h1>GitHub Profile Name: {data.name}</h1>
        <h3 className='my-4'>Total Repository: {data.public_repos}</h3>
        <img className='w-80 h-80 rounded-full mx-auto' src={data.avatar_url} alt="" />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Tanha-13');
    const data = await response.json();
    return data;
}