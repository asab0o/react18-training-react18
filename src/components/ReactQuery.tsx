import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Album = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    return result.data;
}

export const ReactQuery = () => {
    const { isLoading, error, data } = useQuery<Album[]>({queryKey: ['album'], queryFn: fetchAlbums})

    if (error) return <p>error!!</p>
    if (isLoading) return <p>loading...</p>

    return (
        <div>
            <p>React Query</p>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </div>
    )
}