import Game from '@/components/game';
import Navbar from '@/components/navbar';

const Index = () => {
  // useEffect(() => {
  //   const axiosConfig = {
  //     headers: {
  //       Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   axios
  //     .get('https://api.spotify.com/v1/me/playlists', axiosConfig)
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         console.error('Could not get playlists');
  //         // also error
  //       }

  //       console.log(res.data);
  //     });
  // }, []);
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Navbar />
      <Game />
    </div>
  );
};

export default Index;
