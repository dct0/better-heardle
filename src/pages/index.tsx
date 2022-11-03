import GuessManager from '@/components/guessmanager';
import Navbar from '@/components/navbar';
import Player from '@/components/player';

const Index = () => (
  <div className="w-full">
    <Navbar />
    <GuessManager />
    <Player />
  </div>
);

export default Index;
